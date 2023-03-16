#!/usr/bin/env node
import { playGame } from '../src/main.js';
import { primeRules, calcResult, question } from '../src/games/brain-prime.js'

playGame(primeRules, calcResult, question);
