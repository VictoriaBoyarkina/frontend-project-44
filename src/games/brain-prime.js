
import {
checkYesNo, name, greeting, continueCycle
} from '../main.js';

import getRandomInt from '../utils.js';

const primeRules = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
};

const calcResult = () => {
  let devisor = 0;
  for (let i = 1; i < number / 2; i += 1) {
  if (number % i === 0) {
    devisor = i;
  }
}
if (devisor === 1) {
  return'yes';
} else {
  return 'no';
  }
}

const brainPrime = () => {
  greeting();
  primeRules();
  let i = 0;
  do {
    i += 1;
    const number = getRandomInt(1, 99);
    const correctAnswer = calcResult();
    console.log(`Question: ${number}`);
    checkYesNo(correctAnswer);
    if (i === 3) {
      console.log(`Congratulations, ${name}!`)
    };
  } while (i < 3 && continueCycle === true)
}

export default brainPrime;