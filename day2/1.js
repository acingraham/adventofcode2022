"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var file = (0, fs_1.readFileSync)('./input.txt', 'utf-8');
var games = file.split('\n');
var resultValue = {
    // rock
    A: {
        X: 3,
        Y: 6,
        Z: 0
    },
    // paper 
    B: {
        X: 0,
        Y: 3,
        Z: 6
    },
    // scissors
    C: {
        X: 6,
        Y: 0,
        Z: 3
    }
};
var choiceValue = {
    X: 1,
    Y: 2,
    Z: 3
};
var scores = games.map(function (game) {
    var _a = game.split(' '), opponent = _a[0], me = _a[1];
    var score = resultValue[opponent][me] + choiceValue[me];
    return score;
});
var sum = scores.reduce(function (a, b) { return a + b; });
console.log(sum);
