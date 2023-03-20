#!/usr/bin/env node
import playGame from '../src/main.js';
import { calculatorRules, getQuestionAndAnswerCalc } from '../src/games/brain-calc.js';

playGame(calculatorRules, getQuestionAndAnswerCalc);
