import styles from './styles.scss';
import generateCalendar from './calendar';

const today = new Date(2017, 6);

generateCalendar(
  document.getElementById('calendar-body'),
  document.getElementById('month-name'),
  today
);
