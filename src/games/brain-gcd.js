/* eslint-disable no-console */
import getRandomInt from '../utils.js';

const gcdRules = 'Find the greatest common divisor of given numbers.';

function calcResult(number1, number2) {
  let first = number1;
  let second = number2;
  while (first !== second) {
    if (first > second) {
      first -= number2;
    } else {
      second -= number1;
    }
  }
  return first;
}

const getQuestionAndAnswerGcd = () => {
  const number1 = getRandomInt(0, 100);
  const number2 = getRandomInt(0, 100);
  const questionCalc = `Question: ${number1} ${number2}`;
  const correctAnswerCalc = String(calcResult(number1, number2));
  return [questionCalc, correctAnswerCalc];
};

export { gcdRules, getQuestionAndAnswerGcd };
