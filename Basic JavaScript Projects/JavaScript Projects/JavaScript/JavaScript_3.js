//This function is an example about SWITCH in JavaScript
function displayType(character){
    var characterType = character.getAttribute("data-character-type");
    alert(characterType + " --> " + character.innerHTML + " in Star Wars ");
}