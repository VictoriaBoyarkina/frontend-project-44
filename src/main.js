/* eslint-disable no-console */

import readlineSync, { question } from 'readline-sync';




const  playGame = (gameRules, [askquestion, correctAnswer]) => {
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  console.log('Welcome to the Brain Games!');
  console.log(gameRules);
  for (let i = 0; i < 3; i += 1) {
    console.log(askquestion);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'\nLet's try again, ${name}!`)
    return false;
    }
  }
  console.log(`Congratulations, ${name}!`);
}

export { playGame }