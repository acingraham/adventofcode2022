"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var file = (0, fs_1.readFileSync)('./input.txt', 'utf-8');
var games = file.split('\n');
var resultValue = {
    // rock
    A: {
        X: 0 + 3,
        Y: 3 + 1,
        Z: 6 + 2
    },
    // paper 
    B: {
        X: 0 + 1,
        Y: 3 + 2,
        Z: 6 + 3
    },
    // scissors
    C: {
        X: 0 + 2,
        Y: 3 + 3,
        Z: 6 + 1
    }
};
var scores = games.map(function (game) {
    var _a = game.split(' '), opponent = _a[0], result = _a[1];
    var score = resultValue[opponent][result];
    return score;
});
var sum = scores.reduce(function (a, b) { return a + b; });
console.log(sum);
