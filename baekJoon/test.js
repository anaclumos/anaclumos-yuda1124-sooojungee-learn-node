const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
})
.on('close', function () {
    console.log(BigInt(input[0]) + BigInt(input[1])+"");
    process.exit();
});

