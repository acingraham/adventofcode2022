"use strict";
var _a;
exports.__esModule = true;
var fs_1 = require("fs");
var file = (0, fs_1.readFileSync)('./input.txt', 'utf-8');
var _b = file.split('\n\n'), crateSection = _b[0], moveSection = _b[1];
var crateLines = crateSection.split('\n');
// Remove last line from crateLines and figure out how many stacks there are
var stackCount = crateLines.pop().split('').map(function (c) { return parseInt(c); }).filter(function (n) { return !Number.isNaN(n); }).pop();
// Since crates are numbered 1 to stackCount, we're creating one extra just so we can index into the array without converting the index.
var stacks = Array(stackCount + 1).fill(null).map(function (i) { return []; });
for (var i = crateLines.length - 1; i >= 0; i--) {
    var crateLine = crateLines[i];
    for (var stackIndex = 1; stackIndex <= stackCount; stackIndex++) {
        var positionInLine = 4 * (stackIndex - 1) + 1;
        var stackElement = crateLine[positionInLine];
        if (stackElement !== ' ') {
            stacks[stackIndex].push(stackElement);
        }
    }
}
var moveLines = moveSection.split('\n');
var moveCommands = [];
for (var _i = 0, moveLines_1 = moveLines; _i < moveLines_1.length; _i++) {
    var moveLine = moveLines_1[_i];
    var _c = moveLine.split(' from '), moveCountSection = _c[0], moveLocationSection = _c[1];
    var _d = moveCountSection.split('move '), moveCount = _d[1];
    var _e = moveLocationSection.split(' to '), from = _e[0], to = _e[1];
    var obj = {
        count: parseInt(moveCount, 10),
        from: parseInt(from, 10),
        to: parseInt(to, 10)
    };
    moveCommands.push(obj);
}
console.log('BEFORE iterating over moveComands');
for (var _f = 0, moveCommands_1 = moveCommands; _f < moveCommands_1.length; _f++) {
    var move = moveCommands_1[_f];
    var cratesToMove = stacks[move.from].splice(-1 * move.count);
    cratesToMove.reverse();
    (_a = stacks[move.to]).push.apply(_a, cratesToMove);
}
var result = '';
for (var i = 1; i < stacks.length; i++) {
    result += stacks[i].pop();
}
console.log(result);
