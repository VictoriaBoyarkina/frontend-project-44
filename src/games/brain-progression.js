import getRandomInt from '../utils.js';

const progressionRules = 'What number is missing in the progression?';

const progression = (number1, number2) => {
  const sequence = [];
  let first = number1;
  for (let i = 1; i <= 10; i += 1) {
    sequence.push(first);
    first += number2;
  }
  return sequence;
};

const getHiddenNumber = (number, commonDiff) => {
  const newSequence = progression(number, commonDiff);
  return newSequence[commonDiff];
};

const getQuestion = (number, commonDiff) => {
  const question = progression(number, commonDiff);
  question[commonDiff] = '..';
  return question.join(' ');
};

const getQuestionAndAnswerProgression = () => {
  const number = getRandomInt(1, 100);
  const commonDiff = getRandomInt(1, 10);
  const questionCalc = `Question: ${getQuestion(number, commonDiff)}`;
  const correctAnswerCalc = String(getHiddenNumber(number, commonDiff));
  return [questionCalc, correctAnswerCalc];
};

export { progressionRules, getQuestionAndAnswerProgression };
