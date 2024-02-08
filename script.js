const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const mult = document.querySelector("#mult");
const divi = document.querySelector("#divide");
const equals = document.querySelector("#equals");
const clr = document.querySelector("#clear");
const btn = document.querySelectorAll(".btn");
const nums = document.querySelectorAll(".num");
const display = document.querySelector("h2");
const operators = document.querySelectorAll(".operator");

let firstNumber;
let secondNumber;
let mathArray = [];

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
    mathArray = [];
    plus.disabled = false;
}

for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", () => {
        operators.forEach((el) => {
            el.disabled = true;
        });
    });
}

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", () => {
        display.textContent += btn[i].textContent;
        mathArray = display.textContent.split("");
        if (
            mathArray[0] == "+" ||
            mathArray[0] == "-" ||
            mathArray[0] == "*" ||
            mathArray[0] == "/"
        ) {
            display.textContent = "";
            mathArray = [];
            enableOperators();
        }
        console.log(`mathArray len is ${mathArray.length}`);
    });
}

function enableOperators() {
    operators.forEach((el) => {
        el.disabled = false;
    });
}

equals.addEventListener("click", () => {
    if (mathArray.includes("+")) {
        mathArray = mathArray.join("").split("+");
        console.log(mathArray);
        firstNumber = parseInt(mathArray[0]);
        secondNumber = parseInt(mathArray[1]);
        display.textContent = operate(firstNumber, secondNumber, add);
        mathArray.length = 0;
        console.log(`mathArray len is ${mathArray.length}`);
    }
    if (mathArray.includes("-")) {
        mathArray = mathArray.join("").split("-");
        console.log(mathArray);
        firstNumber = parseInt(mathArray[0]);
        secondNumber = parseInt(mathArray[1]);
        display.textContent = operate(firstNumber, secondNumber, subtract);
        mathArray = [];
    }
    if (mathArray.includes("*")) {
        mathArray = mathArray.join("").split("*");
        console.log(mathArray);
        firstNumber = parseInt(mathArray[0]);
        secondNumber = parseInt(mathArray[1]);
        display.textContent = operate(firstNumber, secondNumber, multiply);
        mathArray = [];
    }
    if (mathArray.includes("/")) {
        mathArray = mathArray.join("").split("/");
        console.log(mathArray);
        firstNumber = parseInt(mathArray[0]);
        secondNumber = parseInt(mathArray[1]);
        display.textContent = operate(firstNumber, secondNumber, divide);
        mathArray = [];
    }
    enableOperators();
});

clr.addEventListener("click", () => {
    clear();
});
