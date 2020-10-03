import * as d3 from './d3bundle';
import { SimulationNodeDatum } from './d3bundle';

export const width = 800;
export const height = 600;

export const dragFunction = <T extends SimulationNodeDatum>(
  forceSim: d3.Simulation<T, undefined>,
) => {
  return d3
    .drag<Element, T>()
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
};

export const addArrowheadMarker = (
  defs: d3.Selection<SVGDefsElement, any, HTMLElement, any>,
  circleRadius: number,
  name: string,
  fill?: string,
) => {
  defs
    .append('marker')
    .attr('id', name)
    .attr('viewBox', '-0 -5 10 10')
    .attr('refX', circleRadius + 3)
    .attr('orient', 'auto')
    .attr('markerWidth', 13)
    .attr('markerHeight', 13)
    .append('path')
    .attr('fill', fill || 'black')
    .attr('d', 'M0,-5 L10,0 L0,5');
};
