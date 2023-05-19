let display = document.querySelector('.display');
let buttons = document.querySelectorAll('.btn');
let clear = document.querySelector('.btn-clear');
let clearOne=document.querySelector('.btn-ones')
let equal = document.querySelector('.btn-equal');


buttons.forEach ((button) =>  {
    button.addEventListener('click', (e) => {
        let value = e.target.dataset.num;
        display.value += value;
    })
})

equal.addEventListener ('click', (e) => {
    if(display.value === ''){
        display.value = "";
    }else {
        let answer = eval (display.value);
        display.value = answer;
    }
})

clear.addEventListener('click', (e) => {
    display.value = "";
})

clearOne.addEventListener('click', (e) => {
    display.value = display.value.slice(0,-1)
})