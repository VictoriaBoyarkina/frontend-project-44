/* eslint-disable max-len */
/* eslint-disable no-console */
import readlineSync, { question } from 'readline-sync';

let name = '';
let number = '';
let even = true;
let correctAnswer = '';
let continueCycle = true;

const evenRules = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};

function greeting() {
  console.log('Welcometo the Brain Games!');
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
}

function isEven() {
  number = Math.floor(Math.random() * 10);
  if (number % 2 === 0) {
    even = true;
  } else {
    even = false;
  }
}

function findcorrectAnswer() {
  if (even === true) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
}

function checkAnswer() {
  const answer = parseInt(readlineSync.question('Your answer: '), 10);
  if (answer === correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
    console.log(`Let's try again, ${name}!`);
    continueCycle = false;
  }
}

const calculatorRules = () => {
  console.log('What is the result of the expression?');
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

const arithmeticSigns = ['+', '-', '*'];
let number1 = '';
let number2 = '';
let sign = '';


function expression() {
  number1 = getRandomInt(0, 99);
  number2 = getRandomInt(1, 99);
  sign = arithmeticSigns[Math.floor(Math.random() * arithmeticSigns.length)];
  switch (sign) {
    case '+':
      correctAnswer = number1 + number2;
      break;
    case '-':
      correctAnswer = number1 - number2;
      break;
    case '*':
      correctAnswer = number1 * number2;
  };
};

const gcdRules = () => {
  console.log('Find the greatest common divisor of given numbers.');
};

export {
  number, greeting, isEven, findcorrectAnswer, checkAnswer, evenRules, getRandomInt, name, correctAnswer, continueCycle, calculatorRules, expression, number1, number2, sign, gcdRules, expressionGcd
};


function expressionGcd() {
  number1 = getRandomInt(1, 99);
  number2 = getRandomInt(1, 99);
  if (number1 <= number2) {
    for (let i = number1; i >= 1; i -= 1) {
      if (number1 % i === 0 && number2 % i === 0) {
        correctAnswer = i;
        break;
      };
    };
  } else {
    for (let i = number2; i >= 1; i -= 1) {
      if (number1 % i === 0 && number2 % i === 0) {
        correctAnswer = i;
        break;
      };
    };
  };
};
