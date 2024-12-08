'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

// const allEvents = [...gameEvents.values()];
// const eventSet = new Set(allEvents);
// const events = [...eventSet];

// gameEvents.delete(64);
// console.log(gameEvents);

// console.log(gameEvents.size);
// const gameEventSize = gameEvents.size;
// console.log(
//   `An event happened, on average, every ${90 / gameEventSize} minutes`
// );

// for (const [key, value] of gameEvents) {
//   key < 45
//     ? console.log(`[first half] ${key} : ${value}`)
//     : console.log(`[Second half] ${key} : ${value}`);
// }

// const [players1, players2] = game.players;
// // console.log(players1, players2);
// const [gk, ...fieldPlayers] = players1;
// // console.log(gk, fieldPlayers);

// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);
// const {
//   odds: { team1: team1, x: draw, team2: team2 },
// } = game;
// console.log(team1, draw, team2);

// let printgoals = function (...player) {
//   console.log(`${player.length} goals were scored`);
// };
// printgoals('ahmed', 'mostafa', 'edres');

// team1 > team2 && console.log(`team 1 has more chance to win`);
// team2 > team1 && console.log(`team 2 has more chance to win`);

// for (const [i, player] of game.scored.entries()) {
//   console.log(`goal ${i + 1} : ${player}`);
// }

// const odds = Object.values(game.odds);

// let average = 0;

// for (const odd of odds) average += odd;

// average /= odds.length;
// console.log(average);

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));
const textarea = document.createElement('textarea');
document.body.append(textarea);

const button = document.createElement('button');
button.textContent = 'get textarea Value';
document.body.append(button);

const data = [];

button.addEventListener('click', function () {
  const value = textarea.value;

  let rows = value.split(' \n');
  console.log(rows);

  for (let row of rows) {
    let [first, second] = row.toLowerCase().trim().split('_');
    second[0].toUpperCase();
    console.log(
      `${first}${second.replace(second[0], second[0].toUpperCase())}`
    );
  }

  // console.log(rows);
});

// let datas = '';
// for (const element of data) {
//   datas += String(element) + ' ';
// }
