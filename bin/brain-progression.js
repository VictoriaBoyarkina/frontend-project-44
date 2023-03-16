#!/usr/bin/env node
import { playGame } from '../src/main.js';
import { progressionRules, calcResult, question } from '../src/games/brain-progression.js'

playGame(progressionRules, calcResult, question);