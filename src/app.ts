import { addRow, delRow } from './buttons';
import { calculateActivitiesWithTimes } from './calculate_times';
import { generateCPMGraph } from './cpm_graph';
import { generatePERTGraph } from './pert_graph';
import { validateAndParseActivities } from './validate_input';

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
  console.log(activities);
  generateCPMGraph(activitiesWithTimes);
  generatePERTGraph(activitiesWithTimes);
};
