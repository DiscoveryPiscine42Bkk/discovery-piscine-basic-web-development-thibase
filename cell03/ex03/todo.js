// ฟังก์ชันเพื่อเพิ่มรายการใหม่
document.getElementById("newTodoBtn").addEventListener("click", function() {
    const todoText = prompt("Enter your new To Do:");

    if (todoText && todoText.trim() !== "") {
        const todoItem = document.createElement("div");
        todoItem.classList.add("todo-item");
        todoItem.textContent = todoText;

        // เพิ่มฟังก์ชันให้ลบรายการ
        todoItem.addEventListener("click", function() {
            if (confirm("Are you sure you want to delete this task?")) {
                todoItem.remove();
                updateCookies();
            }
        });

        // เพิ่มรายการใหม่เข้าไปที่ด้านบนสุด
        document.getElementById("ft_list").insertBefore(todoItem, document.getElementById("ft_list").firstChild);

        updateCookies();
    }
});

// ฟังก์ชันเพื่ออัพเดต cookie เมื่อรายการถูกเพิ่มหรือลบ
function updateCookies() {
    const todos = [];
    const items = document.querySelectorAll(".todo-item");
    items.forEach(item => {
        todos.push(item.textContent);
    });
    document.cookie = "todos=" + JSON.stringify(todos) + "; path=/;";
}

// ฟังก์ชันเพื่อโหลดรายการ To-Do จาก cookie
function loadTodos() {
    const cookies = document.cookie.split("; ");
    const todosCookie = cookies.find(cookie => cookie.startsWith("todos="));
    if (todosCookie) {
        const todos = JSON.parse(todosCookie.split("=")[1]);
        todos.forEach(todo => {
            const todoItem = document.createElement("div");
            todoItem.classList.add("todo-item");
            todoItem.textContent = todo;

            // เพิ่มฟังก์ชันให้ลบรายการ
            todoItem.addEventListener("click", function() {
                if (confirm("Are you sure you want to delete this task?")) {
                    todoItem.remove();
                    updateCookies();
                }
            });

            // เพิ่มรายการใหม่เข้าไปที่ด้านบนสุด
            document.getElementById("ft_list").insertBefore(todoItem, document.getElementById("ft_list").firstChild);
        });
    }
}

// โหลดรายการ To-Do เมื่อหน้าเว็บถูกโหลด
window.onload = loadTodos;
