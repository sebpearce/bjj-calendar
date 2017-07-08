export function getTechniquesFromClassNumber(classNumber) {
  return classes.find(el => {
    return el.id == classNumber;
  });
}

export const techniques = [
  {
    id: 1,
    name: 'Trap and Roll Escape',
  },
  {
    id: 2,
    name: 'Americana Armlock',
  },
  {
    id: 3,
    name: 'Positional Control (Mount)',
  },
  {
    id: 4,
    name: 'Take the Back (Mount)',
  },
  {
    id: 5,
    name: 'Rear Naked Choke',
  },
  {
    id: 6,
    name: 'Leg Hook Takedown',
  },
  {
    id: 7,
    name: 'Clinch (Aggressive Opponent)',
  },
  {
    id: 8,
    name: 'Punch Block Series (Stages 1-4)',
  },
  {
    id: 9,
    name: 'Straight Armlock (Mount)',
  },
  {
    id: 10,
    name: 'Triangle Choke',
  },
  {
    id: 11,
    name: 'Elevator Sweep',
  },
  {
    id: 12,
    name: 'Elbow Escape (Mount)',
  },
  {
    id: 13,
    name: 'Positional Control (Side Mount)',
  },
  {
    id: 14,
    name: 'Body Fold Takedown',
  },
  {
    id: 15,
    name: 'Clinch (Conservative Opponent)',
  },
  {
    id: 16,
    name: 'Headlock Counters',
  },
  {
    id: 17,
    name: 'Double Leg Takedown',
  },
  {
    id: 18,
    name: 'Headlock Escape 1',
  },
  {
    id: 19,
    name: 'Straight Armlock (Guard)',
  },
  {
    id: 20,
    name: 'Double Ankle Sweep',
  },
  {
    id: 21,
    name: 'Pull Guard',
  },
  {
    id: 22,
    name: 'Headlock Escape 2',
  },
  {
    id: 23,
    name: 'Guillotine Choke',
  },
  {
    id: 24,
    name: 'Shrimp Escape',
  },
  {
    id: 25,
    name: 'Kimura Armlock',
  },
  {
    id: 26,
    name: 'Standing Headlock Defense',
  },
  {
    id: 27,
    name: 'Punch Block Series (Stage 5)',
  },
  {
    id: 28,
    name: 'Hook Sweep',
  },
  {
    id: 29,
    name: 'Rear Takedown',
  },
  {
    id: 30,
    name: 'Haymaker Punch Defense',
  },
  {
    id: 31,
    name: 'Take the Back (Guard)',
  },
  {
    id: 32,
    name: 'Guillotine Defense',
  },
  {
    id: 33,
    name: 'Elbow Escape (Side Mount)',
  },
  {
    id: 34,
    name: 'Standing Armlock',
  },
  {
    id: 35,
    name: 'Twisting Arm Control',
  },
  {
    id: 36,
    name: 'Double Underhook Guard Pass',
  },
];

export const classes = [
  {
    id: 1,
    ground: 1,
    standing: 6,
  },
  {
    id: 2,
    ground: 2,
    standing: 7,
  },
  {
    id: 3,
    ground: 3,
    standing: 14,
  },
  {
    id: 4,
    ground: 5,
    standing: 15,
  },
  {
    id: 5,
    ground: 8,
    standing: 23,
  },
  {
    id: 6,
    ground: 9,
    standing: 32,
  },
  {
    id: 7,
    ground: 10,
    standing: 30,
  },
  {
    id: 8,
    ground: 11,
    standing: 29,
  },
  {
    id: 9,
    ground: 12,
    standing: 21,
  },
  {
    id: 10,
    ground: 13,
    standing: 17,
  },
  {
    id: 11,
    ground: 16,
    standing: 26,
  },
  {
    id: 12,
    ground: 18,
    standing: 34,
  },
  {
    id: 13,
    ground: 19,
    standing: 7,
  },
  {
    id: 14,
    ground: 20,
    standing: 23,
  },
  {
    id: 15,
    ground: 22,
    standing: 15,
  },
  {
    id: 16,
    ground: 24,
    standing: 14,
  },
  {
    id: 17,
    ground: 25,
    standing: 6,
  },
  {
    id: 18,
    ground: 27,
    standing: 30,
  },
  {
    id: 19,
    ground: 28,
    standing: 32,
  },
  {
    id: 20,
    ground: 31,
    standing: 26,
  },
  {
    id: 21,
    ground: 33,
    standing: 21,
  },
  {
    id: 22,
    ground: 35,
    standing: 29,
  },
  {
    id: 23,
    ground: 36,
    standing: 17,
  },
];
