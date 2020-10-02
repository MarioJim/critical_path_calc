import { ActivityWithTimes } from './types';
import { numToLetter } from './util';

export const generateCPMGraph = (activities: ActivityWithTimes[]) => {
  console.log(
    activities
      .map(
        (act) =>
          `activ ${numToLetter(act.index)} sst ${act.earliestStartTime.toFixed(
            2,
          )} gst ${act.latestStartTime.toFixed(2)}`,
      )
      .join('\n'),
  );
};
