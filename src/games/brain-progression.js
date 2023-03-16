
const progressionRules = 'What number is missing in the progression?';


const progression = (number1, number2) => {
  let sequence = [];
  for (let i = 1; i <= 10; i += 1) {
    sequence.push(number1);
    number1 += number2;
  }
  return sequence;
} 

const calcResult = (number1, number2) => {
  const newSequence = progression(number1, number2);
  return newSequence[number2];
}

const question = (number1, number2) => {
  const getQuestion = progression(number1, number2);
  getQuestion[number2] = "...";
  return `Question: ${getQuestion.join(', ')}`;
}

export { progressionRules, calcResult, question };