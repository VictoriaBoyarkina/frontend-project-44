import getRandomInt from '../utils.js';

const evenRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

const calcResult = (number) => {
  if (isEven(number) === true) {
    return 'yes';
  }
  return 'no';
};

const getQuestionAndAnswerEven = () => {
  const number = getRandomInt(0, 100);
  const questionEven = `Question: ${number}`;
  const correctAnswerEven = String(calcResult(number));
  return [questionEven, correctAnswerEven];
};

export { getQuestionAndAnswerEven, evenRules };
