"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var file = (0, fs_1.readFileSync)('./input.txt', 'utf-8');
var lines = file.split('\n');
var fsRoot = {};
var currDir = fsRoot;
var i = 0;
while (i < lines.length) {
    var line = lines[i];
    if (line.startsWith('$ cd')) {
        var _a = line.split('$ cd '), dest = _a[1];
        if (dest === '/') {
            currDir = fsRoot;
        }
        else {
            if (dest !== '..') {
                currDir[dest] || (currDir[dest] = { '..': currDir });
            }
            currDir = currDir[dest];
        }
    }
    else if (line.startsWith('$ ls')) {
    }
    else {
        var _b = line.split(' '), first = _b[0], second = _b[1];
        if (first !== 'dir') {
            currDir[second] = parseInt(first, 10);
        }
    }
    i++;
}
function getDirSize(dir, map) {
    var size = 0;
    for (var _i = 0, _a = Object.entries(dir); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        if (key === '..') {
            continue;
        }
        if (typeof value === 'number') {
            size += value;
        }
        else {
            size += getDirSize(value, map);
        }
    }
    // console.log('ADDing', size)
    map.set(dir, size);
    return size;
}
var map = new Map();
console.log(getDirSize(fsRoot, map));
// console.log(map);
var total = 0;
// for (let pair of Object.entries(map)) {
map.forEach(function (value) {
    // console.log("HERHERHEHRHEHEHEH");
    // console.log(value);
    if (value <= 100000) {
        total += value;
    }
});
console.log({ total: total });
