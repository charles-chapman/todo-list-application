
//this is your database (stores locally) start with this code first//
function get_todos() {

	var todos = new Array;

	var todos_str = localStorage.getItem('todo') ;

	if (todos_str != null) {
        // json.parse is used to convert the json string to javascript//
		todos = JSON.parse(todos_str);
	}

	return todos;
}

//the add function-allow us to place numberous task onto list///
function add() {

	var task = document.getElementById('task').value;

	var todos = get_todos();

	todos.push(task);

	localStorage.setItem('todo', JSON.stringify(todos));

	show();

	return false;
}

// this function allow us to delete task from list//
function remove() {

	var id = this.getAttribute('id');

	var todos = get_todos();

	todos.splice(id, 1);

	localStorage.setItem('todo', JSON.stringify(todos));

	show();

	return false;
}

//display task of the list upon adding them, as well as insert a button for removal as need//
function show() {

	var todos = get_todos();

	var html = '<ul>';

	for(var i=0; i<todos.length; i++) {

		html += '<li>' + todos[i] +'<button class="remove" id="' + i +'">DONE</button></li>';
	};

	html += '</ul>';

	document.getElementById('todos').innerHTML = html;

	var buttons = document.getElementsByClassName('remove');

	for (var i=0; i < buttons.length; i++) {

		buttons[i].addEventListener('click', remove);
	};
}

    document.getElementById('task').addEventListener('click', add);

show();