/* eslint-disable no-console */
const gcdRules = 'Find the greatest common divisor of given numbers.';

function calcResult(number1, number2) {
  while(number1 != number2) {
    if (number1 > number2) {
      number1 -= number2;
    } else {
      number2 -= number1;
    }
  }
  return number1;
};

const question = (number1, number2) => {
  return `Question: ${number1} ${number2}`;
};

export { gcdRules, calcResult, question };

