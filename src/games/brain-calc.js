/* eslint-disable no-console */
import {
  greeting, name, checkAnswer, continueCycle,
} from '../main.js';

import getRandomInt from '../utils.js';

const calculatorRules = () => {
  console.log('What is the result of the expression?');
};

const arithmeticSigns = ['+', '-', '*'];

const sign = arithmeticSigns[Math.floor(Math.random() * arithmeticSigns.length)];



const calcResult = (numberOne, numberTwo) => {
  switch (sign) {
    case '+':
      return numberOne + numberTwo;
    case '-':
      return numberOne - numberTwo;
    case '*':
      return numberOne * numberTwo;
    default:
      break;
  }
};

function brainCalc() {
  greeting();
  console.log(`Hello, ${name}!`);
  calculatorRules();
  let i = 0;
  do {
    i += 1;
    const number1 = getRandomInt(0, 99);
    const number2 = getRandomInt(1, 99);
    calcResult(number1, number2);
    const correctAnswer = calcResult();
    console.log(`Question: ${number1} ${sign} ${number2}`);
    checkAnswer(correctAnswer);
    if (i === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  } while (i < 3 && continueCycle === true);
}

export default brainCalc;
