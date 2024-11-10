// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// const myFirstArray = ['amr','hamza',32]

// const newArray = myFirstArray.push(69);
// console.log(myFirstArray);
// console.log(newArray);

// myFirstArray.push('am added last');
// console.log(myFirstArray);

// myFirstArray.pop();
// const popped = myFirstArray.pop();

// console.log(popped,myFirstArray);

let tipPerc;
let tip;
const calcTip = function (bill) {
  bill > 50 && bill < 300 ? (tipPerc = 0.15) : (tipPerc = 0.2);
  tip = tipPerc * bill;
  console.log(
    `your basic bill is ${bill} & your tip is ${
      tipPerc * bill
    } so your total bill is ${bill + tipPerc * bill}`
  );
  return tip;
};

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

const total = [bills[0] + tips[0], bills[1] + tips[1]];
console.log(total);
