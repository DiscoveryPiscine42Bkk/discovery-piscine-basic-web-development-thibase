$('#newTodoBtn').click(function() {
    const todoText = prompt("Enter your new To Do:");
    if (todoText && todoText.trim() !== "") {
        const todoItem = $('<div class="todo-item"></div>').text(todoText);
        todoItem.click(function() {
            if (confirm("Are you sure you want to delete this task?")) {
                $(this).remove();
            }
        });
        $('#ft_list').prepend(todoItem);
    }
});
