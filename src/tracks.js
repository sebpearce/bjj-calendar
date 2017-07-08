import { MON, TUE, WED, THU, FRI, SAT, SUN } from './constants';

const standardClassOrder = (function(total) {
  const output = [];
  for (let i = 1; i <= total; i++) {
    output.push({
      id: i,
      name: `Class ${i}`,
    });
  }
  return output;
})(23);

const RDClassOrder = [
  {
    id: 1,
    name: 'RD: Mount',
  },
  {
    id: 2,
    name: 'RD: Guard',
  },
  {
    id: 3,
    name: 'RD: Side Mount',
  },
  {
    id: 4,
    name: 'RD: Standing',
  },
  {
    id: 5,
    name: 'RD: Fight Sim',
  },
];

const tracks = [
  {
    days: [TUE, THU],
    classes: standardClassOrder,
    name: 'Combatives',
    offset: 20,
  },
  {
    days: [MON, TUE, WED, FRI],
    classes: standardClassOrder,
    name: 'Combatives',
    offset: 6,
  },
  {
    days: [MON, SUN],
    classes: RDClassOrder,
    name: 'Reflex Development',
    offset: 2,
  },
  {
    days: [SAT, SUN],
    classes: standardClassOrder,
    name: 'Combatives',
    offset: 12,
  },
];

export default tracks;
