document.addEventListener("DOMContentLoaded", function () {
    const inputField = document.getElementById("toDoInput");
    const addButton = document.querySelector(".button");
    const todoList = document.getElementById("todoList");
    const noTaskMessage = document.createElement("p");

    // Create "No task available" message
    noTaskMessage.classList.add("no-task");
    noTaskMessage.textContent = "No task available";
    todoList.appendChild(noTaskMessage);
    
    function checkForNoTasks() {
        const tasks = todoList.getElementsByTagName("li");
        if (tasks.length === 0) {
            todoList.appendChild(noTaskMessage);
        }
    }
    
    function createTaskItem(taskText) {
        // Remove "No Task Message" when a task is created
        if (todoList.contains(noTaskMessage)) {
            noTaskMessage.remove();
        }

        const listItem = document.createElement("li");

        // Create circular checkbox
        const checkbox = document.createElement("div");
        checkbox.classList.add("checkbox");
        checkbox.addEventListener("click", function () {
            checkbox.classList.toggle("checked");
            taskContent.classList.toggle("strike-through");
        });

        // Create task content
        const taskContent = document.createElement("span");
        taskContent.classList.add("task-content");
        taskContent.textContent = taskText;

        // Create task delete button
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-btn");
        deleteButton.innerHTML = `<i class="fas fa-trash fa-lg"></i>`;
        deleteButton.addEventListener("click", function () {
            listItem.remove();
            checkForNoTasks();
        });

        
        listItem.appendChild(checkbox);
        listItem.appendChild(taskContent);
        listItem.appendChild(deleteButton);

        // Append the list item to the todo list
        todoList.appendChild(listItem);

        checkForNoTasks();
    }


    // Add task using "Add" button
    addButton.addEventListener("click", function () {
        const taskText = inputField.value.trim();
        if (taskText) {
            createTaskItem(taskText);
            inputField.value = "";
        }
    });

    // Add task using "Enter" key
    inputField.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            const taskText = inputField.value.trim();
            if (taskText) {
                createTaskItem(taskText);
                inputField.value = "";
            }
        }
    });


    const deleteAllButton = document.createElement("button");
    deleteAllButton.classList.add("delete-all-btn");
    deleteAllButton.textContent = "Delete All";
    document.querySelector(".content").appendChild(deleteAllButton);

    deleteAllButton.addEventListener("click", function () {
        todoList.innerHTML = "";
        checkForNoTasks();
    });
});
