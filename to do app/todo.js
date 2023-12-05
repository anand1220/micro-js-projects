document.addEventListener('DOMContentLoaded', function () {
    // Load tasks from localStorage
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    displayTasks(tasks);

    document.getElementById('newTask').addEventListener('keyup', function (event) {
        // Add task on Enter key press
        if (event.key === 'Enter') {
            addTask();
        }
    });
});

function addTask() {
    const newTaskInput = document.getElementById('newTask');
    const taskText = newTaskInput.value.trim();

    if (taskText !== '') {
        const tasks = getTasks();
        tasks.push(taskText);
        saveTasks(tasks);
        displayTasks(tasks);
        newTaskInput.value = ''; // Clear the input field
    }
}

function editTask(index) {
    const tasks = getTasks();
    const editedTask = prompt('Edit task:', tasks[index]);

    if (editedTask !== null) {
        tasks[index] = editedTask.trim();
        saveTasks(tasks);
        displayTasks(tasks);
    }
}

function deleteTask(index) {
    const tasks = getTasks();
    tasks.splice(index, 1);
    saveTasks(tasks);
    displayTasks(tasks);
}

function displayTasks(tasks) {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = task;

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', () => editTask(index));

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => deleteTask(index));

        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);
    });
}

function getTasks() {
    return JSON.parse(localStorage.getItem('tasks')) || [];
}

function saveTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
