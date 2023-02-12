/* eslint-disable no-console */

import readlineSync from 'readline-sync';

let continueCycle = true;

const name = readlineSync.question('May I have your name? ')





function greeting() {
  console.log('Welcometo the Brain Games!');
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

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}


export {
  greeting, checkAnswer, getRandomInt, continueCycle, checkYesNo, name }



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
