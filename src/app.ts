import { addRow, delRow } from './buttons';
import { generateCPMGraph } from './cpm_graph';
import { generatePERTGraph } from './pert_graph';
import { Activity } from './types';

document.addEventListener('readystatechange', () => {
  if (document.readyState === 'interactive') {
    document.getElementById('add-row-btn').onclick = addRow;
    document.getElementById('rmv-row-btn').onclick = delRow;
    document.getElementById('gen-graphs-btn').onclick = generateGraphs;
  }
});

const generateGraphs = () => {
  const rows = document.querySelectorAll('tbody > tr');
  const activities = parseActivities(rows);
  generateCPMGraph(activities);
  generatePERTGraph(activities);
};

const parseActivities = (rows: NodeListOf<Element>): Activity[] => {
  return [];
};
