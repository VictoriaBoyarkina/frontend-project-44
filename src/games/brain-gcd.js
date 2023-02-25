/* eslint-disable no-console */
import {
  checkAnswer, name, greeting, continueCycle 
} from '../main.js';

import getRandomInt from '../utils.js';

const gcdRules = () => {
  console.log('Find the greatest common divisor of given numbers.');
};

function expressionGcd(number1, number2) {
  while(number1 != number2) {
    if (number1 > number2) {
      number1 -= number2;
    } else {
      number2 -= number1;
    }
  }
  return number1;
}

function brainGcd() {
  greeting();
  gcdRules();
  let i = 0;
  do {
    i += 1;
    const number1 = getRandomInt(1, 99);
    const number2 = getRandomInt(1, 99);
    const correctAnswer = expressionGcd(number1, number2);
    console.log(`Question: ${number1} ${number2}`);
    checkAnswer(correctAnswer);
    if (i === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  } while (i < 3 && continueCycle === true);
}
export default brainGcd;
