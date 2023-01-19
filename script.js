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
    return a/b
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
function roundResult(number) {
    return Math.round(number * 1000) / 1000
  }

const clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click',() => location.reload());

const buttons=document.querySelectorAll('.btn');
const numerals = document.querySelectorAll('.numerals');
const decimalBtn=document.getElementById(".");
const deleteBtn=document.querySelector("#backspace");
const btnOp = document.querySelectorAll('.btnOp');
const equalBtn = document.querySelector('#equals');
const display=document.querySelector('#input');
const input=document.createElement('div');
let displayVar='';
let displayOp='';
let inputA='';

// buttons.forEach(button => console.log(button.textContent));


// console.log(deleteBtn.textContent);

// const keyboardInput=function(event) {
//     let key=event.target.textContent;
//     console.log(key);
// }

const displayDigit=function() {
    if (displayVar==='' && this.id==='.') {
        displayVar += 0+this.id;
    } else if (this.id==='pm'){
        if (displayVar.includes('-')===false) {
            displayVar='-'+displayVar;
        } else {
            displayVar=displayVar.substring(1)
        }
    } else if (this.id==='backspace') {
        displayVar=displayVar.slice(0,-1);
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
    const answer=roundResult(operate(displayOp, inputA, displayVar));
    input.textContent=answer;
    inputA=answer;
    displayVar='';
    displayOp='';
}

const displayOperation=function() {
    displayOp =this.id;
    if (inputA==='') {
        inputA=displayVar;
        displayVar='';
        input.textContent=displayOp;
    } 
    else {
        const answer=roundResult(operate(displayOp, inputA, displayVar));
        input.textContent=answer;
        inputA=answer;
        displayVar='';
    }
}


// buttons.forEach(button => button.addEventListener('keydown',displayDigit));
// window.addEventListener('click', (event) => {
//     console.log(event.target.textContent);
//   });
numerals.forEach(button => { button.addEventListener('click', displayDigit) });

btnOp.forEach(button => { button.addEventListener('click', displayOperation) });

equalBtn.addEventListener('click', evaluate);

display.appendChild(input);