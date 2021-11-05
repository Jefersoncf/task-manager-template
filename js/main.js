let buttonAdd = document.querySelector('#btnAdd'); 
const inputTask = document.querySelector('#form12')

const addTask = document.querySelector('.task-list');

function checkTask (taskLi){
    taskLi.classList.add('done')
}

function createTask(task){
    const li = document.createElement('li');
    li.setAttribute('class', 'task-item');

    const imgclose = document.createElement('img');
    imgclose.setAttribute('src','/icons/close.png');

    const imgCheck = document.createElement('img');
    imgCheck.setAttribute('src','/icons/check.png');

    imgCheck.onclick = () => {
        checkTask(li)
    }

    const p = document.createElement('p');
    p.textContent = task;

    li.appendChild(imgclose);
    li.appendChild(p);
    li.appendChild(imgCheck);

    addTask.appendChild(li);
}
buttonAdd.onclick = () => {
    const newTask = inputTask.value;

    createTask(newTask);

    inputTask.value = "";

    alert(newTask);
}


