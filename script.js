const add = function(a,b) {
    return a+b;
}

const subtract = function(a,b) {
    return a-b;
}

const multiply = function(a,b) {
    return a*b;
}

const divide = function(a,b) {
    return a/b;
}

const operate = function(operation, x,y) {
    const a = Number(x);
    const b = Number(y);
    switch(operation) {
        case '+':
            return add(a,b);
        case '-':
            return subtract(a,b);
        case 'X':
            return multiply(a,b);
        case '÷':
            if (b===0) {
                return 'undefined'
            } else {
                return divide(a,b)
            }
    }
}

const clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click',() => location.reload());

// below this needs tweaking

document.getElementById(".").onclick = function() {
    //disable decimal button
    this.disabled = true; //need to make sure it is enabled after clicking an operation button
}

const numerals = document.querySelectorAll('.numerals');
const btnOp = document.querySelectorAll('.btnOp');
const equalBtn = document.querySelector('#equals');
const display=document.querySelector('#input');
const input=document.createElement('div');
let displayVar='';
let displayOp='';
let inputA='';

const displayDigit=function() {
    displayVar +=this.id;
    input.textContent=displayVar;
}

const displayOperation=function() {
    displayOp =this.id;
    input.textContent=displayOp;
    if (inputA==='') {
        inputA=displayVar;
        displayVar='';
    } else {
        displayVar='';
    }
}

numerals.forEach(button => { button.addEventListener('click', displayDigit) });

btnOp.forEach(button => { button.addEventListener('click', displayOperation) });

equalBtn.addEventListener('click', ()=> {
    let answer=operate(displayOp, inputA, displayVar);
    input.textContent=answer;
    inputA=answer;
    displayVar='';
    displayOp='';
});

display.appendChild(input);