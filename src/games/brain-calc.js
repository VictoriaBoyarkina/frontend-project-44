/* eslint-disable no-console */
import getRandomInt from '../utils.js';

const calculatorRules = 'What is the result of the expression?';

const arithmeticSigns = ['+', '-', '*'];

const getSign = () => (arithmeticSigns[Math.floor(Math.random() * arithmeticSigns.length)]);

const sign = getSign(arithmeticSigns);

// eslint-disable-next-line consistent-return
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

const getQuestionAndAnswerCalc = () => {
  const number1 = getRandomInt(0, 100);
  const number2 = getRandomInt(0, 100);
  const questionCalc = `Question: ${number1} ${sign} ${number2}`;
  const correctAnswerCalc = String(calcResult(number1, number2));
  return [questionCalc, correctAnswerCalc];
};

export { calculatorRules, getQuestionAndAnswerCalc };
