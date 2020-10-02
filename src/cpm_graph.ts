import { Activity, ActivityCPM } from './types';
import { generateSuccessorsSets, numToLetter } from './util';

export const generateCPMGraph = (activities: Activity[]) => {
  const activitiesCPM = generateActivities(activities);
  console.log(
    activitiesCPM
      .map(
        (act) =>
          `activ ${numToLetter(act.index)} sst ${act.earliestStartTime.toFixed(
            2,
          )} gst ${act.latestStartTime.toFixed(2)}`,
      )
      .join('\n'),
  );
};

const generateActivities = (activities: Activity[]): ActivityCPM[] => {
  const activitiesCPM: ActivityCPM[] = activities.map((act) => ({
    ...act,
    earliestStartTime: -1,
    latestStartTime: -1,
  }));
  // Set the smallest start time of the first activity as 0
  activitiesCPM[0].earliestStartTime = 0;
  // Calculate smallest start time for every activity
  let queue = activities.map((a) => a.index);
  while (queue.length > 0) {
    queue.forEach((idx) => {
      activitiesCPM[idx].earliestStartTime = activitiesCPM[
        idx
      ].predecessors.reduce(
        (maxStartTime, predIdx) =>
          findMaxStartTimeReducer(maxStartTime, activitiesCPM[predIdx]),
        0,
      );
    });
    queue = queue.filter((idx) => activitiesCPM[idx].earliestStartTime === -1);
  }
  // Set the greatest start time of the last activity as its smallest start time
  const lastStartTime =
    activitiesCPM[activitiesCPM.length - 1].earliestStartTime;
  activitiesCPM[activitiesCPM.length - 1].latestStartTime = lastStartTime;
  const successorsSets = generateSuccessorsSets(activitiesCPM);
  const successors = successorsSets.map((set) => [...set]);
  // Calculate greatest start time for every activity
  queue = activities.map((a) => a.index);
  while (queue.length > 0) {
    queue.forEach((idx) => {
      activitiesCPM[idx].latestStartTime = successors[idx].reduce(
        (minStartTime, succIdx) =>
          findMinStartTimeReducer(
            minStartTime,
            activitiesCPM[succIdx],
            activitiesCPM[idx].duration,
          ),
        lastStartTime,
      );
    });
    queue = queue.filter((idx) => activitiesCPM[idx].latestStartTime === -1);
  }
  return activitiesCPM;
};

const findMaxStartTimeReducer = (
  maxStartTime: number,
  predActivity: ActivityCPM,
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
  predActivity: ActivityCPM,
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
