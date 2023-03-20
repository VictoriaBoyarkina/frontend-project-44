#!/usr/bin/env node
import playGame from '../src/main.js';
import { progressionRules, getQuestionAndAnswerProgression } from '../src/games/brain-progression.js';

playGame(progressionRules, getQuestionAndAnswerProgression);
