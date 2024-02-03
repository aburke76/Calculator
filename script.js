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
    if (equation.includes("+")) {
        equation = equation.join("").split("+");
        firstNumber = parseInt(equation[0]);
        secondNumber = parseInt(equation[1]);
        display.textContent = add(firstNumber, secondNumber);
    }
    if (equation.includes("-")) {
        equation = equation.join("").split("-");
        firstNumber = parseInt(equation[0]);
        secondNumber = parseInt(equation[1]);
        display.textContent = subtract(firstNumber, secondNumber);
    }
    if (equation.includes("*")) {
        equation = equation.join("").split("*");
        firstNumber = parseInt(equation[0]);
        secondNumber = parseInt(equation[1]);
        display.textContent = multiply(firstNumber, secondNumber);
    }
    if (equation.includes("/")) {
        equation = equation.join("").split("/");
        firstNumber = parseInt(equation[0]);
        secondNumber = parseInt(equation[1]);
        if (secondNumber == 0) {
            alert("Nice try, you ding-dong.");
            clear();
        } else {
            display.textContent = divide(firstNumber, secondNumber);
        }
    }
    firstNumber = display.textContent;
});
