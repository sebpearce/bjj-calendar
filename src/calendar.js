import createCell from './createCell';
import tracks from './tracks';
import {
  monthNames,
  NUM_MONTHS,
  NUM_DAYS_IN_WEEK,
  NUM_CLASSES,
  MON,
  TUE,
  WED,
  THU,
  FRI,
  SAT,
  SUN,
} from './constants';

function generateCalendar(calendarNode, titleNode, date) {
  drawCells(calendarNode, date);
  setTitle(titleNode, date);
  return;
}

function getNumDaysInMonth(date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
}

function getWeekdayOfDayOne(date) {
  // + 6 % 7 so that Monday = 0 instead of Sunday
  return (
    (new Date(date.getFullYear(), date.getMonth(), 1).getDay() +
      (NUM_DAYS_IN_WEEK - 1)) %
    NUM_DAYS_IN_WEEK
  );
}

function getXDaysBefore(date, numDays) {
  let d = new Date(date);
  d.setDate(d.getDate() - numDays);
  return d;
}

function getFirstDayOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth());
}

function drawCells(calendarNode, date) {
  const totalDays = getNumDaysInMonth(date);
  const firstDay = getWeekdayOfDayOne(date);
  const numBlocks = totalDays + firstDay;
  const numRows = Math.ceil(numBlocks / NUM_DAYS_IN_WEEK);

  const trackCounters = tracks.map(track => {
    return 0;
  });

  const topLeftBlockDate =
    firstDay !== 0 ? getXDaysBefore(getFirstDayOfMonth(date), firstDay) : date;

  let currentDate = new Date(topLeftBlockDate);
  for (let i = 0; i < numRows; i++) {
    const tr = document.createElement('tr');
    for (let t = 0; t < NUM_DAYS_IN_WEEK; t++) {
      const todaysClasses = [];
      tracks.forEach((track, trackIndex) => {
        if (track.days.indexOf(t) !== -1) {
          const nextClass =
            (trackCounters[trackIndex] + track.offsetFromFirstInstanceInMonth) %
            track.order.length;
          todaysClasses.push(track.order[nextClass]);
          trackCounters[trackIndex] =
            (trackCounters[trackIndex] + 1) % track.order.length;
        }
      });

      // AM/PM hack for Tuesdays
      const occurrencesOfClassKeyword = todaysClasses.reduce((acc, cur) => {
        return cur.includes('Class') ? acc + 1 : acc;
      }, 0);
      if (occurrencesOfClassKeyword === 2) {
        todaysClasses[0] = 'AM: ' + todaysClasses[0];
        todaysClasses[1] = 'PM: ' + todaysClasses[1];
      }

      const td = createCell(currentDate, todaysClasses);
      tr.appendChild(td);
      currentDate.setDate(currentDate.getDate() + 1);
    }
    calendarNode.appendChild(tr);
  }
  return;
}

function setTitle(titleNode, date) {
  const m = date.getMonth();
  const y = date.getFullYear();
  titleNode.appendChild(document.createTextNode(monthNames[m] + ' ' + y));
  return;
}

export default generateCalendar;
