"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var file = (0, fs_1.readFileSync)('./input.txt', 'utf-8');
var SIZE = 14;
for (var i = 0; i < file.length; i++) {
    var str = file.slice(i, i + SIZE);
    var set = new Set(str.split(''));
    if (set.size === SIZE) {
        console.log(i + SIZE);
        break;
    }
}
console.log('na');
