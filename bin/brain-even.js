#!/usr/bin/env node
import { playGame } from '../src/main.js';
import { evenRules, calcResult, question } from '../src/games/brain-even.js'

playGame(evenRules, calcResult, question);