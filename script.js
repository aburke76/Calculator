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
// const plus = document.querySelector("#plus");
// const minus = document.querySelector("#minus");
// const mult = document.querySelector("#mult");
// const divi = document.querySelector("#divide");
// const equals = document.querySelector("#equals");
// const clr = document.querySelector("#clear");
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

function clear() {}

let firstNumber;
let secondNumber;
let operator;

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", () => {
        display.textContent = btn[i].textContent;
    });
}
