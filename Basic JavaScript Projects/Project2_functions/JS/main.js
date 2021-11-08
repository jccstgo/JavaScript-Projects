//This function display two variables concatenated
function displayAB(){
    var A = " This is variable A";
    var B = " This is variable B";
    document.getElementById("demo").innerHTML = A+B;
}

//This function use is an example about how to use the operator +=
function operatorConcat(){
    var sentence="This is the first part of the paragraph ";
    sentence += "AND this is the second part";
    document.getElementById("concatenate").innerHTML = sentence;
}