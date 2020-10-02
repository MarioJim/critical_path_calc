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
  const activities = parseActivities();
  console.log(activities);
  generateCPMGraph(activities);
  generatePERTGraph(activities);
};

const parseActivities = (): Activity[] =>
  [...document.querySelectorAll('tbody > tr')].map((row, index, rows) => {
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
