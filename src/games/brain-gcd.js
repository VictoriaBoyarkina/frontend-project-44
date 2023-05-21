import getRandomInt from '../utils.js';

const gcdRules = 'Find the greatest common divisor of given numbers.';

function getGCD(number1, number2) {
  let a = number1;
  let b = number2;
  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  return a;
}

const getQuestionAndAnswerGcd = () => {
  const number1 = getRandomInt(1, 100);
  const number2 = getRandomInt(1, 100);
  const questionCalc = `Question: ${number1} ${number2}`;
  const correctAnswerCalc = String(getGCD(number1, number2));
  return [questionCalc, correctAnswerCalc];
};

export { gcdRules, getQuestionAndAnswerGcd };
