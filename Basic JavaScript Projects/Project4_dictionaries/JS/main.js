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