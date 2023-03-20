#!/usr/bin/env node
import playGame from '../src/main.js';
import { evenRules, getQuestionAndAnswerEven } from '../src/games/brain-even.js';

playGame(evenRules, getQuestionAndAnswerEven);
