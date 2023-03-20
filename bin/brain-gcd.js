#!/usr/bin/env node
import playGame from '../src/main.js';
import { gcdRules, getQuestionAndAnswerGcd } from '../src/games/brain-gcd.js';

playGame(gcdRules, getQuestionAndAnswerGcd);
