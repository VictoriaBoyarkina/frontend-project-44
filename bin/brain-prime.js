#!/usr/bin/env node
import playGame from '../src/main.js';
import { primeRules, getQuestionAndAnswerPrime } from '../src/games/brain-prime.js';

playGame(primeRules, getQuestionAndAnswerPrime);
