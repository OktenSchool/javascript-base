const input = document.getElementById('todoInput');
const list = document.getElementById('todoList');
const addBtn = document.getElementById('addBtn');

let todos = JSON.parse(localStorage.getItem('todos')) || [];

function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function renderTodos() {
    list.innerHTML = '';
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.className = 'todo-item';
        li.innerHTML = `
          <span>${todo}</span>
          <button class="remove-btn" onclick="removeTodo(${index})">x</button>
        `;
        list.appendChild(li);
    });
}

function addTodo() {
    const value = input.value.trim();
    if (value) {
        todos.push(value);
        input.value = '';
        saveTodos();
        renderTodos();
    }
}

function removeTodo(index) {
    todos.splice(index, 1);
    saveTodos();
    renderTodos();
}

input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        addTodo();
    }
});

addBtn.addEventListener('click', addTodo);

renderTodos();
