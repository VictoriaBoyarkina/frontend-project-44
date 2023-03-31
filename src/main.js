/* eslint-disable no-console */
import readlineSync from 'readline-sync';

const roundsCount = 3;

const playGame = (gameRules, getQuestionAndAnswer) => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Welcome to the Brain Games!');
  console.log(gameRules);
  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = getQuestionAndAnswer();
    console.log(question);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default playGame;
