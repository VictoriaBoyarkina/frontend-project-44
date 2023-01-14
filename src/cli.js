/* eslint-disable no-console */
import readlineSync from 'readline-sync';

const name = () => readlineSync.question('May I have your name? ');

const showGreeting = () => {
  console.log(`Hello, ${name}!`);
};

export { showGreeting, name };
