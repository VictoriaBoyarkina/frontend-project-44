/* eslint-disable no-console */
import readlineSync from 'readline-sync';




// eslint-disable-next-line no-console
console.log('Welcometo the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`)
console.log('Answer "yes" if the number is even, otherwise answer "no".');



let i = 0;
do {
	i += 1;
	const number = Math.floor(Math.random() * 10);
	console.log(`Question: ${number}`);
	const answer = readlineSync.question('Your answer: ');
	const ramainder = number % 2;
	if (ramainder === 0 && answer === 'yes') {
		console.log('Correct!');
		true;
  } else if (ramainder !== 0 && answer === 'no') {
		console.log('Correct!');
		true;
  } else if (ramainder === 0 && answer === 'no') {
    	console.log("'no' is wrong answer ;(. Correct answer was 'yes'");
		console.log(`Let's try again, ${name}!`);
	    break;
  } else if (answer !== 'yes' || answer !== 'yes' && ramainder === 0) {
		console.log(`${answer} is wrong answer ;(. Correct answer was 'yes'`);
		console.log(`Let's try again, ${name}!`);
		break;
  } else if (answer !== 'yes' || answer !== 'yes' && ramainder !== 0) {
	console.log(`${answer} is wrong answer ;(. Correct answer was 'no'`);
	console.log(`Let's try again, ${name}!`);
	break;
  } else {
		console.log("'yes' is wrong answer ;(. Correct answer was 'no'");
		console.log(`Let's try again, ${name}!`);
	    break;
  };
  	if (i === 3) {
		console.log(`Congratulations, ${name}!`);
		false;
  }
} while (i < 3 );
