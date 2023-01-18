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
    return Math.round(a/b*100000)/100000;
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
                return 'illegal math!'
            } else {
                return divide(a,b)
            }
    }
}

const clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click',() => location.reload());

const numerals = document.querySelectorAll('.numerals');
const pmBtn=document.getElementById('#pm');
const decimalBtn=document.getElementById(".");
const btnOp = document.querySelectorAll('.btnOp');
const equalBtn = document.querySelector('#equals');
const display=document.querySelector('#input');
const input=document.createElement('div');
let displayVar='';
let displayOp='';
let inputA='';

const displayDigit=function() {
    if (displayVar==='' && this.id==='.') {
        displayVar += 0+this.id;
    } else if (this.id==='pm'){
        if (displayVar.includes('-')===false) {
            displayVar='-'+displayVar;
        } else {
            displayVar=displayVar.substring(1)
        }
    }
    else {
        displayVar +=this.id;
    }
    if (displayVar.includes('.')===true) {
        decimalBtn.onclick = function() {
        this.disabled = true;}
    }
    input.textContent=displayVar;
}

const evaluate=function() {
    let answer=operate(displayOp, inputA, displayVar);
    input.textContent=answer;
    inputA=answer;
    displayVar='';
    displayOp='';
}

const displayOperation=function() {
    displayOp =this.id;
    // if (inputA!='') {
    //     evaluate;
    // } else {
    // }
    if (inputA==='') {
        inputA=displayVar;
        displayVar='';
        input.textContent=displayOp;
    } else {
        // input.textContent=operate(displayOp, inputA, displayVar);
        // evaluate;
        displayVar='';
    }
}

numerals.forEach(button => { button.addEventListener('click', displayDigit) });

btnOp.forEach(button => { button.addEventListener('click', displayOperation) });

equalBtn.addEventListener('click', evaluate);

display.appendChild(input);