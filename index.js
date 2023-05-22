//Calling out the buttons/ making the buttons var and putting them in a string/array (telling JS to make these classes a array/string)
let display = document.querySelector('.display');
let buttons = document.querySelectorAll('.btn'); //theres more then one with this class so ALL is just tellin JS to not only select one but all classes with this class name
let clear = document.querySelector('.btn-clear');
let clearOne=document.querySelector('.btn-ones');
let equal = document.querySelector('.btn-equal');

//selecting all the buttons and displaying the button values on the screen
buttons.forEach ((button) =>  {
    button.addEventListener('click', (e) => {
        let value = e.target.dataset.num; //dataset is a way off calling out data in the html
        display.value += value;
    })
})

//The function of the =. Telling js to work out the two values that are being inputed into the display(screen)
equal.addEventListener ('click', (e) => {
    if(display.value === ''){
        display.value = "";
    }else {
        let answer = eval (display.value);
        display.value = answer;
    }
})

//The function of the all clear button. Telling the browser that if this button is being click the value being displayed should be non(clean/clear)
clear.addEventListener('click', (e) => {
    display.value = "";
})

//clearing one value(backspace). Using slice to cut the value selected in the string/array. in this case the string is the line/colective numbers being displayed on the screen
clearOne.addEventListener('click', (e) => {
    display.value = display.value.slice(0,-1);
})