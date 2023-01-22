/* eslint-disable no-unused-expressions */
/* eslint-disable no-dupe-else-if */
/* eslint-disable no-console */
import readlineSync from 'readline-sync';
import {
number, checkYesNo, correctAnswer, name, greeting, continueCycle, getRandomInt, primeRules, prime,
} from '../src/cli.js';

greeting();
primeRules();

let i = 0;
do {
  i += 1;
  prime();
  console.log(`Question: ${number}`);
  checkYesNo(correctAnswer);
  if (i === 3) {
    console.log(`Congratulations, ${name}!`)
  };
} while (i < 3 && continueCycle === true)