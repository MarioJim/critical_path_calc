import {
  addArrowheadMarker,
  dragFunction,
  height,
  width,
} from './common_graphs';
import * as d3 from './d3bundle';
import { ActivityWithTimes, LinkCPM, NodeCPM } from './types';
import { numToLetter } from './util';

const circleRadius = 30;

export const generateCPMGraph = (activities: ActivityWithTimes[]) => {
  window.cpm_nodes = generateNodes(activities);
  window.cpm_links = generateLinks(activities);

  const page = d3.select('#cpm-graph');
  page.style('display', 'block');
  page.selectAll('svg').remove(); // Clear page from previous graphs
  const svg = page.append('svg').attr('viewBox', `0 0 ${width} ${height}`);

  // Add defs to use a marker as an arrowhead
  const defs = svg.append('defs');
  addArrowheadMarker(defs, circleRadius, 'arrowhead');

  // Add lines for every link
  const edgepaths = svg
    .selectAll('.edgepath')
    .data(window.cpm_links)
    .enter()
    .append('path')
    .attr('class', '.edgepath')
    .attr('fill-opacity', 0)
    .attr('stroke', '#000')
    .attr('marker-end', 'url(#arrowhead)')
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
  node.call(dragFunction(forceSim) as any);
};

const generateNodes = (activities: ActivityWithTimes[]): NodeCPM[] =>
  activities.map(({ index, earliestStartTime, duration, latestStartTime }) => ({
    index,
    earliestStartTime,
    duration,
    latestStartTime,
  }));

const generateLinks = (activities: ActivityWithTimes[]): LinkCPM[] => {
  const links: LinkCPM[] = [];
  activities.forEach((act) => {
    act.predecessors.forEach((predIdx) => {
      links.push({
        source: predIdx,
        target: act.index,
      });
    });
  });
  return links;
};

const getColor = (node: NodeCPM): string => {
  // Starting and ending nodes
  if (node.index === 0 || node.index === window.cpm_nodes.length - 1)
    return '#5DADE2';
  // Critical path nodes
  if (node.latestStartTime.toFixed(2) === node.earliestStartTime.toFixed(2))
    return '#EC7063';
  return '#ABEBC6';
};
