import getRandomInt from '../utils.js';

const evenRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

const getQuestionAndAnswerEven = () => {
  const number = getRandomInt(0, 100);
  const questionEven = `Question: ${number}`;
  const correctAnswerEven = isEven(number) ? 'yes' : 'no';
  return [questionEven, correctAnswerEven];
};

export { getQuestionAndAnswerEven, evenRules };
