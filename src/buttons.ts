export const addRow = () => {
  const tbody = document.getElementsByTagName('tbody')[0];
  const numRows = tbody.getElementsByTagName('tr').length;
  const row = document.getElementById(`row${numRows - 1}`);
  row.getElementsByTagName('p')[0].innerText = numToLetter(numRows - 1);
  tbody.innerHTML += `
    <tr id="row${numRows}">
      <td><p class="act-name">${numToLetter(numRows)} (end)</p></td>
      <td><input type="text" class="predec" /></td>
      <td><input type="number" class="duration" /></td>
    </tr>
  `;
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

const numToLetter = (num: number): string =>
  String.fromCodePoint('A'.charCodeAt(0) + num);
