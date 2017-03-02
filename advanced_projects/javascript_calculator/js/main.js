/**
 * Created by chewy on 2/27/17.
 */

const numbers = document.querySelectorAll('[data-num]');
const operations = document.querySelectorAll('[data-op]');
const screen = document.querySelector('#value');
const clearAll = document.querySelector('#clearAll');
const backspace = document.querySelector('#backspace');
let currentNumber = 0;


function performOperation(e) {
    console.log(e);
}

//listens and gets the clicked on number
numbers.forEach(number => number.addEventListener('click', () => {
    //console.log(number.dataset.num);
    screen.textContent += number.dataset.num; // adds to textContent
    currentNumber += number.dataset.num; //set this to current number
    currentNumber.slice(1);
    console.log(currentNumber);
}));

// listens for clicks on backspace button
backspace.addEventListener('click', () => {
    screen.textContent = screen.textContent.substr(0,screen.textContent.length-1);
});

//listens for click on clearAll button
clearAll.addEventListener('click', () => {
    screen.textContent = " ";
});

operations.forEach(operation => operation.addEventListener('click', performOperation));

