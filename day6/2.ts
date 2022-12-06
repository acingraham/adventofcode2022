import { readFileSync } from 'fs';

const file = readFileSync('./input.txt', 'utf-8');

const SIZE = 14;

for (let i = 0; i < file.length; i++) {
    const str = file.slice(i, i + SIZE);
    const set = new Set(str.split(''));
    if (set.size === SIZE) {
        console.log(i + SIZE);
        break;
    }
}

console.log('na');