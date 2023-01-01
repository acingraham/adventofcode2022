import { readFileSync } from 'fs';

const file = readFileSync('./input.txt', 'utf-8');

const lines = file.split('\n');

const fsRoot = {};
let currDir = fsRoot;

let i = 0;
while (i < lines.length) {
    let line = lines[i];
    if (line.startsWith('$ cd')) {
        const [, dest] = line.split('$ cd ');
        if (dest === '/') {
            currDir = fsRoot;
        } else {
            if (dest !== '..') {
                currDir[dest] ||= {'..': currDir};
            }

            currDir = currDir[dest];
        }
    } else if (line.startsWith('$ ls')) {
        
    } else {
        const [first, second] = line.split(' ');
        if (first !== 'dir') {
            currDir[second] = parseInt(first, 10);
        }
    }
    i++;
}

function getDirSize(dir, map) {
    let size = 0;
    for (const [key, value] of Object.entries(dir)) {
        if (key === '..') {
            continue;
        }

        if (typeof value === 'number') {
            size += value;
        } else {
            size += getDirSize(value, map);
        }
    }
    map.set(dir, size);
    return size;
}

let map = new Map();

const totalSpace = 70000000;
const spaceNeeded = 30000000;
const spaceUsed = getDirSize(fsRoot, map);

// Assumes spaceUsed is more than available space
const spaceToFree = spaceNeeded - (totalSpace - spaceUsed);

let min = spaceUsed; // This is the root directory's size

map.forEach((value) => {
    if (value < min && value >= spaceToFree) {
        min = value;
    }
});
console.log({min});