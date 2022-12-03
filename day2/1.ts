import { readFileSync } from 'fs';

const file = readFileSync('./input.txt', 'utf-8');

const games = file.split('\n');

const resultValue = {
    // rock
    A: {
        X: 3, // rock
        Y: 6, // paper
        Z: 0, // scissors
    },
    // paper 
    B: {
        X: 0, // rock
        Y: 3, // paper
        Z: 6, // scissors
    },
    // scissors
    C: {
        X: 6, // rock
        Y: 0, // paper
        Z: 3, // scissors
    },
};

const choiceValue = {
    X: 1, // rock
    Y: 2, // paper 
    Z: 3, // scissors 
}
const scores = games.map(game => {
    const [opponent, me] = game.split(' ');
    let score = resultValue[opponent][me] + choiceValue[me];
    return score;
});

const sum = scores.reduce((a, b) => a + b);
console.log(sum);