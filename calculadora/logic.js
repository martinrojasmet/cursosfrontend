const num1 = document.querySelector(".n1");
const num2 = document.getElementById("n2");
const num3 = document.getElementById("n3");
const num4 = document.getElementById("n4");
const num5 = document.getElementById("n5");
const num6 = document.getElementById("n6");
const num7 = document.getElementById("n7");
const num8 = document.getElementById("n8");
const num9 = document.getElementById("n9");
const num0 = document.getElementById("n0");

let operationSelected = 0;
let firstNumber = 0;
let secondNumber = 0;
let result = 0;

const displayShow = document.querySelector(".disp");
const div = document.getElementById("div");
const mult = document.getElementById("mult");
const sub = document.getElementById("sub");
const add = document.getElementById("add");
const equalSign = document.getElementById("equal");
const deleteNumber = document.getElementById("arr-button");
const clear = document.getElementById("c-button");

function changeDisplay (number) {
    displayShow.innerHTML = number.toString();
};

function eraseDisplay () {
    firstNumber = parseInt(displayShow.innerHTML);
    displayShow.innerHTML = "0";
};

function doOperationEqual () {
    if (operationSelected == 1) {
        result = firstNumber + secondNumber;
        changeDisplay(result);
        firstNumber = result;
    } else if (operationSelected == 2) {
        result = firstNumber - secondNumber;
        changeDisplay(result);
        firstNumber = result;
    } else if (operationSelected == 3) {
        result = firstNumber * secondNumber;
        changeDisplay(result);
        firstNumber = result;
    } else if (operationSelected == 4) {
        result = firstNumber / secondNumber;
        changeDisplay(result);
        firstNumber = result;
    };
};

function addNumberEnd (number) {
    if (displayShow.innerHTML == "0") {
        displayShow.innerHTML = number.toString();
    } else {
        displayShow.innerHTML += number.toString();
    };
    changeDisplay(displayShow.innerHTML);
};

function deleteNumberEnd () {
    displayShow.innerHTML = displayShow.innerHTML.substring(0,displayShow.innerHTML.length-1);
    changeDisplay(displayShow.innerHTML);
};

// function getNumberDisplay () {
//     displayShow.innerHTML = displayShow.getAttribute();
// };

add.addEventListener("click", function (){
    operationSelected = 1;
    eraseDisplay();
});

sub.addEventListener("click", function (){
    operationSelected = 2;
    eraseDisplay();
});

mult.addEventListener("click", function (){
    operationSelected = 3;
    eraseDisplay();
});

div.addEventListener("click", function (){
    operationSelected = 4;
    eraseDisplay();
});

equalSign.addEventListener("click", function (){
    secondNumber = parseInt(displayShow.innerHTML);
    doOperationEqual ();
    operationSelected = 0;
});

clear.addEventListener("click", function() {
    eraseDisplay();
});

deleteNumber.addEventListener("click", function() {
    deleteNumberEnd();
});

num1.addEventListener("click", function(){
    addNumberEnd(1)
});
num2.addEventListener("click", function(){
    addNumberEnd(2)
});
num3.addEventListener("click", function(){
    addNumberEnd(3)
});
num4.addEventListener("click", function(){
    addNumberEnd(4)
});
num5.addEventListener("click", function(){
    addNumberEnd(5)
});
num6.addEventListener("click", function(){
    addNumberEnd(6)
});
num7.addEventListener("click", function(){
    addNumberEnd(7)
});
num8.addEventListener("click", function(){
    addNumberEnd(8)
});
num9.addEventListener("click", function(){
    addNumberEnd(9)
});
num0.addEventListener("click", function(){
    addNumberEnd(0)
});