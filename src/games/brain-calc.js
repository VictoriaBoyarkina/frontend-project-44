/* eslint-disable no-console */

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

const question = (number1, number2) => {
  return `Question: ${number1} ${sign} ${number2}`;
}

export { calculatorRules, calcResult, question }