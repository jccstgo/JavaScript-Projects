window.alert("Hello, World!");
document.write("Hello World!");


//This is an example about use fontcolor
var A = " This is a string";
var A = A.fontcolor("blue");
document.write(A);


var B="This is the Assignment Step 49";
var B = B.fontcolor("blue");
window.alert(B);

document.write(A+B);


//This is an example about concatenated
document.write("\"<br> This an example of backslash\"  and\\or"+ " <br> \"Example don\'t\" <br>");

//This is an example about print variables
var C = "This string is"+"concatenated <br>";
var C = C.fontcolor("green");
document.write(C);

//This is an example about variables
var a="a",b="b",c="c";
var b = b.fontcolor("red");
document.write(b+"<br>");

//This is an example about expresions
document.write(2+3+"<br>");

function displayDate(){
    document.getElementById("demo").innerHTML = Date();
}


