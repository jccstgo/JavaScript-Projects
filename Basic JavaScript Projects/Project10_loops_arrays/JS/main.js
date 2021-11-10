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

//This function is an example about FOR loop
function for_loop(){
    var years = ["1980","1990","2000","2010","2020"];
    var text = "";
    var i;
    for(i=0;i<years.length;i++){
        text += years[i] + "<br>";
    }
    document.getElementById("for_loop").innerHTML = text;
}

