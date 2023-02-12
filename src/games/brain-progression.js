import {
 checkAnswer, name, greeting, continueCycle, getRandomInt,
} from '../cli.js';

const progressionRules = () => {
  console.log('What number is missing in the progression?');
};

const brainProgression = () => {
  greeting();
  progressionRules();
  let i = 0;
  do {
    i += 1;
    let sequence = [];
    let number1 = getRandomInt(1, 99);
    let number2 = getRandomInt(1, 10);
    for (let i = 1; i <= 10; i += 1) {
      number1 += number2;
      sequence.push(number1);
    }
    const correctAnswer = sequence[number2];
    sequence[number2] = '...';
    sequence = sequence.join(' ');
    console.log(`Question: ${sequence}`);
    checkAnswer(correctAnswer);
    if (i === 3) {
      console.log(`Congratulations, ${name}!`);
    };
  } while (i < 3 && continueCycle === true);
}

export default brainProgression;