/* eslint-disable no-console */

const evenRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const calcResult = (number) => {
  if (number % 2 !== 0) {
    return 'no';
  } 
  return 'yes'
};

const question = (number1) => {
  return `Question: ${number1}`;
};

export { calcResult, question, evenRules };

