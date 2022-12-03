import { readFileSync } from 'fs';

const file = readFileSync('./input.txt', 'utf-8');

const lines = file.split('\n');

const scores = lines.map((line) => {
    // break up line into 2 sacks
    const mid = line.length / 2;
    const sack1 = line.slice(0, mid);
    const sack2 = line.slice(mid);

    // identify shared types between sacks
    const sack1Set = new Set(sack1.split(''));
    const sharedTypes = Array.from(new Set(sack2.split('').filter(c => sack1Set.has(c))));

    // calculate score
    const score = sharedTypes.reduce((acc, type) => {
        const typeLowerCase = type.toLowerCase();
        let sum = typeLowerCase.charCodeAt(0) - 96;
        if (type !== typeLowerCase) {
            sum += 26;
        }
        return acc + sum;
    }, 0);
    return score;
});

const total = scores.reduce((a, b) => a + b);
console.log(total);