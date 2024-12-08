// 'use strict';
// // const airPort = {
// //   airLine: 'lufthanza',
// //   iatacode: 'XL',
// //   booking: [],
// //   book(flightNum, Name) {
// //     console.log(
// //       `${Name} booked a seat on${this.airLine} flight Number ${this.iatacode}${flightNum}`
// //     );
// //     this.booking.push(flightNum, Name);
// //   },
// // };

// // const book = airPort.book;

// // book.call(airPort, 23, 'mahmoud');
// // console.log(airPort);
// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3:C++'],
//   // This generates [0, 0, 0, 0]. More in the next section!
//   answers: new Array(4).fill(0),

//   registerNewAnswer() {
//     const answer = Number(
//       prompt(
//         `${this.question}\n ${this.options.join('\n')}\n (Write option number)
// `
//       )
//     );
//     1;
//     console.log(answer);

//     typeof answer === 'number' &&
//       answer < this.answers.length &&
//       this.answers[answer]++;
//     console.log(this.answers);

//     console.log(`poll results are ${poll.answers}`);
//   },
// };
// const button = document.querySelector('.poll');
// button.addEventListener('click', poll.registerNewAnswer.bind(poll));

// // const displayResults = function (type) {};
// // console.log(`poll results are ${poll.answers}`);

`Data 1: Julia's data [3, 5, 2, 12, 7]   
          Kate's data [4, 1, 15, 8, 3] 

Data 2: Julia's data [9, 16, 6, 8, 3],
         Kate's data [10, 5, 6, 1, 4]`;

Juliadata1 = [3, 5, 2, 12, 7];
Katedata1 = [4, 1, 15, 8, 3];

dogsJuliaNoCats = Juliadata1.slice(1, -2);
const alldogs1 = dogsJuliaNoCats.concat(Katedata1);

const calcAvgHumAge = ay7ga => {
  const humanages = ay7ga.map(dogages =>
    dogages <= 2 ? 2 * dogages : 16 + dogages * 4
  );
  const adultDogs = humanages.filter(dogAG => {
    return dogAG >= 18;
  });
  const calcAvg = adultDogs.reduce(
    (acc, currentDogGe) => acc + currentDogGe,
    0 / adultDogs.length
  );

  console.log(humanages);
  console.log(adultDogs);
  console.log(calcAvg);
};

calcAvgHumAge(alldogs1);
// const calcAverageHumanAge = function (ay7ga) {
//   const humanages = ay7ga.map(function (dogages, i) {
//     return dogages <= 2 ? 2 * dogages : 16 + dogages * 4;
//   });

//   const adultDogs = humanages.filter(function (dogAg, i) {
//     return dogAg >= 18;
//   });
//   console.log(humanages);
//   console.log(adultDogs);

//   const allAdultAgesAdded =
//     adultDogs.reduce(function (acc, currentdogAge, i) {
//       return acc + currentdogAge;
//     }, 0) / adultDogs.length;

// const calcAve = function (allAdultAgesAdded) {
//   const avg = allAdultAgesAdded / adultDogs.length;
//   return avg;

// console.log(allAdultAgesAdded);
// };

// calcAverageHumanAge(alldogs1);

// console.log(alldogs);

// const checkdogs = function (dogs) {
//   // console.log(alldogs);

//   alldogs.forEach(function (age, i) {
//     const state = age >= 3 ? 'an adult' : 'a puppy';
//     console.log(`Dog number ${i + 1} is ${state}, and is ${age} years old`);
//   });
// };
// checkdogs(alldogs1);
