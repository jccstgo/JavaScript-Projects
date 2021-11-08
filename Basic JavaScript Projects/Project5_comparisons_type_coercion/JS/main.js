//This is an example about typeof 
document.write(typeof "Example" +"<br>");
document.write(typeof 3 +"<br>");

//This is an example about coercion
document.write("3"+3 +"<br>"); 

//This is an example about NaN
function nan(){
    document.getElementById("nan").innerHTML = 0/0;
}

//This is an example about isNaN (true)
function isnan_true(){
    document.getElementById("isnan_true").innerHTML = isNaN("Text");
}

//This is an example about isNaN (false)
function isnan_false(){
    document.getElementById("isnan_false").innerHTML = isNaN(3);
}
//This is an example about infinity
function infinity(){
    document.getElementById("infinity").innerHTML = 2E310;
}
//This is an example about negative infinity
function negative_infinity(){
    document.getElementById("negative_infinity").innerHTML = -3E310;
}
//This is an example about boolean (true)
function boolean_true(){
    document.getElementById("boolean_true").innerHTML = 3>1;
}
//This is an example about boolean (false)
function boolean_false(){
    document.getElementById("boolean_false").innerHTML = 1>3;
}

//This is an example about console
function console_log(){
    console.log(3+3)
    document.getElementById("console_log").innerHTML ="Show the console with F12";
}

//This is an example about console boolean
function console_log_boolean(){
    console.log(1>3)
    document.getElementById("console_log_boolean").innerHTML ="Show the console with F12";
}

//This is an example about double equal (true)
function double_equal_true(){
    document.getElementById("double_equal_true").innerHTML = (3==3);
}

//This is an example about double equal (false)
function double_equal_false(){
    document.getElementById("double_equal_false").innerHTML = (3==10);
}

//This is an example about triple equal (true & false & false & false)
function triple_equal_false(){
    document.getElementById("triple_equal_false").innerHTML = (3===3)+ " - " + (3 === "A")+" - " + (3 === "3") + " - " + ("A" === "B");
}

//This is an example about AND
function and_example(){
    document.getElementById("and_example").innerHTML = (5>2 && 3>1)+ " - " + (5>10 && 1>2);
}

//This is an example about OR
function or_example(){
    document.getElementById("or_example").innerHTML = (5<10 || 1>2)+ " - " + (5>10 || 1>2);
}

//This is an example about NOT
function not_example(){
    document.getElementById("not_example").innerHTML = !(2>3) +" - "+!(3>2);
}


