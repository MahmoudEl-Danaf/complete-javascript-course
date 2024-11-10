"use strict";
// const MarkMiller = {
//   fullName: "MarkMiller",
//   mass: 78,
//   height: 1.69,

//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;

//     // console.log(bmi);
//     return this.bmi;
//   },
// };

// const JohnSmith = {
//   fullname: "john smith",
//   mass: 92,
//   height: 1.95,
// };

// // console.log(MarkMiller.calcBMI());

// // MarkMiller["calcBMI()"] = "BMI";
// console.log(MarkMiller.calcBMI());
// console.log(MarkMiller);

//console.log(MarkMiller);

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function (bill) {
  return bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2;
};

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
}

console.log(tips);

for (let i = 0; i < bills.length; i++) {
  totals.push(bills[i] + tips[i]);
}

console.log(totals);
