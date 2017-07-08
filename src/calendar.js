import createCell from './createCell';
import tracks from './tracks';
import { classes, techniques, getTechniquesFromClassNumber } from './classes';
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
  const today = new Date();
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
      const todaysTooltips = [];
      tracks.forEach((track, trackIndex) => {
        if (track.days.indexOf(t) !== -1) {
          const nextClass =
            (trackCounters[trackIndex] + track.offset) % track.classes.length +
            1;
          const name = track.classes.find(el => el.id === nextClass).name;
          todaysClasses.push(name);
          if (track.name === 'Combatives') {
            todaysTooltips.push(getTechniquesFromClassNumber(nextClass));
          }
          trackCounters[trackIndex] =
            (trackCounters[trackIndex] + 1) % track.classes.length;
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

      const toolTipContainer = document.createElement('div');
      if (todaysTooltips.length > 0) {
        for (let t of todaysTooltips) {
          const toolTip = createCombativesTooltip(t);
          toolTipContainer.appendChild(toolTip);
          toolTipContainer.className = 'tooltip';
        }
      }

      const td = createCell(currentDate, todaysClasses);
      td.appendChild(toolTipContainer);
      if (currentDate.toDateString() === today.toDateString()) {
        td.className += ' today';
      }
      tr.appendChild(td);
      currentDate.setDate(currentDate.getDate() + 1);
    }
    calendarNode.appendChild(tr);
  }
  return;
}

function createCombativesTooltip(lesson) {
  const toolTip = document.createElement('div');
  const groundToolTip = document.createElement('span');
  const standingToolTip = document.createElement('span');
  const g = techniques.find(el => el.id === lesson.ground).name;
  const s = techniques.find(el => el.id === lesson.standing).name;
  groundToolTip.appendChild(document.createTextNode(g));
  groundToolTip.className = 'ground-tooltip';
  standingToolTip.appendChild(document.createTextNode(s));
  standingToolTip.className = 'standing-tooltip';
  toolTip.appendChild(groundToolTip);
  toolTip.appendChild(standingToolTip);
  return toolTip;
}

function setTitle(titleNode, date) {
  const m = date.getMonth();
  const y = date.getFullYear();
  titleNode.appendChild(document.createTextNode(monthNames[m] + ' ' + y));
  return;
}

export default generateCalendar;
