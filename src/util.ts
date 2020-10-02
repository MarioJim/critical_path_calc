import { SimulationLinkDatum } from './d3bundle';
import { Activity } from './types';

export const generateSuccessorsSets = (
  activities: Activity[],
): Set<number>[] => {
  const successorsSet = activities.map((_) => new Set<number>());
  activities.forEach((act) => {
    act.predecessors.forEach((predIdx) => {
      successorsSet[predIdx].add(act.index);
    });
  });
  return successorsSet;
};

export const numToLetter = (num: number): string =>
  String.fromCodePoint('A'.charCodeAt(0) + num);

export const generateLinks = <T>(
  activities: Activity[],
): SimulationLinkDatum<T>[] => {
  const links: SimulationLinkDatum<T>[] = [];
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
