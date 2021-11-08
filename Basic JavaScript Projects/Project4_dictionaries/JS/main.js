function dictionary(){
    var animal = {
        species:"Cat",
        color:"Yellow",
        breed:"unique",
        age:4,
        sound:"Meow!"
    };
    document.getElementById("dictionary").innerHTML = animal.sound;
}