import { Activity, ActivityWithTimes } from './types';
import { generateSuccessorsSets } from './util';

export const calculateActivitiesWithTimes = (
  activities: Activity[],
): ActivityWithTimes[] => {
  const activitiesWithTimes: ActivityWithTimes[] = activities.map((act) => ({
    ...act,
    earliestStartTime: -1,
    latestStartTime: -1,
  }));
  // Set the smallest start time of the first activity as 0
  activitiesWithTimes[0].earliestStartTime = 0;
  // Calculate smallest start time for every activity
  let queue = activities.map((a) => a.index);
  while (queue.length > 0) {
    queue.forEach((idx) => {
      activitiesWithTimes[idx].earliestStartTime = activitiesWithTimes[
        idx
      ].predecessors.reduce(
        (maxStartTime, predIdx) =>
          findMaxStartTimeReducer(maxStartTime, activitiesWithTimes[predIdx]),
        0,
      );
    });
    queue = queue.filter(
      (idx) => activitiesWithTimes[idx].earliestStartTime === -1,
    );
  }
  // Set the greatest start time of the last activity as its smallest start time
  const lastStartTime =
    activitiesWithTimes[activitiesWithTimes.length - 1].earliestStartTime;
  activitiesWithTimes[
    activitiesWithTimes.length - 1
  ].latestStartTime = lastStartTime;
  const successorsSets = generateSuccessorsSets(activitiesWithTimes);
  const successors = successorsSets.map((set) => [...set]);
  // Calculate greatest start time for every activity
  queue = activities.map((a) => a.index);
  while (queue.length > 0) {
    queue.forEach((idx) => {
      activitiesWithTimes[idx].latestStartTime = successors[idx].reduce(
        (minStartTime, succIdx) =>
          findMinStartTimeReducer(
            minStartTime,
            activitiesWithTimes[succIdx],
            activitiesWithTimes[idx].duration,
          ),
        lastStartTime,
      );
    });
    queue = queue.filter(
      (idx) => activitiesWithTimes[idx].latestStartTime === -1,
    );
  }
  return activitiesWithTimes;
};

const findMaxStartTimeReducer = (
  maxStartTime: number,
  predActivity: ActivityWithTimes,
) => {
  // If an activity without a calculated smallest start time has been found or if
  // the current predeceding activity doesn't have an already calculated start time
  if (maxStartTime === -1 || predActivity.earliestStartTime === -1) return -1;
  return Math.max(
    maxStartTime,
    predActivity.earliestStartTime + predActivity.duration,
  );
};

const findMinStartTimeReducer = (
  minStartTime: number,
  predActivity: ActivityWithTimes,
  activityDuration: number,
) => {
  // If an activity without a calculated greatest start time has been found or if
  // the current predeceding activity doesn't have an already calculated start time
  if (minStartTime === -1 || predActivity.latestStartTime === -1) return -1;
  return Math.min(
    minStartTime,
    predActivity.latestStartTime - activityDuration,
  );
};
