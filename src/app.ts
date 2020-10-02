import { addRow, delRow } from './buttons';
import { calculateActivitiesWithTimes } from './calculate_times';
import { generateCPMGraph } from './cpm_graph';
import { generatePERTGraph } from './pert_graph';
import { LinkCPM, NodeCPM } from './types';
import { numToLetter } from './util';
import { validateAndParseActivities } from './validate_input';

declare global {
  interface Window {
    cpm_nodes: NodeCPM[];
    cpm_links: LinkCPM[];
  }
}

document.addEventListener('readystatechange', () => {
  if (document.readyState === 'interactive') {
    document.getElementById('add-row-btn').onclick = addRow;
    document.getElementById('rmv-row-btn').onclick = delRow;
    document.getElementById('gen-graphs-btn').onclick = generateGraphs;
  }
});

const generateGraphs = () => {
  const { activities, error } = validateAndParseActivities();
  if (!!error) {
    console.error(error);
    return;
  }
  const activitiesWithTimes = calculateActivitiesWithTimes(activities);
  console.log(
    activitiesWithTimes
      .map(
        (act) =>
          `activ ${numToLetter(act.index)} sst ${act.earliestStartTime.toFixed(
            2,
          )} gst ${act.latestStartTime.toFixed(2)}`,
      )
      .join('\n'),
  );
  generateCPMGraph(activitiesWithTimes);
  generatePERTGraph(activitiesWithTimes);
};
