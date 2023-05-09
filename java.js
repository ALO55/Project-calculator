const input = document.querySelector('.input');
const output = document.querySelector('.output')
let a = 0;
let b = 0;
let num = 0;
let operator = '';
let pointCheck = false;
const number = document.querySelectorAll('.number');
const point = document.querySelector('.point');
const div = document.querySelector('#div');
const mul = document.querySelector('#multiply');
const sub = document.querySelector('#subtract');
const ad = document.querySelector('#add');
const equal = document.querySelector('#equal');
const clear = document.querySelector('#clear');
const del = document.querySelector('#delete');

//code for choosing numbers
number.forEach( btn =>{
    btn.addEventListener('click', ()=>{
        input.textContent += btn.id;
        num += btn.id;
    });
});

point.addEventListener('click', () =>{
    if(pointCheck === false){
        input.textContent += point.id;
        num += point.id;
        pointCheck = true;
    };
});



//code for the operator buttons 
div.addEventListener('click', () => {
    if(operator != ''){
        output.textContent = operate(operator, a, num) 
        num = output.textContent;
    };
    a = +num;
    operator = '/';
    input.textContent += operator;
    num = '';
    pointCheck = false;
});

mul.addEventListener('click', () => {
    if(operator != ''){
        output.textContent = operate(operator, a, num) 
        num = output.textContent;
    };
    a = +num;
    operator = '*';
    input.textContent += operator;
    num = '';
    pointCheck = false;
});

sub.addEventListener('click', () => {
    if(operator != ''){
        output.textContent = operate(operator, a, num) 
        num = output.textContent;
    };
    a = +num;
    operator = '-';
    input.textContent += operator;
    num = '';
    pointCheck = false;
});

ad.addEventListener('click', () => {
    if(operator != ''){
        output.textContent = operate(operator, a, num) 
        num = output.textContent;
    };
    a = +num;
    operator = '+';
    input.textContent += operator;
    num = '';
    pointCheck = false;
});


// code to finish the operation
equal.addEventListener('click', () =>{
    output.textContent = operate(operator, a, num);
});
// code to clear o delete numbers
clear.addEventListener('click', () => {
    a = '';
    operator = '';
    input.textContent = '';
    output.textContent = '';
    num = '';
});

del.addEventListener('click', () => {
    input.textContent = input.textContent.slice(0, -1);
       num = num.slice(0, -1);
       pointCheck = false;
})

// functions to the operations
function operate (operator, a, b){
    if (operator === '+'){
        return add(+a, +b);
    }
    else if(operator === '-'){
        return subtract(a, b);
    }
    else if(operator === '*'){
        return multiply(a, b);
    }
    else if(operator === '/'){
        return divide(a, b);
    }
}

function add(a, b){
 return Math.round((a + b) * 10) / 10;
}

function subtract(a, b){
    return Math.round((a - b) * 10) / 10;
}

function multiply(a, b){
    return Math.round((a * b) * 10) / 10;
}

function divide(a, b){
    return Math.round((a / b) * 10) / 10;
}
