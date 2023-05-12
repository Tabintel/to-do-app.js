const input = document.getElementById('input');
const addButton = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

addButton.addEventListener('click', addTask);

function addTask() {
  const task = input.value;
  if (task === '') {
    alert('Please enter a task!');
    return;
  }
  
  const taskItem = document.createElement('li');
  taskItem.innerText = task;
  
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', completeTask);
  taskItem.appendChild(checkbox);
  
  const deleteButton = document.createElement('span');
  deleteButton.innerHTML = '&times;';
  deleteButton.classList.add('delete');
  deleteButton.addEventListener('click', deleteTask);
  taskItem.appendChild(deleteButton);
  
  taskList.appendChild(taskItem);
  
  input.value = '';
}

function completeTask() {
  const taskItem = this.parentElement;
  if (this.checked) {
    taskItem.classList.add('completed');
  } else {
    taskItem.classList.remove('completed');
  }
}

function deleteTask() {
  const taskItem = this.parentElement;
  taskList.removeChild(taskItem);
}