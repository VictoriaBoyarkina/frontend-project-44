/* eslint-disable no-unused-expressions */
/* eslint-disable no-dupe-else-if */
/* eslint-disable no-console */
import readlineSync from 'readline-sync';
import {
number1, number2,  generateSequence, sequence, checkAnswer, correctAnswer, name, greeting, continueCycle, getRandomInt,progressionRules
} from '../src/cli.js';

greeting();
progressionRules();

let i = 0;
do {
  i += 1;
  generateSequence();
  console.log(`Question: ${sequence}`);
  checkAnswer(correctAnswer);
  if (i === 3) {
    console.log(`Congratulations, ${name}!`);
  };
} while (i < 3 && continueCycle === true);