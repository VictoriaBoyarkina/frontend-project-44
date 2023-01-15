/* eslint-disable no-console */
import readlineSync from 'readline-sync';

let name = '';
let number = '';
let even = true;
let correctAnswer = '';
let continueCycle = true;

const evenRules = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};

function greeting() {
  console.log('Welcometo the Brain Games!');
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

function isEven() {
  number = Math.floor(Math.random() * 10);
  if (number % 2 === 0) {
    even = true;
  } else {
    even = false;
  };
};

function findcorrectAnswer() {
  if (even === true) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  };
};

function checkAnswer() {
  const answer = readlineSync.question('Your answer: ');
  if (answer === correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
    console.log(`Let's try again, ${name}!`);
    continueCycle = false;
  };
};

export {
  number, greeting, isEven, findcorrectAnswer, checkAnswer, evenRules, name, correctAnswer, continueCycle,
};