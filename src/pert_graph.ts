import {
  addArrowheadMarker,
  dragFunction,
  height,
  width,
} from './common_graphs';
import * as d3 from './d3bundle';
import { ActivityWithTimes, NodePERT, LinkPERT } from './types';
import { numToLetter } from './util';

const circleRadius = 30;
const redColor = '#E74C3C';

export const generatePERTGraph = (activities: ActivityWithTimes[]) => {
  window.pert_nodes = generateNodes(activities);
  window.pert_links = generateLinks(activities);

  const page = d3.select('#pert-graph');
  page.style('display', 'block');
  page.selectAll('svg').remove(); // Clear page from previous graphs
  const svg = page.append('svg').attr('viewBox', `0 0 ${width} ${height}`);

  // Add defs to use a marker as an arrowhead
  const defs = svg.append('defs');
  addArrowheadMarker(defs, circleRadius, 'arrowhead');
  addArrowheadMarker(defs, circleRadius, 'arrowhead-red', redColor);

  // Add lines for every link
  const edgepaths = svg
    .selectAll('.edgepath')
    .data(window.pert_links)
    .enter()
    .append('path')
    .attr('class', '.edgepath')
    .attr('fill-opacity', 0)
    .attr('stroke', (d) => (d.isCriticalPath ? redColor : 'black'))
    .attr('id', (_, i) => `edgepath-${i}`)
    .attr('marker-end', (d) =>
      d.isCriticalPath ? 'url(#arrowhead-red)' : 'url(#arrowhead)',
    )
    .style('pointer-events', 'none');

  // Add titles to links
  const edgelabels = svg
    .selectAll('.edgelabel')
    .data(window.pert_links)
    .enter()
    .append('text')
    .attr('dy', -3)
    .attr('class', '.edgelabel')
    .attr('font-size', 12)
    .style('pointer-events', 'none');

  edgelabels
    .append('textPath')
    .attr('href', (_, i) => `#edgepath-${i}`)
    .style('text-anchor', 'middle')
    .style('pointer-events', 'none')
    .attr('startOffset', '50%')
    .attr('fill', 'black')
    .text((d) => `${d.name}: ${d.duration}`);

  // Add circles for every node
  const node = svg
    .selectAll('.node')
    .data(window.pert_nodes)
    .enter()
    .append('g')
    .attr('class', 'node');

  node
    .append('circle')
    .attr('fill', '#AED6F1')
    .attr('r', circleRadius)
    .attr('stroke', 'black');

  node // Node index
    .append('text')
    .attr('dy', -5)
    .attr('text-anchor', 'middle')
    .text((d) => d.index + 1);

  node // Earliest start time
    .append('text')
    .attr('dy', 6)
    .attr('text-anchor', 'middle')
    .style('font-size', '10px')
    .text((d) => 'Ti: ' + d.earliestStartTime.toFixed(2));

  node // Latest start time
    .append('text')
    .attr('dy', 16)
    .attr('text-anchor', 'middle')
    .style('font-size', '10px')
    .text((d) => 'Tf: ' + d.latestStartTime.toFixed(2));

  // Add force simulation
  const forceSim = d3
    .forceSimulation(window.pert_nodes)
    .force('link', d3.forceLink(window.pert_links).distance(150).strength(1))
    .force('charge', d3.forceManyBody().strength(-1000))
    .force('center', d3.forceCenter(width / 2, height / 2))
    .on('tick', () => {
      node.attr('transform', (d) => `translate(${d.x},${d.y})`);

      edgepaths.attr('d', (d) => {
        const s = d.source as NodePERT,
          t = d.target as NodePERT;
        return `M ${s.x},${s.y} L${t.x},${t.y}`;
      });

      edgelabels.attr('transform', (d, i, nodes) => {
        if ((d.target as NodePERT).x < (d.source as NodePERT).x) {
          const bbox = nodes[i].getBBox();
          const rx = bbox.x + bbox.width / 2;
          const ry = bbox.y + bbox.height / 2;
          return `rotate(180 ${rx} ${ry})`;
        }
        return 'rotate(0)';
      });
    });

  // Add mouse drag to the nodes
  node.call(dragFunction(forceSim) as any);
};

const generateNodes = (activities: ActivityWithTimes[]): NodePERT[] => {
  const { earliestStartTime, duration } = activities[activities.length - 1];
  return activities
    .map(({ index, earliestStartTime, latestStartTime }) => ({
      index,
      earliestStartTime,
      latestStartTime,
    }))
    .concat([
      {
        index: activities.length,
        earliestStartTime: earliestStartTime + duration,
        latestStartTime: earliestStartTime + duration,
      },
    ]);
};

const generateLinks = (activities: ActivityWithTimes[]): LinkPERT[] => {
  const links: LinkPERT[] = [];
  activities.forEach((act) => {
    act.predecessors.forEach((predIdx) => {
      const { earliestStartTime, duration } = activities[predIdx];
      links.push({
        name: numToLetter(predIdx),
        duration: activities[predIdx].duration,
        isCriticalPath:
          act.latestStartTime.toFixed(2) ===
          (earliestStartTime + duration).toFixed(2),
        source: predIdx,
        target: act.index,
      });
    });
  });
  links.push({
    name: numToLetter(activities.length - 1),
    duration: activities[activities.length - 1].duration,
    isCriticalPath: true,
    source: activities.length - 1,
    target: activities.length,
  });
  return links;
};
