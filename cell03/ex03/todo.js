
document.getElementById("newTodoBtn").addEventListener("click", function() {
    const todoText = prompt("Enter your new To Do:");

    if (todoText && todoText.trim() !== "") {
        const todoItem = document.createElement("div");
        todoItem.classList.add("todo-item");
        todoItem.textContent = todoText;

        
        todoItem.addEventListener("click", function() {
            if (confirm("Are you sure you want to delete this task?")) {
                todoItem.remove();
                updateCookies();
            }
        });

        
        document.getElementById("ft_list").insertBefore(todoItem, document.getElementById("ft_list").firstChild);

        updateCookies();
    }
});


function updateCookies() {
    const todos = [];
    const items = document.querySelectorAll(".todo-item");
    items.forEach(item => {
        todos.push(item.textContent);
    });
    document.cookie = "todos=" + JSON.stringify(todos) + "; path=/;";
}


function loadTodos() {
    const cookies = document.cookie.split("; ");
    const todosCookie = cookies.find(cookie => cookie.startsWith("todos="));
    if (todosCookie) {
        const todos = JSON.parse(todosCookie.split("=")[1]);
        todos.forEach(todo => {
            const todoItem = document.createElement("div");
            todoItem.classList.add("todo-item");
            todoItem.textContent = todo;

            
            todoItem.addEventListener("click", function() {
                if (confirm("Are you sure you want to delete this task?")) {
                    todoItem.remove();
                    updateCookies();
                }
            });

            
            document.getElementById("ft_list").insertBefore(todoItem, document.getElementById("ft_list").firstChild);
        });
    }
}


window.onload = loadTodos;

