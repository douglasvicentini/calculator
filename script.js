import {add} from './operations.js';
import {subtract} from './operations.js';
import {divide} from './operations.js';
import {multiply} from './operations.js';

const operate = (operator, firstNum, secondNum) => {
    if (operator == 'add') return add(firstNum, secondNum);
    else if (operator == 'subtract') return subtract(firstNum, secondNum);
    else if (operator == 'multiply') return multiply(firstNum, secondNum);
    else if (operator == 'divide') return divide(firstNum, secondNum);
    else return null;
}

const body = document.querySelector('body');
const main = document.createElement('main');
body.appendChild(main);

const mainContainer = document.createElement('div');
mainContainer.id = "main-container";
main.appendChild(mainContainer);

const display = document.createElement('div');
display.id = "display";
display.textContent = "teste";
mainContainer.appendChild(display);

const buttonsContainer = document.createElement('div');
buttonsContainer.id = "buttons-container";
mainContainer.appendChild(buttonsContainer);

const firstRow = document.createElement('div');
firstRow.id = "first-row";
const secondRow = document.createElement('div');
secondRow.id = "second-row";
const thirdRow = document.createElement('div');
thirdRow.id = "third-row";
const fourthRow = document.createElement('div');
fourthRow.id = "fourth-row";

buttonsContainer.appendChild(firstRow);
buttonsContainer.appendChild(secondRow);
buttonsContainer.appendChild(thirdRow);
buttonsContainer.appendChild(fourthRow);

const zero = document.createElement('button');
zero.textContent = "0";
zero.classList.add('number-btn');

const one = document.createElement('button');
one.textContent = "1";
one.classList.add('number-btn');

const two = document.createElement('button');
two.textContent = "2";
two.classList.add('number-btn');

const three = document.createElement('button');
three.textContent = "3";
three.classList.add('number-btn');

const four = document.createElement('button');
four.textContent = "4";
four.classList.add('number-btn');

const five = document.createElement('button');
five.textContent = "5";
five.classList.add('number-btn');

const six = document.createElement('button');
six.textContent = "6";
six.classList.add('number-btn');

const seven = document.createElement('button');
seven.textContent = "7";
seven.classList.add('number-btn');

const eight = document.createElement('button');
eight.textContent = "8";
eight.classList.add('number-btn');

const nine = document.createElement('button');
nine.textContent = "9";
nine.classList.add('number-btn');

const dot = document.createElement('button');
dot.textContent = ".";
dot.id = "dot-btn";

const addBtn = document.createElement('button');
addBtn.textContent = "+";
addBtn.classList.add('operator-btn');

const subtractBtn = document.createElement('button');
subtractBtn.classList.add('operator-btn');
subtractBtn.textContent = "-";

const multiplyBtn = document.createElement('button');
multiplyBtn.classList.add('operator-btn');
multiplyBtn.textContent = "×";

const divideBtn = document.createElement('button');
divideBtn.classList.add('operator-btn');
divideBtn.textContent = "÷";

const equalBtn = document.createElement('button');
equalBtn.id = "equal-btn";
equalBtn.textContent = "=";

firstRow.appendChild(seven);
firstRow.appendChild(eight);
firstRow.appendChild(nine);
firstRow.appendChild(divideBtn);

secondRow.appendChild(four);
secondRow.appendChild(five);
secondRow.appendChild(six);
secondRow.appendChild(multiplyBtn);

thirdRow.appendChild(one);
thirdRow.appendChild(two);
thirdRow.appendChild(three);
thirdRow.appendChild(subtractBtn);

fourthRow.appendChild(zero);
fourthRow.appendChild(dot);
fourthRow.appendChild(addBtn);
fourthRow.appendChild(equalBtn);