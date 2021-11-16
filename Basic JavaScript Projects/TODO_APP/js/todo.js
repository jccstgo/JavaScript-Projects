/*Function gets the task from input*/
function get_todos(){
    var todos = new Array;
    var todos_str = localStorage.getItem('todo');
    if(todos_str !== null){
        todos = JSON.parse(todos_str);
    }
    return todos;
}

/* Function adds the inputed task to the get_todos function array */
function add() { 
    var task = document.getElementById('task').value;
    var todos = get_todos();
    todos.push(task);
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById('task').value = "";
    show();
    return false;
 }
/* Functino keeps the tasks permanetly display on the screen */
 function show(){
     var todos = get_todos();
     var html = '<ul>';
     for(var i=0; i<todos.length; i++){
        html += '<li>' + todos[i] + '<button class="remove" id="'+ i + '">x</button></li>';
     };
     html += '</ul>';
     //Display the task as a list
     document.getElementById('todos').innerHTML = html;

     var buttons = document.getElementsByClassName('remove');
     for(var  i=0; i<buttons.length; i++){
         buttons[i].addEventListener('click',remove);
     };
 }

 function remove(){
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id,1);
    localStorage.setItem('todo', JSON.stringify(todos));
    show();
    
    return false;
}

//this displays the inputed task when the Add Item button is clicked
 document.getElementById('add').addEventListener('click', add);
 show();