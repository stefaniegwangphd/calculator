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

const buttons = document.querySelectorAll('.btn');
const display=document.querySelector('#input');
const input=document.createElement('div');
let displayVar='';

buttons.forEach(button => { button.addEventListener('click', function() {
    displayVar +=this.id;
    input.textContent=displayVar;
    console.log(displayVar);
}) });


display.appendChild(input);