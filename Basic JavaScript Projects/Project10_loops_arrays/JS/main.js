//This function is an example about WHILE in JavaScript
function loop(){
    var x=10;
    var text="";
    while(x>=1){
        text += "<br>"+x;
        x--;
    }
    document.getElementById("loop").innerHTML = text;
}

//This function is an example about LENGTH in JavaScript
function length_text(){
    var text="Jose Carlos";
    document.getElementById("length_text").innerHTML = text.length;
}

//This function is an example about FOR loop in JavaScript
function for_loop(){
    var years = ["1980","1990","2000","2010","2020"];
    var text = "";
    var i;
    for(i=0;i<years.length;i++){
        text += years[i] + "<br>";
    }
    document.getElementById("for_loop").innerHTML = text;
}

//This function is an example about ARRAY in JavaScript
function array_function(){
    var car_action =[];
    var text = "";
    var i;
    car_action[0] = "start";
    car_action[1] = "stop";
    car_action[2] = "run";
    car_action[3] = "turn";
    for (i=0;i<car_action.length; i++){
        text += car_action[i]+"<br>";
    }
    document.getElementById("array").innerHTML = text;
}


//This function is an example about ARRAY in JavaScript
function constant_function(){
    const cat = {name:"Garfield",color:"orange"};
    cat.name = "Sylvester";
    cat.weight =20;
    document.getElementById("constant").innerHTML = "The cat "+cat.name+" is sleeping and its weight is: "+cat.weight+" lb";
}

//This function is an example about LET KEYWORD in JavaScript
function let_keyword(){
    var x=" ONE";
    var text = x+" <br>";
    {
        let x=" THREE ";
        text += x;
    }
    document.getElementById("let_keyword").innerHTML = text+"<br>"+x;
}

//This function is an example about RETURN in JavaScript
function return_function(){
    var date = new Date().getDate();
    return date;
}

function button_return(){
    text = return_function();
    document.getElementById("button_return").innerHTML = "The month date is: "+text;
}

//This function is an example about OBJECTS in JavaScript
function car_object(){
    let car = {
        model:"Ibiza",
        color:"Blue",
        maximum_speed:"200km/h",
        mpg:"15",
        move:function(){
            return "START-->RUN"; 
        },
        stop:function(){
            return "STOP-->OFF";
        }
    };
    document.getElementById("car_object").innerHTML = car.model+" move: "+car.move()+" and stop:"+car.stop();
}

//This function is an example about BREAK in JavaScript
function break_statement(){
    var i;
    var text="";
    for(i=0;i<11;i++){        
        if(i==5){            
            break;
        }
        text += i+"<br>";
    }
    document.getElementById("break_statement").innerHTML = text;
}

//This function is an example about CONTINUE in JavaScript
function continue_statement(){
    var i;
    text="";
    for(i=0;i<11;i++){
        if(i==5){            
            continue;
        }     
        text += i+"<br>";  
    }
    document.getElementById("continue_statement").innerHTML = text;
}