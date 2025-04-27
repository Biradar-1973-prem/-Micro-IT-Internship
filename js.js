//to select all buttons
const buttons = document.querySelectorAll('button');

// to select class display
const display = document.querySelector('.display');

buttons.forEach(function(button){
    button.addEventListener('click',calculate)
});

function calculate(event){
    const clickButtobvalue = event.target.value;

    if(clickButtobvalue === "="){
        if(display.value !== ''){
            display.value = eval(display.value);
        }
    }else if(clickButtobvalue === "C"){
        display.value = ''
    }else{
        display.value += clickButtobvalue;
    }
}
