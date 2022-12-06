"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var file = (0, fs_1.readFileSync)('./input.txt', 'utf-8');
for (var i = 0; i < file.length; i++) {
    var str = file.slice(i, i + 4);
    var set = new Set(str.split(''));
    console.log(set);
    if (set.size === 4) {
        console.log(i + 4);
        break;
    }
}
console.log('na');
