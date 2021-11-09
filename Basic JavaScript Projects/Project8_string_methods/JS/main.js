//This function is an example about CONCAT method
function concat_method(){
    var part_1="This is - ";
    var part_2="a paragraph constructed ";
    var part_3="- whit the method CONCAT";
    var parte_final=part_1.concat(part_2,part_3);
    document.getElementById("concat_method").innerHTML = parte_final;
}

//This function is an example about SLICE method
function slice_method(){
    var name = "Jose Carlos Cruz Santiago";
    var last_name = name.slice(12,16);
    document.getElementById("slice_method").innerHTML=last_name;
}

//This function is an example about UPPERCASE method
function uppercase_method(){
    var name = "Jose Carlos Cruz Santiago";
    var uppercase_name = name.toUpperCase();
    document.getElementById("uppercase_method").innerHTML=uppercase_name;
}

//This function is an example about SEARCH method
function search_method(){
    var name = "Jose Carlos Cruz Santiago";
    var search = name.search("Cruz");
    document.getElementById("search_method").innerHTML=search;
}

//This function is an example about TOSTRING method
function number_method(){
    var number = 3;
    document.getElementById("number_method").innerHTML=number.toString();
}

//This function is an example about TOPRECISION method
function presicion_method(){
    var number=123456.7890;
    document.getElementById("presicion_method").innerHTML = number.toPrecision(7);
}

//This function is an example about TOFIXED method for transform Int to String rounding the result
function fixed_method(){
    var number=123456.7890;
    document.getElementById("fixed_method").innerHTML = number.toFixed(3);
}

//This function is an example about VALUEOF 
function valueof_method(){
    var name="Jose Carlos Cruz Santiago";
    document.getElementById("valueof_method").innerHTML = name.valueOf();
}