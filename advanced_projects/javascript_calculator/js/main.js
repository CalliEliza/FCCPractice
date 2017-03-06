/**
 * Created by chewy on 2/27/17.
 */

const numbers = document.querySelectorAll('[data-num]');
const operations = document.querySelectorAll('[data-op]');
const screen = document.querySelector('#value');
const clearAll = document.querySelector('#clearAll');
const backspace = document.querySelector('#backspace');
const equalSign = document.querySelector("#equals");

let currentNumber = 0;
let currentOperator = '';
let nextNumber = 0;
// store current runningInput
let runningInput;
//stores current inputs
let inputs =[""];
let total = 0;

//array used to validate input
const op1 = ['+','-','x','/','='];
const op2 = ['.'];
const num = [0,1,2,3,4,5,6,7,8,9];

function getVal(input) {

}

function update() {
    console.log("1 "+runningInput);
    runningInput =  inputs.join();
    const regex = new RegExp(',', 'g');
    runningInput = runningInput.replace(regex,'');
    console.log("2 "+runningInput);
    screen.textContent = runningInput;
}

function getTotal() {
    runningInput = inputs.join();
    const regex = new RegExp(',', 'g');
    runningInput = runningInput.replace(regex, '');
    total = eval("(" + runningInput + ")");
    console.log(total);
    screen.textContent = total;
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
    //console.log("I'm a backspace");
    inputs.pop();
    //update();
    //screen.textContent = screen.textContent.substr(0,screen.textContent.length-1);
});

//listens for click on clearAll button
clearAll.addEventListener('click', () => {
    //currentNumber = 0;
    inputs = [""];
    update();
    screen.textContent = 0;
});

// gets operator clicked on, and sets to current operator
operations.forEach(operation => operation.addEventListener('click', () => {
    inputs.push(operation.dataset.op);
    update();
    //currentOperator = operation.dataset.op;
   // screen.textContent = getOPSymbol(currentOperator);
    //console.log(currentOperator);
}));

//gets total when equal sign is clicked on
equalSign.addEventListener('click', getTotal);


