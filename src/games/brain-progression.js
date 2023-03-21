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

const calcResult = (number1, number2) => {
  const newSequence = progression(number1, number2);
  return newSequence[number2];
};

const getQuestion = (number1, number2) => {
  const question = progression(number1, number2);
  question[number2] = '..';
  return question.join(' ');
};

const getQuestionAndAnswerProgression = () => {
  const number1 = getRandomInt(1, 100);
  const number2 = getRandomInt(1, 10);
  const questionCalc = `Question: ${getQuestion(number1, number2)}`;
  const correctAnswerCalc = String(calcResult(number1, number2));
  return [questionCalc, correctAnswerCalc];
};

export { progressionRules, getQuestionAndAnswerProgression };
