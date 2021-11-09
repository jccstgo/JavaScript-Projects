//This is an example about ternary operators
function ride(){
    var height, can_ride;
    height = document.getElementById("height").value;
    can_ride = (height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("ride").innerHTML = can_ride + " to ride.";
}

//This is an example about ternary operators for votations
function vote(){
    var age, can_vote;
    age = document.getElementById("age").value;
    can_vote = (age < 18) ? "You are not old enough to vote":"You can vote!";
    document.getElementById("vote").innerHTML = can_vote;
}

//This is an example about THIS and CONSTRUCTOR
function vehicle(make,model,year,color){
    this.vehicle_make=make;
    this.vehicle_model=model;
    this.vehicle_year=year;
    this.vehicle_color=color;
}

var jose = new vehicle("Dodge","Viper",2020,"Red");
var carlos = new vehicle("Jeep","Trail",2019,"Black");
var santiago = new vehicle("Ford","Focus",2021,"Green");

function key_constructor(){
    document.getElementById("key_constructor").innerHTML = "Jose drives a "+jose.vehicle_color+
    "-colored "+jose.vehicle_model+" manufactured in "+jose.vehicle_year;
}

function another_key(){
    document.getElementById("new_key_this").innerHTML = "Carlos drives a "+carlos.vehicle_color+
    "-colored "+carlos.vehicle_model+" manufactured in "+carlos.vehicle_year;
}


var reserved_word = true;

//Constructor function for city objects
function city(name,lacation,population){
    this.city_name = name;
    this.city_lacation = lacation;
    this.city_population = population;
}


//Create a city
var city_A = new city("Ecuador","Centroamerica","100,000");

//Display the name of the city
function buton_city(){
    document.getElementById("city").innerHTML = "The name of the city is: "+ city_A.city_name;
}
