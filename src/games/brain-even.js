/* eslint-disable no-console */
import readlineSync from 'readline-sync';

import {
  greeting, continueCycle, checkYesNo, name,
} from '../main.js';


function evenRules() {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
}

const isEven = (number) => {
  if (number % 2 !== 0) {
    return false;
  } 
  return true
}

const brainEven = () => {
  greeting();
  evenRules();
  let i = 0;
  do {
    i += 1;
    const number = Math.floor(Math.random() * 10);
    console.log(`Question: ${number}`);
    const correctAnswer = (isEven(number) === true) ? 'yes' : 'no';
    checkYesNo(correctAnswer);
    if (i === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  } while (i < 3 && continueCycle === true);
};

export default brainEven;
