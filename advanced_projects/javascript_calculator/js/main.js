/**
 * Created by chewy on 2/27/17.
 */

const numbers = document.querySelectorAll('.key');
const operations = document.querySelectorAll('.op');
const screen = document.querySelector('#value');
const clearAll = document.querySelector('#clearAll');
const backspace = document.querySelector('#backspace');


function performOperation(e) {
    console.log(e);
}


numbers.forEach(number => number.addEventListener('click', () => {
    screen.textContent = number;
}));

operations.forEach(operation => operation.addEventListener('click', performOperation));