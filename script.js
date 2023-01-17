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

const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => { button.addEventListener('click', function() {
    // console.log(this.id);
    input.textContent=this.id;
}) });

const display=document.querySelector('#input');
const input=document.createElement('div');
display.appendChild(input);