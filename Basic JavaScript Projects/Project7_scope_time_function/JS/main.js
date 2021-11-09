//Display the global variable
var x=3;
function add_1(){
    var y = 9;
    console.log(y+x);
    document.getElementById("add_1").innerHTML = y+x;
}

//Display the local variable (with intentional error)
function add_2(){
    console.log(y+x);
    document.getElementById("add_2").innerHTML = y+x;
}
//This function use getHours and IF statement
function get_Date(){
    if(new Date().getHours()<18){
        document.getElementById("get_Date").innerHTML = "How are you today?";
    }
}

//This is my own IF statement
function if_statement(){
    if(new Date().getHours()<12){
        document.getElementById("if_statement").innerHTML = "Have a nice morning";
    }else{
        document.getElementById("if_statement").innerHTML = "Have a nice noon";
    }
}

//This function is an example about IF and ELSE statement
function if_else_statement(){
    old = document.getElementById("old").value;
    if(old >=65){
        message="You can apply to pay less in public transportation";
    }else{
        message="You CAN'T apply to pay less in public transportation";
    }
    document.getElementById("if_else_statement").innerHTML=message;
}

//This function is an example about ELSE IF statement
function else_if(){
    var day = new Date().getDate();
    var message;
    if (day<=10){
        message="Have a nice firt part of the month";
    }else if(day>10 && day<=20 ){
        message="Have a nice second part of the month";
    }else{
        message="Have a nice end part of the month";
    }
    document.getElementById("else_if").innerHTML = message;
}

