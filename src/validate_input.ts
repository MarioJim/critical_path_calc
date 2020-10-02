import { Activity, Validation } from './types';
import { generateSuccessorsSets, numToLetter } from './util';

export const validateAndParseActivities = (): Validation => {
  const activities: Activity[] = [
    ...document.querySelectorAll('tbody > tr'),
  ].map((row, index, rows) => {
    const pred = (row.querySelector('input.predec') as HTMLInputElement).value
      .split(',')
      .map((str) => str.trim().toUpperCase())
      .filter((str) => str.length === 1)
      .map((str) => str.charCodeAt(0) - 'A'.charCodeAt(0))
      .filter((num) => num >= 0 && num < rows.length && num !== index);
    return {
      index,
      predecessors: [...new Set(pred)],
      duration: parseFloat(
        (row.querySelector('input.duration') as HTMLInputElement).value,
      ),
    };
  });
  // Check that first activity doesn't have predecessors
  if (activities[0].predecessors.length > 0) {
    return { error: "First activity can't have predecessors", activities: [] };
  }
  // Check every other activity has predecessors
  const actWithoutPredecessors = activities
    .slice(1)
    .find((act) => act.predecessors.length === 0);
  if (actWithoutPredecessors !== undefined) {
    const actName = numToLetter(actWithoutPredecessors.index);
    return {
      error: `Activity ${actName} doesn't have predecessors`,
      activities: [],
    };
  }
  // Check if there is a cycle
  const visited = new Set<number>();
  const stack = new Set<number>();
  const successorsSet = generateSuccessorsSets(activities);
  const isCyclic = isCyclicFromNode(0, successorsSet, visited, stack);
  if (isCyclic) {
    return {
      error: 'A cycle between activities has been detected',
      activities: [],
    };
  }
  // Return activities
  return {
    error: '',
    activities,
  };
};

// From https://www.geeksforgeeks.org/detect-cycle-in-a-graph/
const isCyclicFromNode = (
  nodeIdx: number,
  successors: Set<number>[],
  visited: Set<number>,
  stack: Set<number>,
): boolean => {
  if (stack.has(nodeIdx)) return true;
  stack.add(nodeIdx);
  visited.add(nodeIdx);
  let hasFoundCycle = false;
  successors[nodeIdx].forEach((successor) => {
    if (!visited.has(successor)) {
      if (isCyclicFromNode(successor, successors, visited, stack))
        hasFoundCycle = true;
    } else if (stack.has(successor)) {
      hasFoundCycle = true;
    }
  });
  stack.delete(nodeIdx);
  return hasFoundCycle;
};
