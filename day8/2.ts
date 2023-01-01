import { readFileSync } from 'fs';

const file = readFileSync('./input.txt', 'utf-8');
enum Direction {
    Up = 1,
    Down,
    Left,
    Right,
}

const getNextCoordinates = (r, c, direction: Direction) => {
    if (direction === Direction.Up) {
        return [r - 1, c];
    } else if (direction === Direction.Down) {
        return [r + 1, c];
    } else if (direction === Direction.Left) {
        return [r, c - 1];
    } else {
        return [r, c + 1];
    }
}

const getDistance = (grid, r, c, val, direction) => {
    if (grid?.[r]?.[c] === undefined) {
        return 0;
    }
    if (grid[r][c] >= val) {
        return 1;
    }

    const [nextR, nextC] = getNextCoordinates(r, c, direction);
    return 1 + getDistance(grid, nextR, nextC, val, direction);
};

const grid = file.split('\n').map(line => line.split('') .map(c => parseInt(c, 0)));

let max = 0;
for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
        const dist = getDistance(grid, r - 1, c, grid[r][c], Direction.Up) * 
                     getDistance(grid, r + 1, c, grid[r][c], Direction.Down) * 
                     getDistance(grid, r, c - 1, grid[r][c], Direction.Left) * 
                     getDistance(grid, r, c + 1, grid[r][c], Direction.Right);
        max = Math.max(max, dist);
    }
}

console.log(max);
