/* eslint-disable no-console */
import getRandomInt from '../utils.js';

const calculatorRules = 'What is the result of the expression?';

const arithmeticSigns = ['+', '-', '*'];

const getSign = (arithmeticSigns) => {
  return arithmeticSigns[Math.floor(Math.random() * arithmeticSigns.length)];
};

const sign = getSign(arithmeticSigns);

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
  const result = []
  const number1 = getRandomInt(0, 100);
  const number2 = getRandomInt(0, 100);
  const questionCalc = `Question: ${number1} ${sign} ${number2}`;
  result.push(questionCalc);
  const correctAnswerCalc = String(calcResult(number1, number2));
  result.push(correctAnswerCalc);
  return result;
};


export { calculatorRules, getQuestionAndAnswerCalc };
