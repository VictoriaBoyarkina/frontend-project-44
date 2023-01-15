/* eslint-disable no-unused-expressions */
/* eslint-disable no-dupe-else-if */
/* eslint-disable no-console */
import readlineSync from 'readline-sync';
import {
  number, greeting, isEven, findcorrectAnswer, checkAnswer, evenRules, name, correctAnswer, continueCycle
} from './../src/cli.js';

greeting();
evenRules();

let i = 0;
do {
  i += 1;
  isEven(number);
  console.log(`Question: ${number}`);
  findcorrectAnswer(isEven);
  checkAnswer(correctAnswer);
  if (i === 3) {
    console.log(`Congratulations, ${name}!`);
  };
} while (i < 3 && continueCycle === true);

