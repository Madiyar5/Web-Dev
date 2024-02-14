document.getElementById('addTaskButton').addEventListener('click', addTask);

document.getElementById('taskInput').addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    addTask();
  }
});

function addTask() {
  var taskInput = document.getElementById('taskInput');
  var taskText = taskInput.value.trim();

  if (taskText !== '') {
    var taskList = document.getElementById('taskList');
    var li = document.createElement('li');
    li.className = 'task';

    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'taskCheckbox';
    li.appendChild(checkbox);

    var taskTextNode = document.createElement('span');
    taskTextNode.className = 'taskText';
    taskTextNode.textContent = taskText;
    li.appendChild(taskTextNode);

    var trashIcon = document.createElement('i');
    trashIcon.className = 'fas fa-trash-alt deleteButton';
    li.appendChild(trashIcon);

    trashIcon.addEventListener('click', function() {
      li.remove();
    });

    taskList.appendChild(li);

    taskInput.value = '';
  }
}
