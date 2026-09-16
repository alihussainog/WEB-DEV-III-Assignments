const Process = require("process");

const data = Process.argv;

console.log(data);

const operation = Process.argv[2];

const a = +Process.argv[3];
const b = +Process.argv[4];

function add(x, y) {
    console.log(x + y);
}

function sub(x, y) {
    console.log(x - y);
}

function multiple(x, y) {
    console.log(x * y);
}

function divide(x, y) {
    if (y === 0) {
        console.log("Cannot divide by zero");
    } else {
        console.log(x / y);
    }
}

if (operation === "add") {
    add(a, b);
} else if (operation === "sub") {
    sub(a, b);
} else if (operation === "multiple") {
    multiple(a, b);
} else if (operation === "divide") {
    divide(a, b);
} else {
    console.log("Invalid operation");
}