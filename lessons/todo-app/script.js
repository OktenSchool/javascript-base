const input = document.getElementById('todoInput')
const list = document.getElementById('todoList');
const addBtn = document.getElementById('addBtn');

let todos = JSON.parse(localStorage.getItem('todos')) || [];

function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function addTodo() {
    const value = input.value.trim();
    if (value) {
        todos.push(value);
        saveTodos()
        renderTodos()
        input.value = '';
    }
}


addBtn.addEventListener('click', addTodo);

input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        addTodo();
    }
});

function renderTodos() {
    list.innerHTML = '';
    for (let i = 0; i < todos.length; i++) {
        const todo = todos[i];
        const li = document.createElement('li');
        li.className = 'todo-item';
        li.innerHTML = `
            <span>${todo}</span>
            <button class="remove-btn" onclick="removeTodo(${i})">x</button>
        `;
        list.appendChild(li);

    }
}

function removeTodo(index) {
    todos.splice(index, 1);
    saveTodos();
    renderTodos();
}


renderTodos();









