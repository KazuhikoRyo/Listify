document.getElementById('add-btn').addEventListener('click', addTask);
document.getElementById('todo-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskInput = document.getElementById('todo-input');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskList = document.getElementById('todo-list');

        const listItem = document.createElement('li');
        listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
        listItem.textContent = taskText;

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'btn btn-danger btn-sm';
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', function () {
            taskList.removeChild(listItem);
        });

        listItem.appendChild(deleteBtn);
        taskList.appendChild(listItem);

        taskInput.value = '';
        taskInput.focus();
    }
}
