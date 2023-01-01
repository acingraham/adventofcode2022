"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var file = (0, fs_1.readFileSync)('./input.txt', 'utf-8');
var Point = /** @class */ (function () {
    function Point(val) {
        this.val = val;
        this.visible = false;
    }
    return Point;
}());
var grid = file.split('\n')
    .map(function (line) { return line.split('')
    .map(function (c) { return new Point(parseInt(c, 0)); }); });
/*
for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
        const point = grid[r][c];

        if (r === 0) {
            point.up = point.val;
        }

        if (r === grid.length - 1) {
            point.down = point.val;
        }

        if (c === 0) {
            point.left = point.val;
        }

        if (c === grid[r].length - 1) {
            point.right = point.val;
        }
    }
}
*/
for (var r = 0; r < grid.length; r++) {
    for (var c = 0; c < grid[r].length; c++) {
        var point = grid[r][c];
        point.up = grid[r - 1] ? Math.max(grid[r - 1][c].up, point.val) : point.val;
        point.left = grid[r][c - 1] ? Math.max(grid[r][c - 1].left, point.val) : point.val;
    }
}
for (var r = grid.length - 1; r >= 0; r--) {
    for (var c = grid[r].length - 1; c >= 0; c--) {
        var point = grid[r][c];
        point.down = grid[r + 1] ? Math.max(grid[r + 1][c].down, point.val) : point.val;
        point.right = grid[r][c + 1] ? Math.max(grid[r][c + 1].right, point.val) : point.val;
    }
}
var count = 0;
for (var r = 0; r < grid.length; r++) {
    for (var c = 0; c < grid[r].length; c++) {
        var point = grid[r][c];
        if (r === 0 || c === 0 || r === grid.length - 1 || c === grid[r].length - 1) {
            count++;
            point.visible = true;
            continue;
        }
        var minHeight = Math.min(grid[r][c - 1].left, grid[r][c + 1].right, grid[r - 1][c].up, grid[r + 1][c].down);
        // console.log({r,c, minHeight, val: point.val})
        if (point.val > minHeight) {
            count++;
            point.visible = true;
        }
    }
}
// console.log(grid);
console.log(count);
