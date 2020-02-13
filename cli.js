#!/usr/bin/env node

/**
 *  lazeez.js
 *  copyright (c) 2020 dearoneesama
 *  licensed under MIT
 */

const { goToLazeez } = require('./lib/index');

console.log('taking you to lazeez');
goToLazeez()
    .then(() => console.log('have fun!'))
    .catch(() => console.log('cannot go to lazeez'));
