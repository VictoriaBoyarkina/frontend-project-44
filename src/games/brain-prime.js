import getRandomInt from '../utils.js';

const primeRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const calcResult = (number) => {
  let devisor = 0;
  for (let i = 1; i < number; i += 1) {
    if (number % i === 0) {
      devisor = i;
    }
  }
  if (devisor === 1) {
    return 'yes';
  }
  return 'no';
};

const getQuestionAndAnswerPrime = () => {
  const number = getRandomInt(0, 100);
  const questionCalc = `Question: ${number}`;
  const correctAnswerCalc = String(calcResult(number));
  return [questionCalc, correctAnswerCalc];
};

export { primeRules, getQuestionAndAnswerPrime };
