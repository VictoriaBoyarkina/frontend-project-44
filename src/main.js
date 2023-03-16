/* eslint-disable no-console */

import readlineSync, { question } from 'readline-sync';
import getRandomInt from './utils.js';

const name = readlineSync.question('May I have your name? ')

function greeting() {
  console.log('Welcome to the Brain Games!');
}

function playGame(gameRules, calcResult, question) {
  greeting();
  console.log(gameRules);
  for (let i = 0; i < 3; i += 1) {
    const number1 = getRandomInt(1, 99);
    const number2 = getRandomInt(1, 10);
    const correctAnswer = String(calcResult(number1, number2));
    console.log(question(number1, number2));
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'\nLet's try again, ${name}!`)
    return false;
    }
  }
  console.log(`Congratulations, ${name}!`);
}

export { greeting, playGame, name }