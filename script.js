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
const dot = document.querySelector("#dot");
const del = document.querySelector("#delete");

let firstNumber;
let secondNumber;
let mathArray = [];
let newEquation = false;
let isNumClicked = false;

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

function clear() {
    display.textContent = "";
    newEquation = false;
    isNumClicked = false;
    mathArray = [];
    enableOperators();
}

function disableOperators() {
    for (let i = 0; i < operators.length; i++) {
        operators[i].addEventListener("click", () => {
            operators.forEach((el) => {
                el.disabled = true;
            });
        });
    }
}

function enableOperators() {
    operators.forEach((el) => {
        el.disabled = false;
    });
}

for (let i = 0; i < nums.length; i++) {
    nums[i].addEventListener("click", () => {
        isNumClicked = true;
        if (newEquation == true) {
            display.textContent = "";
            newEquation = false;
        }
        display.textContent += nums[i].textContent;
        mathArray = display.textContent;
    });
}

for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", () => {
        newEquation = false;
        if (isNumClicked == false) {
            display.textContent = "";
        }
        if (isNumClicked == true) {
            display.textContent += operators[i].textContent;
            disableOperators();
        }
        enableOperators();
    });
}

dot.addEventListener("click", () => {
    dot.disabled = true;
});

equals.addEventListener("click", () => {
    if (mathArray.includes("+")) {
        mathArray = mathArray.split("+");
        firstNumber = parseFloat(mathArray[0]);
        secondNumber = parseFloat(mathArray[1]);
        display.textContent = Number(add(firstNumber, secondNumber).toFixed(4));
        mathArray = [display.textContent];
    }
    if (mathArray.includes("-")) {
        mathArray = mathArray.split("-");
        firstNumber = parseFloat(mathArray[0]);
        secondNumber = parseFloat(mathArray[1]);
        display.textContent = Number(
            subtract(firstNumber, secondNumber).toFixed(4)
        );
        mathArray = [display.textContent];
    }
    if (mathArray.includes("x")) {
        mathArray = mathArray.split("x");
        firstNumber = parseFloat(mathArray[0]);
        secondNumber = parseFloat(mathArray[1]);
        display.textContent = Number(
            multiply(firstNumber, secondNumber).toFixed(4)
        );
        mathArray = [display.textContent];
    }
    if (mathArray.includes("/")) {
        mathArray = mathArray.split("/");
        firstNumber = parseFloat(mathArray[0]);
        secondNumber = parseFloat(mathArray[1]);
        display.textContent = Number(
            divide(firstNumber, secondNumber).toFixed(4)
        );
        if (secondNumber == 0) {
            alert("You can't do that, you ding dong.");
            clear();
        }
        mathArray = [display.textContent];
    }
    enableOperators();
    newEquation = true;
    if (display.textContent === NaN) {
        display.textContent = "err";
    }
    dot.disabled = false;
});

del.addEventListener("click", () => {
    mathArray = mathArray.split("");
    mathArray.splice(mathArray.length - 1, 1);
    display.textContent = mathArray.join("");
});

clr.addEventListener("click", () => {
    clear();
    enableOperators();
});
