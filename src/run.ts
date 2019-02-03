import {eachFrame} from './core';
import {FPS} from './globals';

setInterval(eachFrame, 1000/FPS);