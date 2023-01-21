/* eslint-disable no-unused-expressions */
/* eslint-disable no-dupe-else-if */
/* eslint-disable no-console */
import readlineSync from 'readline-sync';
import {
number1, number2, sign, checkAnswer, correctAnswer, name, greeting, continueCycle, getRandomInt, gcdRules, expressionGcd
} from '../src/cli.js';

greeting();
gcdRules();

let i = 0;
do {
  i += 1;
  expressionGcd();
  console.log(`Question: ${number1} ${number2}`);
  checkAnswer(correctAnswer);
  if (i === 3) {
    console.log(`Congratulations, ${name}!`);
  };
} while (i < 3 && continueCycle === true);
