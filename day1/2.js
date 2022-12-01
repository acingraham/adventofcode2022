"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var file = (0, fs_1.readFileSync)('./input.txt', 'utf-8');
var elfs = file.split('\n\n');
var max = [];
for (var _i = 0, elfs_1 = elfs; _i < elfs_1.length; _i++) {
    var elf = elfs_1[_i];
    var calories = elf.split('\n')
        .map(function (s) { return parseInt(s); })
        .filter(function (n) { return !Number.isNaN(n); })
        .reduce(function (a, b) { return a + b; });
    max.push(calories);
    max.sort(function (a, z) { return z - a; });
    max.splice(3);
}
var sum = max.reduce(function (a, b) { return a + b; });
console.log(sum);
