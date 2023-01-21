/* eslint-disable no-unused-expressions */
/* eslint-disable no-dupe-else-if */
/* eslint-disable no-console */
import readlineSync from 'readline-sync';
import {
  expression, number1, number2, sign, checkAnswer, correctAnswer, name, greeting, calculatorRules, continueCycle, getRandomInt
} from '../src/cli.js';

greeting();
calculatorRules();

let i = 0;
do {
  i += 1;
  expression();
  console.log(`Question: ${number1} ${sign} ${number2}`);
  checkAnswer(correctAnswer);
  if (i === 3) {
    console.log(`Congratulations, ${name}!`);
  };
} while (i < 3 && continueCycle === true);
