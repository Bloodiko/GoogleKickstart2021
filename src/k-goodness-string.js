const readline = require('readline');

function calcGoodness(s, n) {
    // in s String
    let k = 0;
    for (let i = 0; i + i < n; i++) {
        const element = s[i];
        const elementR = s[n - i - 1];

        //console.log([element, elementR])
        if (element !== elementR) k++;
    }
    return k;
}

function handleTest(cTest) {
    // input current Test object 
    return Math.abs(calcGoodness(cTest.s, cTest.n) - cTest.k)
}


let inputCount = 0;
let targetTestCaseCount = 0;
let testCount = 0;
let currTest = {};

process.stdin.setEncoding('utf8');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

rl.on('line', function (chunk) {
    chunk = chunk.replace('\n', '')
    // console.log('>>> '+chunk);

    if (inputCount === 0) {
        targetTestCaseCount = Number.parseInt(chunk);
        inputCount++;
        return;
    }

    if (inputCount % 2 === 1) {
        // First line of Test Case input
        const [n, k] = chunk.split(' ');
        currTest = { n, k };
        inputCount++;
        return;
    }

    if (inputCount % 2 === 0) {
        // Second Line of test case == String
        currTest.s = chunk;
        testCount++;
        inputCount++;

        // print
        console.log(`Case #${testCount}: ${handleTest(currTest)}`);
    }

    // exit input loop when test count finished
    if (testCount === targetTestCaseCount) {
        //console.log('### DONE ###');
        process.exit(0);
    }
});
