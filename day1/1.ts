import { readFileSync } from 'fs';

const file = readFileSync('./input.txt', 'utf-8');

const elfs = file.split('\n\n');

let max = 0;
for (let elf of elfs) {
    const calories = elf.split('\n')
                        .map(s => parseInt(s))
                        .filter(n => !Number.isNaN(n))
                        .reduce((a, b) => a + b);
    max = Math.max(max, calories);
}

console.log(max);
