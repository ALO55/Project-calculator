const a = document.querySelector('.input');
const b = 5;
const operator = '+';
const number = document.querySelectorAll('.number');
const div = document.querySelector('#div');


number.forEach( num =>{
    num.addEventListener('click', ()=>{
        a.textContent += num.id;
    });
});


function operate (operator, a, b){
    if (operator == '+'){
        add(a, b);
    }
    else if(operator == '-'){
        subtract(a, b);
    }
    else if(operator == '*'){
        multiply(a, b);
    }
    else if(operator == '/'){
        divide(a, b);
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
