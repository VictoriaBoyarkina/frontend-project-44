
import {
checkYesNo, name, greeting, continueCycle, getRandomInt,
} from '../cli.js';

const primeRules = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
};

const brainPrime = () => {
  greeting();
  primeRules();
  let i = 0;
  let correctAnswer = 0;
  do {
    i += 1;
    let devisor = 0;
  const number = getRandomInt(1, 99);
  for (let i = 1; i < number / 2; i += 1) {
    if (number % i === 0) {
      devisor = i;
    }
  }
  if (devisor === 1) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
    console.log(`Question: ${number}`);
    checkYesNo(correctAnswer);
    if (i === 3) {
      console.log(`Congratulations, ${name}!`)
    };
  } while (i < 3 && continueCycle === true)
}

export default brainPrime;