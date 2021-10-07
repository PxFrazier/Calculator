const display = document.getElementById('output');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
var query = String();
var element = String();

document.getElementById('equals').addEventListener('click', ()=>{
    query += element;
    display.innerText = math.evaluate(query);
    query = '';
    element = '';
});
document.getElementById('clearEntry').addEventListener('click', ()=>{
    element = '';
    display.innerText = `${query}${element}`;
});
document.getElementById('clearOutput').addEventListener('click', ()=>{
    display.innerText = '';
    query = '';
    element = '';
});
document.getElementById('negative').addEventListener('click', ()=>{
    if(element == '') element += '-';
    else element += '(-';

    display.innerText += element;
});
document.getElementById('sqrt').addEventListener('click', ()=>{
    display.innerText = Math.sqrt(parseFloat(display.innerText));
    query = '';
    element = '';
});

numbers.forEach((entry)=>{
    entry.addEventListener('click', ()=>{
        element += entry.innerText;
        display.innerText += entry.innerText;
    });
});

operators.forEach((entry)=>{
    entry.addEventListener('click', ()=>{
        element += entry.innerText;
        query += element;
        element = '';
        display.innerText += entry.innerText;
    });
});












