import { MON, TUE, WED, THU, FRI, SAT, SUN } from './constants';

const standardClassOrder = (function(total) {
  const output = [];
  for (let i = 1; i <= total; i++) {
    output.push(`Class ${i}`);
  }
  return output;
})(23);

const RDClassOrder = (function() {
  return ['Mount', 'Guard', 'Side Mount', 'Standing', 'Fight Sim'].map(el => {
    return 'RD: ' + el;
  });
})();

const tracks = [
  {
    days: [TUE, THU],
    offsetFromFirstInstanceInMonth: 18,
    order: standardClassOrder,
  },
  {
    days: [MON, TUE, WED, FRI],
    offsetFromFirstInstanceInMonth: 2,
    order: standardClassOrder,
  },
  {
    days: [MON, SUN],
    offsetFromFirstInstanceInMonth: 0,
    order: RDClassOrder,
  },
  {
    days: [SAT, SUN],
    offsetFromFirstInstanceInMonth: 10,
    order: standardClassOrder,
  },
];

export default tracks;
