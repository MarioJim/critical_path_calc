import * as d3 from './d3bundle';
import { ActivityWithTimes, NodeCPM } from './types';
import { generateLinks, numToLetter } from './util';

const width = 800;
const height = 600;
const circleRadius = 30;

export const generateCPMGraph = (activities: ActivityWithTimes[]) => {
  window.cpm_nodes = generateNodes(activities);
  window.cpm_links = generateLinks<NodeCPM>(activities);

  const page = d3.select('#cpm-graph');
  page.style('display', 'block');
  page.selectAll('svg').remove(); // Clear page from previous graphs
  const svg = page.append('svg').attr('viewBox', `0 0 ${width} ${height}`);

  // Add defs to use a marker as an arrowhead
  const defs = svg.append('defs');
  defs
    .append('marker')
    .attr('id', 'arrowhead')
    .attr('viewBox', '-0 -5 10 10')
    .attr('refX', circleRadius + 3)
    .attr('orient', 'auto')
    .attr('markerWidth', 13)
    .attr('markerHeight', 13)
    .append('path')
    .attr('d', 'M0,-5 L10,0 L0,5');

  // Add lines for every link
  const edgepaths = svg
    .selectAll('.edgepath')
    .data(window.cpm_links)
    .enter()
    .append('path')
    .attr('class', '.edgepath')
    .attr('fill-opacity', 0)
    .attr('stroke', '#000')
    .attr('id', (_, i) => `edgepath-${i}`)
    .attr('marker-end', () => 'url(#arrowhead)')
    .style('pointer-events', 'none');

  // Add circles for every node
  const node = svg
    .selectAll('.node')
    .data(window.cpm_nodes)
    .enter()
    .append('g')
    .attr('class', 'node');

  node
    .append('circle')
    .attr('fill', (d) => getColor(d))
    .attr('r', circleRadius)
    .attr('stroke', 'black');

  node // Node letter
    .append('text')
    .attr('dy', 5)
    .attr('text-anchor', 'middle')
    .text((d) => numToLetter(d.index));

  node // Top left
    .append('text')
    .attr('dx', -2)
    .attr('dy', -10)
    .attr('text-anchor', 'end')
    .style('font-size', '8px')
    .text((d) => d.earliestStartTime.toFixed(2));

  node // top right
    .append('text')
    .attr('dx', 2)
    .attr('dy', -10)
    .attr('text-anchor', 'start')
    .style('font-size', '8px')
    .text((d) => (d.earliestStartTime + d.duration).toFixed(2));

  node //Bottom left
    .append('text')
    .attr('dx', -2)
    .attr('dy', 15)
    .attr('text-anchor', 'end')
    .style('font-size', '8px')
    .text((d) => d.latestStartTime.toFixed(2));

  node // Bottom right
    .append('text')
    .attr('dx', 2)
    .attr('dy', 15)
    .attr('text-anchor', 'start')
    .style('font-size', '8px')
    .text((d) => (d.latestStartTime + d.duration).toFixed(2));

  // Add force simulation
  const forceSim = d3
    .forceSimulation(window.cpm_nodes)
    .force('link', d3.forceLink(window.cpm_links).distance(150).strength(0.8))
    .force('charge', d3.forceManyBody().strength(-400))
    .force('center', d3.forceCenter(width / 2, height / 2))
    .on('tick', () => {
      node.attr('transform', (d) => `translate(${d.x},${d.y})`);

      edgepaths.attr('d', (d) => {
        const s = d.source as NodeCPM,
          t = d.target as NodeCPM;
        return `M ${s.x},${s.y} L${t.x},${t.y}`;
      });
    });

  // Add mouse drag to the nodes
  const dragFunction = d3
    .drag<Element, NodeCPM>()
    .on('start', (event, node) => {
      event.sourceEvent.stopPropagation();
      if (!event.active) forceSim.alphaTarget(0.3).restart();
      node.fx = node.x;
      node.fy = node.y;
    })
    .on('drag', (event, node) => {
      node.fx = event.x;
      node.fy = event.y;
    })
    .on('end', (event, node) => {
      if (!event.active) forceSim.alphaTarget(0);
      node.fx = null;
      node.fy = null;
    });
  node.call(dragFunction as any);
};

const generateNodes = (activities: ActivityWithTimes[]): NodeCPM[] =>
  activities.map(({ index, earliestStartTime, duration, latestStartTime }) => ({
    index,
    earliestStartTime,
    duration,
    latestStartTime,
  }));

const getColor = (node: NodeCPM): string => {
  // Starting and ending nodes
  if (node.index === 0 || node.index === window.cpm_nodes.length - 1)
    return '#5DADE2';
  // Critical path nodes
  if (node.latestStartTime.toFixed(2) === node.earliestStartTime.toFixed(2))
    return '#EC7063';
  return '#ABEBC6';
};
