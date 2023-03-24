import getRandomInt from '../utils.js';

const calculatorRules = 'What is the result of the expression?';

// eslint-disable-next-line consistent-return
const calcResult = (numberOne, numberTwo, sign) => {
  switch (sign) {
    case '+':
      return numberOne + numberTwo;
    case '-':
      return numberOne - numberTwo;
    case '*':
      return numberOne * numberTwo;
    default:
      throw new Error(`Unknown sign: '${sign}'!`);
  }
};

const getQuestionAndAnswerCalc = () => {
  const arithmeticSigns = ['+', '-', '*'];
  const number1 = getRandomInt(0, 100);
  const number2 = getRandomInt(0, 100);
  const index = getRandomInt(0, arithmeticSigns.length);
  const sign = arithmeticSigns[index];
  const questionCalc = `Question: ${number1} ${sign} ${number2}`;
  const correctAnswerCalc = String(calcResult(number1, number2, sign));
  return [questionCalc, correctAnswerCalc, sign];
};

export { calculatorRules, getQuestionAndAnswerCalc };
