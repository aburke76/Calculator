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

function operate(a, b, func) {
    return func(a, b);
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

equals.addEventListener("click", () => {
    if (mathArray.includes("+")) {
        mathArray = mathArray.split("+");
        console.log(mathArray);
        firstNumber = parseInt(mathArray[0]);
        secondNumber = parseInt(mathArray[1]);
        display.textContent = operate(firstNumber, secondNumber, add);
        mathArray = [display.textContent];
    }
    if (mathArray.includes("-")) {
        mathArray = mathArray.split("-");
        console.log(mathArray);
        firstNumber = parseInt(mathArray[0]);
        secondNumber = parseInt(mathArray[1]);
        display.textContent = operate(firstNumber, secondNumber, subtract);
        mathArray = [display.textContent];
    }
    if (mathArray.includes("x")) {
        mathArray = mathArray.split("x");
        console.log(mathArray);
        firstNumber = parseInt(mathArray[0]);
        secondNumber = parseInt(mathArray[1]);
        display.textContent = operate(firstNumber, secondNumber, multiply);
        mathArray = [display.textContent];
    }
    if (mathArray.includes("/")) {
        mathArray = mathArray.split("/");
        console.log(mathArray);
        firstNumber = parseInt(mathArray[0]);
        secondNumber = parseInt(mathArray[1]);
        display.textContent = operate(firstNumber, secondNumber, divide);
        if (secondNumber == 0) {
            alert("You can't do that, you ding dong.");
            clear();
        }
        mathArray = [display.textContent];
    }
    enableOperators();
    newEquation = true;
});

clr.addEventListener("click", () => {
    clear();
    enableOperators();
});
