//This is an example about dictionary 
function animal(){
    var animal = {
        species:"Cat",
        color:"Yellow",
        breed:"unique",
        age:4,
        sound:"Meow!"
    };
    document.getElementById("animal").innerHTML = animal.sound;
}
//This is an example about have repeat the same key in a dictionary 
function dictionary(){
    var animal = {
        species:"Cat",
        color:"Black",
        color:"Yellow",
        breed:"unique",
        age:4,
        sound:"Meow!"
    };
    document.getElementById("dictionary").innerHTML = animal.color;
}
//This is an example about letete an element in a dictionary before show it
function delete_dictionary(){
    var animal = {
        species:"Cat",
        color:"Yellow",
        breed:"unique",
        age:4,
        sound:"Meow!"
    };
    delete animal.sound;
    document.getElementById("delete").innerHTML = animal.sound;
}