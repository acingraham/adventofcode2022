import { readFileSync } from 'fs';

const file = readFileSync('./input.txt', 'utf-8');

const [crateSection, moveSection] = file.split('\n\n');
const crateLines = crateSection.split('\n');

// Remove last line from crateLines and figure out how many stacks there are
const stackCount = crateLines.pop().split('').map(c => parseInt(c)).filter(n => !Number.isNaN(n)).pop();

// Since crates are numbered 1 to stackCount, we're creating one extra just so we can index into the array without converting the index.
const stacks = Array(stackCount + 1).fill(null).map(i => []);

for (let i = crateLines.length - 1; i >= 0; i--) {
    const crateLine = crateLines[i];

    for (let stackIndex = 1; stackIndex <= stackCount; stackIndex++) {
        const positionInLine = 4 * (stackIndex - 1) + 1;
        const stackElement = crateLine[positionInLine];
        if (stackElement !== ' ') {
            stacks[stackIndex].push(stackElement);
        }
    }
}

const moveLines = moveSection.split('\n');
const moveCommands = [];
for (let moveLine of moveLines) {
    const [moveCountSection, moveLocationSection] = moveLine.split(' from ');
    const [, moveCount] = moveCountSection.split('move ');
    const [from, to] = moveLocationSection.split(' to ');

    const obj = {
        count: parseInt(moveCount, 10),
        from: parseInt(from, 10),
        to: parseInt(to, 10),
    };

    moveCommands.push(obj);
}

for (let move of moveCommands) {
    const cratesToMove = stacks[move.from].splice(-1 * move.count);
    stacks[move.to].push(...cratesToMove);
}

let result = ''
for (let i = 1; i < stacks.length; i++) {
    result += stacks[i].pop();
}

console.log(result);