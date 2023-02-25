/* eslint-disable no-console */

import readlineSync from 'readline-sync';

let continueCycle = true;

const name = readlineSync.question('May I have your name? ')

function greeting() {
  console.log('Welcome to the Brain Games!');
}

function checkAnswer(correctAnswer) {
  const answer = parseInt(readlineSync.question('Your answer: '), 10);
  if (answer === correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
    console.log(`Let's try again, ${name}!`);
    continueCycle = false;
  }
}

export {
  greeting, checkAnswer, continueCycle, checkYesNo, name }

function checkYesNo(correctAnswer) {
  const answer = readlineSync.question('Your answer: ');
  if (answer === correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
    console.log(`Let's try again, ${name}!`);
    continueCycle = false;
  }
}
