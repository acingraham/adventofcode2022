import { readFileSync } from 'fs';

const file = readFileSync('./input.txt', 'utf-8');

const elfs = file.split('\n\n');

let max = [];
for (let elf of elfs) {
    const calories = elf.split('\n')
                        .map(s => parseInt(s))
                        .filter(n => !Number.isNaN(n))
                        .reduce((a, b) => a + b);
    max.push(calories);
    max.sort((a, z) => z - a);
    max.splice(3);
}

const sum = max.reduce((a, b) => a + b);
console.log(sum);
