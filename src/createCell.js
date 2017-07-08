import { monthNames } from './constants';

function createCell(date, classes = ['Class ?']) {
  const td = document.createElement('td');

  const dateText = document.createElement('span');
  dateText.appendChild(
    document.createTextNode(`${monthNames[date.getMonth()]} ${date.getDate()}`)
  );
  dateText.className = 'date';
  td.appendChild(dateText);

  for (let el of classes) {
    const classText = document.createElement('span');
    classText.className = 'class';
    classText.appendChild(document.createTextNode(el));
    td.appendChild(classText);
  }

  return td;
}

export default createCell;
