let todos = [];

function addTodo() {
    const todoText = document.getElementById('todoText').value;
    if (todoText.trim() !== "") {
        const newTodo = {
            id: Date.now(),
            text: todoText,
            completed: false
        };
        todos.push(newTodo);
        document.getElementById('todoText').value = "";  // Clear the input field
        renderTodos();
    }
}

function renderTodos() {
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = "";  // Clear current list

    todos.forEach(todo => {
        const li = document.createElement('li');
        li.className = todo.completed ? 'completed' : '';
        li.innerHTML = `
            <span>${todo.text}</span>
            <div>
                <button onclick="markAsRead(${todo.id})">${todo.completed ? 'Unread' : 'Read'}</button>
                <button onclick="editTodo(${todo.id})">Edit</button>
                <button onclick="deleteTodo(${todo.id})">Delete</button>
            </div>
        `;
        todoList.appendChild(li);
    });
}

function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    renderTodos();
}

function editTodo(id) {
    const newText = prompt("Edit your todo:");
    if (newText && newText.trim() !== "") {
        todos = todos.map(todo => todo.id === id ? { ...todo, text: newText } : todo);
        renderTodos();
    }
}

function markAsRead(id) {
    todos = todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo);
    renderTodos();
}
