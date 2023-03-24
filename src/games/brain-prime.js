import getRandomInt from '../utils.js';

const primeRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  let devisor = 0;
  for (let i = 1; i < number; i += 1) {
    if (number % i === 0) {
      devisor = i;
    }
  }
  if (devisor === 1) {
    return true;
  }
  return false;
};

const getQuestionAndAnswerPrime = () => {
  const number = getRandomInt(0, 100);
  const questionPrime = `Question: ${number}`;
  const correctAnswerPrime = isPrime(number) ? 'yes' : 'no';
  return [questionPrime, correctAnswerPrime];
};

export { primeRules, getQuestionAndAnswerPrime };
