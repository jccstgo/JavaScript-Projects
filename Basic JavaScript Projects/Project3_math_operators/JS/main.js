//This is an function example about addition
function addition(){
    var addition = 2+3;
    document.getElementById("addition").innerHTML = "2+3 = " + addition;
}
//This is an function example about substraction
function substraction(){
    var substraction = 5-3;
    document.getElementById("substraction").innerHTML = "5-3 = " + substraction;
}
//This is an function example about multiplication
function multiplication(){
    var multiplication = 5*3;
    document.getElementById("multiplication").innerHTML = "5*3 = " + multiplication;
}
//This is an function example about division
function division(){
    var division = 48/3;
    document.getElementById("division").innerHTML = "48/3 = " + division;
}
//This is an function example about multiple operators
function multiple_operators(){
    var multiple_operators = (3+3)*10/5-3;
    document.getElementById("multiple_operators").innerHTML = "(3 + 3) * 10 / 5 - 3 = " + multiple_operators;
}
//This is an function example about modulus
function modulus(){
    var modulus = 10%3;
    document.getElementById("modulus").innerHTML = "10 % 3 = " + modulus;
}
//This is an function example about negation
function negation(){
    var negation = 3;
    document.getElementById("negation").innerHTML = -negation;
}
//This is an function example about increment
function increment(){
    var increment = 3;
    increment++;
    document.getElementById("increment").innerHTML = increment;
}
//This is an function example about decrease
function decrease(){
    var decrease = 3;
    decrease--;
    document.getElementById("decrease").innerHTML = decrease;
}
//This is an function example about random
function random(){
    document.getElementById("random").innerHTML = Math.random()*100;
}

