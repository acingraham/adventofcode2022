import { readFileSync } from 'fs';

const file = readFileSync('./input.txt', 'utf-8');

let overlappingPairs = 0;
const lines = file.split('\n');
for (let line of lines) {
    const ranges = line.split(',');
    const [s1, e1] = ranges[0].split('-').map(s => parseInt(s, 10));
    const [s2, e2] = ranges[1].split('-').map(s => parseInt(s, 10));
    
    if ( !((e1 < s2) || (e2 < s1)) ) {
        overlappingPairs++;
    }
}

console.log({overlappingPairs});