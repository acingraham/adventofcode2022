import { readFileSync } from 'fs';

const file = readFileSync('./input.txt', 'utf-8');

for (let i = 0; i < file.length; i++) {
    const str = file.slice(i, i + 4);
    const set = new Set(str.split(''));
    if (set.size === 4) {
        console.log(i + 4);
        break;
    }
}

console.log('na');