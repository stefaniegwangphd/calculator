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


const operate = function(a,b) {
    let operation=getOperation();
    console.log(operation);
    return operation(a,b)
}

const clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click',() => location.reload());
