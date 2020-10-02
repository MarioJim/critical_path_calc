import { numToLetter } from './buttons';
import { Activity, ActivityCPM } from './types';

export const generateCPMGraph = (activities: Activity[]) => {
  const activitiesCPM = generateActivities(activities);
  console.log(
    activitiesCPM.map(
      (act) =>
        `activ ${numToLetter(act.index)} sst ${act.smallestStartTime} gst ${
          act.greatestStartTime
        }`,
    ),
  );
};

const generateActivities = (activities: Activity[]): ActivityCPM[] => {
  const activitiesCPM: ActivityCPM[] = activities.map((act) => ({
    ...act,
    smallestStartTime: -1,
    greatestStartTime: -1,
  }));
  // Set the smallest start time of the first activity as 0
  activitiesCPM[0].smallestStartTime = 0;
  // Calculate smallest start time for every activity
  let queue = activities.map((a) => a.index);
  while (queue.length > 0) {
    queue.forEach((idx) => {
      activitiesCPM[idx].smallestStartTime = activitiesCPM[
        idx
      ].predecessors.reduce(
        (maxStartTime, predIdx) =>
          findMaxStartTimeReducer(maxStartTime, activitiesCPM[predIdx]),
        0,
      );
    });
    queue = queue.filter((idx) => activitiesCPM[idx].smallestStartTime === -1);
  }
  // Set the greatest start time of the last activity as its smallest start time
  const lastStartTime =
    activitiesCPM[activitiesCPM.length - 1].smallestStartTime;
  activitiesCPM[activitiesCPM.length - 1].greatestStartTime = lastStartTime;
  const successorsSet = activitiesCPM.map((_) => new Set<number>());
  activitiesCPM.forEach((act) => {
    act.predecessors.forEach((predIdx) => {
      successorsSet[predIdx].add(act.index);
    });
  });
  const successors = successorsSet.map((set) => [...set]);
  // Calculate greatest start time for every activity
  queue = activities.map((a) => a.index);
  while (queue.length > 0) {
    queue.forEach((idx) => {
      activitiesCPM[idx].greatestStartTime = successors[idx].reduce(
        (minStartTime, succIdx) =>
          findMinStartTimeReducer(minStartTime, activitiesCPM[succIdx]),
        lastStartTime,
      );
    });
    console.log(
      activitiesCPM.map((act) => `${act.index}: ${act.greatestStartTime}`),
    );
    queue = queue.filter((idx) => activitiesCPM[idx].smallestStartTime === -1);
  }
  return activitiesCPM;
};

const findMaxStartTimeReducer = (
  maxStartTime: number,
  predActivity: ActivityCPM,
) => {
  // If an activity without a calculated smallest start time has been found or if
  // the current predeceding activity doesn't have an already calculated start time
  if (maxStartTime === -1 || predActivity.smallestStartTime === -1) return -1;
  return Math.max(
    maxStartTime,
    predActivity.smallestStartTime + predActivity.duration,
  );
};

const findMinStartTimeReducer = (
  minStartTime: number,
  predActivity: ActivityCPM,
) => {
  // If an activity without a calculated greatest start time has been found or if
  // the current predeceding activity doesn't have an already calculated start time
  if (minStartTime === -1 || predActivity.greatestStartTime === -1) return -1;
  return Math.min(
    minStartTime,
    predActivity.greatestStartTime - predActivity.duration,
  );
};
