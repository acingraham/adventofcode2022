"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var file = (0, fs_1.readFileSync)('./input.txt', 'utf-8');
var lines = file.split('\n');
var getBadge = function (l1, l2, l3) {
    var s1 = new Set(l1.split(''));
    var s2 = new Set(l2.split(''));
    var badgeArray = l3.split('').filter(function (c) { return s1.has(c) && s2.has(c); });
    // there should only be exactly 1 badge so we assume the array will be length 1 and return its sole element
    return badgeArray[0];
};
var scores = [];
for (var i = 0; i < lines.length; i += 3) {
    var badge = getBadge(lines[i], lines[i + 1], lines[i + 2]);
    var badgeLowerCase = badge.toLowerCase();
    var score = (badgeLowerCase.charCodeAt(0) - 96);
    if (badge !== badgeLowerCase) {
        score += 26;
    }
    scores.push(score);
}
var total = scores.reduce(function (a, b) { return a + b; });
console.log(total);
