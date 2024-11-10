'use strict';
console.log('bsm alah');

let secretNumber = Math.trunc(Math.random() * 20 + 1);
console.log(secretNumber);
let score = 20;

const guess = function () {
  console.log('pressed');
  let inputNumber = Number(document.querySelector('.guess').value);

  console.log(inputNumber);
  if (!inputNumber) {
    document.querySelector('.message').textContent = '..enter valid number ';
  } else if (inputNumber == secretNumber) {
    document.querySelector('.message').textContent = '..Congrats';
    document.body.style.backgroundColor = '#008000';
    document.querySelector('.number').style.width = '300px';
    document.querySelector('.number').textContent = secretNumber;
  } else if (inputNumber > secretNumber) {
    console.log('too high');
    if (score > 1) {
      document.querySelector('.message').textContent = '..Too High';
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else if (inputNumber < secretNumber) {
    if (score < 1) {
      document.querySelector('.message').textContent = '..Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    }
    console.log('too low');
    document.querySelector('.message').textContent = '..Too Low';
    score--;

    document.querySelector('.score').textContent = score;
  }
};

document.querySelector('.check').addEventListener('click', guess);

const reset = function () {
  console.log('again');
  score = 20;
  document.querySelector('.score').textContent = score;
  document.body.style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '150px';
  document.querySelector('.number').textContent = '?';
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  console.log(secretNumber);
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start Guessing..';
};
document.querySelector('.again').addEventListener('click', reset);
