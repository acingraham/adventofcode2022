import { readFileSync } from 'fs';

const file = readFileSync('./input.txt', 'utf-8');

const games = file.split('\n');

const resultValue = {
    // rock
    A: {
        X: 0 + 3, // lose - scissors
        Y: 3 + 1, // draw - rock
        Z: 6 + 2, // win - paper
    },
    // paper 
    B: {
        X: 0 + 1, // lose - rock
        Y: 3 + 2, // draw - paper
        Z: 6 + 3, // win - scissors
    },
    // scissors
    C: {
        X: 0 + 2, // lose - paper
        Y: 3 + 3, // draw - scissors
        Z: 6 + 1, // win - rock
    },
};

const scores = games.map(game => {
    const [opponent, result] = game.split(' ');
    let score = resultValue[opponent][result];
    return score;
});

const sum = scores.reduce((a, b) => a + b);
console.log(sum);