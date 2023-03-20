
const primeRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const calcResult = (number1) => {
  let devisor = 0;
  for (let i = 1; i < number1; i += 1) {
  if (number1 % i === 0) {
    devisor = i;
  }
}
if (devisor === 1) {
  return 'yes';
} else {
  return 'no';
  }
};

const question = (number1) => {
  return `Question: ${number1}`;
};

export { primeRules, calcResult, question };
