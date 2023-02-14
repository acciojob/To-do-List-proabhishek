//your code here

const todo = document.getElementById("addTodoBtn");
const list = document.getElementById("todoList");

function addTodo() {
  var input = document.getElementById("newTodoInput");

  if(input.value) {
    var li = document.createElement("li");
    li.textContent = input.value;

    list.appendChild(li);

    input.value = "";
  }
}
todo.addEventListener('click', addTodo); 