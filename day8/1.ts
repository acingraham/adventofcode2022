import { readFileSync } from 'fs'

const file = readFileSync('./input.txt', 'utf-8')

class Point {
    val: number;
    up: number;
    down: number;
    left: number;
    right: number;

    constructor(val: number) {
        this.val = val;
    }
}

const grid = file.split('\n')
                 .map(line => line.split('')
                                  .map(c => new Point(parseInt(c, 0)))
                 );

for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
        const point = grid[r][c];
        point.up = grid[r-1] ? Math.max(grid[r-1][c].up, point.val) : point.val;
        point.left = grid[r][c-1] ? Math.max(grid[r][c-1].left, point.val) : point.val;
    }
}

for (let r = grid.length - 1; r >= 0; r--) {
    for (let c = grid[r].length - 1; c >= 0; c--) {
        const point = grid[r][c];
        point.down = grid[r+1] ? Math.max(grid[r+1][c].down, point.val) : point.val;
        point.right = grid[r][c+1] ? Math.max(grid[r][c+1].right, point.val) : point.val;
    }
}

let count = 0;
for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
        const point = grid[r][c];
        if (r === 0 || c === 0 || r === grid.length - 1 || c === grid[r].length -1) {
            count++;
            continue;
        }

        const minHeight = Math.min(
            grid[r][c-1].left,
            grid[r][c+1].right,
            grid[r-1][c].up,
            grid[r+1][c].down
        );

        if (point.val > minHeight) {
            count++;
        }
    }
}

console.log(count);