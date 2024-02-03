// const zero = document.querySelector("#zero");
// const one = document.querySelector("#one");
// const two = document.querySelector("#two");
// const three = document.querySelector("#3");
// const four = document.querySelector("#4");
// const five = document.querySelector("#5");
// const six = document.querySelector("#6");
// const seven = document.querySelector("#7");
// const eight = document.querySelector("#8");
// const nine = document.querySelector("#9");
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const mult = document.querySelector("#mult");
const divi = document.querySelector("#divide");
const equals = document.querySelector("#equals");
const clr = document.querySelector("#clear");
const btn = document.querySelectorAll(".btn");
const display = document.querySelector("h2");

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    return a / b;
}

function multiply(a, b) {
    return a * b;
}

function operate(a, b, func) {
    return func(a, b);
}

function clear() {
    display.textContent = "";
}

let firstNumber;
let secondNumber;
let operator;

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", () => {
        display.textContent += btn[i].textContent;
    });
}

clr.addEventListener("click", () => {
    clear();
});

equals.addEventListener("click", () => {
    let equation = display.textContent.split("");
    firstNumber = parseInt(equation[0]);
    operator = equation[1];
    secondNumber = parseInt(equation[2]);
    if (operator === "+") {
        let ans = firstNumber + secondNumber;
        display.textContent = ans;
    }
    if (operator === "-") {
        let ans = firstNumber - secondNumber;
        display.textContent = ans;
    }
    if (operator === "*") {
        let ans = firstNumber * secondNumber;
        display.textContent = ans;
    }
    if (operator === "/") {
        let ans = firstNumber / secondNumber;
        display.textContent = ans;
    }
});
