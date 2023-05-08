const input = document.querySelector('.input');
const output = document.querySelector('.output')
let a = 0;
let b = 0;
let num = '';
let operator = '';
let result = 0;
const number = document.querySelectorAll('.number');
const div = document.querySelector('#div');
const mul = document.querySelector('#multiply');
const sub = document.querySelector('#subtract');
const ad = document.querySelector('#add');
const equal = document.querySelector('#equal');
const clear = document.querySelector('#clear');

//code for choosing numbers
number.forEach( btn =>{
    btn.addEventListener('click', ()=>{
        input.textContent += btn.id;
        num += btn.id;
    });
});



//code for the operator buttons 
div.addEventListener('click', () => {
    a = +num;
    operator = '/';
    input.textContent += operator;
    num = '';
});

mul.addEventListener('click', () => {
    a = +num;
    operator = '*';
    input.textContent += operator;
    num = '';
});

sub.addEventListener('click', () => {
    a = +num;
    operator = '-';
    input.textContent += operator;
    num = '';
});

ad.addEventListener('click', () => {
    a = +num;
    operator = '+';
    input.textContent += operator;
    num = '';
});



// code to finish the operation
equal.addEventListener('click', () =>{
    b = +num;
    output.textContent = operate(operator, a, b);
});


clear.addEventListener('click', () => {
    a = '';
    operator = '';
    input.textContent = '';
    output.textContent = '';
    num = '';
});

function operate (operator, a, b){
    if (operator === '+'){
        return add(a, b);
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
 return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}
