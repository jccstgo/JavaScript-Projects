//This function is an example about SWITCH in JavaScript
function number_function(){
    var number_print="";
    var number = document.getElementById("number_input").value;
    var text = " is the number that you choose";
    switch(number){
        case "1":
            number_print = "1";
            break;
        case "2":
            number_print = "1";
            break;
        case "3":
            number_print = "3";
            break;
        case "4":
            number_print = "4";
            break;
        case "5":
            number_print = "5";
            break;
        default:
            text = "Select only one of the numbers in the list";
    }
    document.getElementById("number_function").innerHTML = number_print + text;
}

//This function is an example about GET ELEMENTS BY CLASS NAME in JavaScript
function elementByClassName(){
    var buton = document.getElementsByClassName("click");
    buton[1].innerHTML = "The text has changed!";
}

//This function is an example about CANVAS in JavaScript
function canvas(){
    var element = document.getElementById("canvas_element");
    var x = element.getContext("2d");
    x.beginPath();
    x.arc(95,50,40,0,2*Math.PI);
    x.stroke();    
}

//This function is an example about GRADIENT in JavaScript
function gradient(){
    var element = document.getElementById("gradient_element");
    var x = element.getContext("2d");
    var gradient = x.createLinearGradient(0, 0, 0, 170);
    gradient.addColorStop(0, "black");
    gradient.addColorStop(1, "white");
    x.fillStyle = gradient;
    x.fillRect(20, 20, 150, 150);
}