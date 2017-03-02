/**
 * Created by chewy on 2/27/17.
 */

const numbers = document.querySelectorAll('[data-num]');
const operations = document.querySelectorAll('[data-op]');
const screen = document.querySelector('#value');
const clearAll = document.querySelector('#clearAll');
const backspace = document.querySelector('#backspace');

let currentNumber = 0;
let currentOperator = '';
let nextNumber = 0;
// store current runningInput
let runningInput;
//stores current inputs
let inputs =[""];

//array used to validate input
const op1 = ['+','-','x','/','='];
const op2 = ['.'];
const num = [0,1,2,3,4,5,6,7,8,9];

function getVal(input) {

}

function update() {
    runningInput =  inputs.join();
    const regex = new RegExp(',', 'g');
    runningInput = runningInput.replace(regex,'');
    console.log(runningInput);
    screen.textContent = runningInput;
}

function getTotal(a,b,op) {
}

//listens and gets the clicked on number
numbers.forEach(number => number.addEventListener('click', () => {
    inputs.push(number.dataset.num);
    update();
    //screen.textContent += number.dataset.num; // adds to textContent
    //currentNumber += number.dataset.num; //set this to current number
    //currentNumber.slice(1);
    //console.log(currentNumber);
}));

// listens for clicks on backspace button
backspace.addEventListener('click', () => {
    screen.textContent = screen.textContent.substr(0,screen.textContent.length-1);
    currentNumber = screen.textContent;
});

//listens for click on clearAll button
clearAll.addEventListener('click', () => {
    screen.textContent = 0;
    currentNumber = 0;
});

// gets operator clicked on, and sets to current operator
operations.forEach(operation => operation.addEventListener('click', () => {
    currentOperator = operation.dataset.op;
   // screen.textContent = getOPSymbol(currentOperator);
    console.log(currentOperator);
}));




