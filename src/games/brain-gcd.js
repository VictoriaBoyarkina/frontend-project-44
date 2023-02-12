/* eslint-disable no-console */
import {
  checkAnswer, name, greeting, continueCycle, getRandomInt 
} from '../cli.js';

const gcdRules = () => {
  console.log('Find the greatest common divisor of given numbers.');
};

let correctAnswer = 0;

function expressionGcd(number1, number2) {
  if (number1 <= number2) {
    for (let i = number1; i >= 1; i -= 1) {
      if (number1 % i === 0 && number2 % i === 0) {
        correctAnswer = i;
        break;
      }
    }
  } else {
    for (let i = number2; i >= 1; i -= 1) {
      if (number1 % i === 0 && number2 % i === 0) {
        correctAnswer = i;
        break;
      }
    }
  }
}

const brainGcd = () => {
  greeting();
  gcdRules();
  let i = 0;
  do {
    i += 1;
    const number1 = getRandomInt(1, 99);
    const number2 = getRandomInt(1, 99);
    expressionGcd(number1, number2);
    console.log(`Question: ${number1} ${number2}`);
    checkAnswer(correctAnswer);
    if (i === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  } while (i < 3 && continueCycle === true);
};
export default brainGcd;
