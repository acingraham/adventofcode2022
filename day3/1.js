"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var file = (0, fs_1.readFileSync)('./input.txt', 'utf-8');
var lines = file.split('\n');
var print = true;
var scores = lines.map(function (line, index) {
    // break up line into 2 sacks
    var mid = line.length / 2;
    var sack1 = line.slice(0, mid);
    var sack2 = line.slice(mid);
    // identify shared types between sacks
    var sack1Set = new Set(sack1.split(''));
    var sharedTypes = Array.from(new Set(sack2.split('').filter(function (c) { return sack1Set.has(c); })));
    if (index === 6) {
        console.log({ sharedTypes: sharedTypes });
        print = false;
    }
    // calculate score
    var score = sharedTypes.reduce(function (acc, type) {
        var typeLowerCase = type.toLowerCase();
        var sum = typeLowerCase.charCodeAt(0) - 96;
        if (type !== typeLowerCase) {
            sum += 26;
        }
        return acc + sum;
    }, 0);
    return score;
});
console.log({ scores: scores });
var total = scores.reduce(function (a, b) { return a + b; });
console.log(total);
