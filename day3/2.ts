import { readFileSync } from 'fs';

const file = readFileSync('./input.txt', 'utf-8');

const lines = file.split('\n');

const getBadge = (l1: string, l2: string, l3: string) => {
    const s1 = new Set(l1.split(''));
    const s2 = new Set(l2.split(''));
    const badgeArray = l3.split('').filter(c => s1.has(c) && s2.has(c));

    // there should only be exactly 1 badge so we assume the array will be length 1 and return its sole element
    return badgeArray[0];
};

let scores = [];

for (let i = 0; i < lines.length; i += 3) {
    const badge = getBadge(lines[i], lines[i + 1], lines[i + 2]);
    const badgeLowerCase = badge.toLowerCase();
    let score = (badgeLowerCase.charCodeAt(0) - 96);
    if (badge !== badgeLowerCase) {
        score += 26;
    }
    scores.push(score);
}

const total = scores.reduce((a, b) => a + b);
console.log(total);