#!/usr/bin/env node
import { playGame } from '../src/main.js';
import { gcdRules, calcResult, question } from '../src/games/brain-gcd.js'

playGame(gcdRules, calcResult, question);
