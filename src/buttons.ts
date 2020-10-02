import { numToLetter } from './util';

export const addRow = () => {
  const tbody = document.getElementsByTagName('tbody')[0];
  const numRows = tbody.getElementsByTagName('tr').length;
  const row = document.getElementById(`row${numRows - 1}`);
  row.getElementsByTagName('p')[0].innerText = numToLetter(numRows - 1);
  const tr = document.createElement('tr');
  tr.id = `row${numRows}`;
  const act_name = document.createElement('p');
  act_name.innerText = numToLetter(numRows) + ' (end)';
  act_name.classList.add('act-name');
  const td_act_name = document.createElement('td');
  td_act_name.appendChild(act_name);
  tr.appendChild(td_act_name);
  const inp_predec = document.createElement('input');
  inp_predec.type = 'text';
  inp_predec.classList.add('predec');
  const td_inp_predec = document.createElement('td');
  td_inp_predec.appendChild(inp_predec);
  tr.appendChild(td_inp_predec);
  const inp_duration = document.createElement('input');
  inp_duration.type = 'number';
  inp_duration.classList.add('duration');
  const td_inp_duration = document.createElement('td');
  td_inp_duration.appendChild(inp_duration);
  tr.appendChild(td_inp_duration);
  tbody.appendChild(tr);
};

export const delRow = () => {
  const tbody = document.getElementsByTagName('tbody')[0];
  const numRows = tbody.getElementsByTagName('tr').length;
  if (numRows == 2) return;
  const preLastRow = document.getElementById(`row${numRows - 2}`);
  preLastRow.getElementsByTagName('p')[0].innerText =
    numToLetter(numRows - 2) + ' (end)';
  document.getElementById(`row${numRows - 1}`).remove();
};
