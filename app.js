const locs = require('./map.js');
const prompt = require('./inputPrompt.js');

let currX = 1;
let currY = 0;

let currLoc = locs[currX][currY];

function getInput() {
    return prompt('Input: ');
}

function parse(input) {
    const [verb, noun] = input.split(' ');

    if (verb) {
        switch (verb.toLowerCase()) {
            case 'quit':
                console.log('Terminating');
                return false;
            case 'go':
            case 'walk':
                go(noun);
                break;
            case 'look':
                look(noun);
                break;
            default:
                console.log('Unknown');
            }
        }
    
    return true;
}

function look(noun) {
    if (!noun || noun === 'around') {
        console.log('you are in the ' + currLoc.name)
    }
    else {
        console.log('error looking');
    }
}

function go(noun) {
    const directions = {
        'n': () => currX--,
        's': () => currX++,
        'e': () => currY++,
        'w': () => currY--
      };

    const direction = noun.toLowerCase();

    if (noun && direction in directions) {
        directions[direction]();
        currLoc = locs[currX][currY];
        return;
    }
    console.log('error going');
}


function main() {
    while (parse(getInput()));
    console.log('bye');
    return;
}

main();