"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var file = (0, fs_1.readFileSync)('./input.txt', 'utf-8');
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
var getNextCoordinates = function (r, c, direction) {
    if (direction === Direction.Up) {
        return [r - 1, c];
    }
    else if (direction === Direction.Down) {
        return [r + 1, c];
    }
    else if (direction === Direction.Left) {
        return [r, c - 1];
    }
    else {
        return [r, c + 1];
    }
};
var getDistance = function (grid, r, c, val, direction) {
    var _a;
    if (((_a = grid === null || grid === void 0 ? void 0 : grid[r]) === null || _a === void 0 ? void 0 : _a[c]) === undefined) {
        return 0;
    }
    if (grid[r][c] >= val) {
        return 1;
    }
    var _b = getNextCoordinates(r, c, direction), nextR = _b[0], nextC = _b[1];
    return 1 + getDistance(grid, nextR, nextC, val, direction);
};
var grid = file.split('\n').map(function (line) { return line.split('').map(function (c) { return parseInt(c, 0); }); });
var max = 0;
for (var r = 0; r < grid.length; r++) {
    for (var c = 0; c < grid[r].length; c++) {
        var dist = getDistance(grid, r - 1, c, grid[r][c], Direction.Up) *
            getDistance(grid, r + 1, c, grid[r][c], Direction.Down) *
            getDistance(grid, r, c - 1, grid[r][c], Direction.Left) *
            getDistance(grid, r, c + 1, grid[r][c], Direction.Right);
        max = Math.max(max, dist);
    }
}
console.log(max);
