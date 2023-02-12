/* eslint-disable no-console */
import readlineSync from 'readline-sync';
import {
  greeting, continueCycle, checkYesNo,
} from '../cli.js';

function evenRules() {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
}

const brainEven = () => {
  greeting();
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  evenRules();
  let i = 0;
  do {
    i += 1;
    let even = true;
    const number = Math.floor(Math.random() * 10);
    console.log(`Question: ${number}`);
    if (number % 2 !== 0) {
      even = false;
    }
    let correctAnswer = 'no';
    if (even === true) {
      correctAnswer = 'yes';
    }
    checkYesNo(correctAnswer);
    if (i === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  } while (i < 3 && continueCycle === true);
};

export default brainEven;
