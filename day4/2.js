"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var file = (0, fs_1.readFileSync)('./input.txt', 'utf-8');
var overlappingPairs = 0;
var lines = file.split('\n');
for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
    var line = lines_1[_i];
    var ranges = line.split(',');
    var _a = ranges[0].split('-').map(function (s) { return parseInt(s, 10); }), s1 = _a[0], e1 = _a[1];
    var _b = ranges[1].split('-').map(function (s) { return parseInt(s, 10); }), s2 = _b[0], e2 = _b[1];
    if (!((e1 < s2) || (e2 < s1))) {
        overlappingPairs++;
    }
}
console.log({ overlappingPairs: overlappingPairs });
