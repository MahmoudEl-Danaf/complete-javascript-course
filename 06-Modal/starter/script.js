'use strict';
// just to test
// test again

const modelClicked = function () {
  console.log('clicked');
};

// btnsMod.addEventListener('click', modelClicked);

// document
//   .querySelectorAll('.show-modal')
//   .addEventListener('click', modelClicked);
// const modal = document.querySelector('.modal');
// const overlay = document.querySelector('.overlay');
// const openBtns = document.querySelectorAll('.show-modal');
// const closBtns = document.querySelector('.close-modal');

// const opeeenBitch = function () {
//   modal.classList.remove('hidden');
//   overlay.classList.remove('hidden');
// };

// const closeBtn = function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// };

// for (let i = 0; i < openBtns.length; i++) {
//   openBtns[i].addEventListener('click', opeeenBitch);
// }

// closBtns.addEventListener('click', closeBtn);
// overlay.addEventListener('click', closeBtn);

// document.addEventListener('keydown', function (e) {
//   console.log(e.key);

//   if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
//     closeBtn();
//   }
// });
let mahmoud = {
  firstName: 'Mahmoud',
  age: 31,
};
console.log(mahmoud.firstName);

const { age: omry } = mahmoud;

console.log(omry);
