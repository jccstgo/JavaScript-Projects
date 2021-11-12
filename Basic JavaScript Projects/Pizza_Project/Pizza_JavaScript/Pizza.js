//The button Place Order call this function to get the size of the Pizza an get the price
function getReceipt(){
    var text1="<h3>You Ordered:</h3>";
    var runningTotal=0;
    var sizeTotal=0;
    var sizeArray = document.getElementsByClassName("size");
    for(var i=0; i<sizeArray.length; i++){
        if(sizeArray[i].checked){
            var selectedSize = sizeArray[i].value;
            text1 = text1+selectedSize+"<br>";
        }
    }
    //Select the size of the pizza
    if(selectedSize === "Personal Pizza"){
        sizeTotal=6;
    } else if(selectedSize === "Medium Pizza"){
        sizeTotal=10;
    }else if(selectedSize === "Large Pizza"){
        sizeTotal=14;
    }else if(selectedSize === "Extra Large Pizza"){
        sizeTotal=16;
    }else if(selectedSize === "Super Big Pizza"){
        sizeTotal=20;
    }
    //The price selected depends on the size of the pizza
    runningTotal=sizeTotal;
    console.log(selectedSize+"= $"+sizeTotal+".00");
    console.log("size text1: "+text1);
    console.log("subtotal: $"+runningTotal+".00");
    //Get the quantity topping and calculate the Total Price
    getTopping(runningTotal,text1);
};

//This function get the toppings elements to calculate the total amount to pay 
function getTopping(runningTotal, text1){
    var toppingTotal = 0;
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName("toppings");
    for(var j = 0; j<toppingArray.length; j++){
        if(toppingArray[j].checked){
            selectedTopping.push(toppingArray[j].value);
            console.log("selected topping item: ("+toppingArray[j].value+")");
            text1 = text1+toppingArray[j].value+"<br>";
        }
    }
    var toppingCount = selectedTopping.length;
    //When the toppingCount is 1 or less the price doesn't change otherwise add 1 to Total Amount for each topping 
    if(toppingCount>1){
        toppingTotal = (toppingCount-1);
    }else{
        toppingTotal=0;
    }
    //Calculate the Total amount to pay
    runningTotal = (runningTotal+toppingTotal);
    console.log("total selected topping items: "+toppingCount);
    console.log(toppingCount+" toping -1 free topping = "+"$"+toppingTotal+".00");
    console.log("topping text1: "+text1);
    console.log("Purschase Total: "+"$"+runningTotal+".00");
    //Print the elements in the order and the total amount to pay
    document.getElementById("showText").innerHTML=text1;
    document.getElementById("totalPrice").innerHTML="<h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
}


