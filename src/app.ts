import { addRow, delRow } from './buttons';
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
  console.log(activities);
  generateCPMGraph(activities);
  generatePERTGraph(activities);
};
