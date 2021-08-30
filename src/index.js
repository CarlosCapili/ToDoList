import Task from './TaskClass';

let taskArr = [];

//Use a module later!!! call it main
const saveBtn = document.querySelector("#save");
saveBtn.addEventListener("click", (e) => {
    const taskTitle = document.querySelector("#title").value;
    if (taskTitle !== "" && taskTitle.trim() !== "") {
        let taskIndex = findTask(taskTitle);
        if (taskIndex < 0) {
            collectFormData();
        } else {
            alert("Task updated and saved");
            editTaskInfo(taskIndex);
            updateTaskUI(taskIndex);
        }
        let form = document.querySelector(".create-task");
        form.reset();
    }

});

//Select Task, notes, or projects
//Default should be tasks
const taskBtn = document.getElementById("task");
const notesBtn = document.getElementById("notes");
const projBtn = document.getElementById("projects");



const list = document.querySelector(".list");
list.addEventListener("click", handleTask);

function handleTask(e) {
    console.log(e.target);

    //div is used when trash svg is clicked
    //div2 is used when the svg path is clicked
    const div = e.target.parentNode;
    const div2 =  e.target.parentNode.parentNode;

    if (e.target.id === "trash") {
        deleteTask(div.id);
        deleteTaskUI(div);
    } else if (e.target.parentNode.id === "trash") {
        deleteTask(div2.id);
        deleteTaskUI(div2);
    } else if (e.target.type === "checkbox") {
        const index = findTask(div.id);
        taskArr[index].toggleCompleted();
        console.log(taskArr);
    } else if (e.target.className === "title") {
        const index = findTask(div2.id);
        loadTaskInfo(index);
    }
}

function updateTaskUI(index) {
    let task = taskArr[index];
    console.log(task.getTitle());
    let taskDiv = document.getElementById(`${task.getTitle()}`).childNodes;
    taskDiv[5].textContent = task.getDueDate();
}

function editTaskInfo(index) {
    let task = taskArr[index];
    let title = document.querySelector("#title").value;
    let desc = document.querySelector("#description").value;
    let dueDate = document.querySelector("#date").value;

    task.setTitle(title);
    task.setDesc(desc);
    task.setDueDate(dueDate);
}

function loadTaskInfo(index) {
    let task = taskArr[index];
    let title = document.querySelector("#title");
    let desc = document.querySelector("#description");
    let dueDate = document.querySelector("#date");

    title.value = task.getTitle();
    desc.value = task.getDesc();
    dueDate.value = task.getDueDate();
}

function collectFormData() {
    let title = document.querySelector("#title").value;
    let desc = document.querySelector("#description").value;
    let dueDate = document.querySelector("#date").value;
    addTask(title, desc, dueDate);
  
}

function addTask(title, desc, dueDate) {
  //For DOM
  createNewTask(title, desc, dueDate);
  //For object
  const newTask = new Task(title, desc, dueDate);
  taskArr.push(newTask);
  console.log(taskArr);
}

function deleteTask(e) {
    let taskIndex = findTask(e);
    // console.log(`taskindex is ${taskIndex}`);
    taskArr.splice(taskIndex,1);
    console.log(taskArr);
}

function deleteTaskUI(e) {
    e.remove();
}

function findTask(title) {
    return taskArr.findIndex(task => task.title === title);
}

function createNewTask(title, desc, dueDate) {
    const task = document.createElement("div");

    //Set the id of the div to the title of the task
    task.setAttribute("id", title);
    task.classList.add("task");

    const layoutHTML = `
        <input type="checkbox">
        <div class="taskTitle"><p class="title">${title}</p></div>
        <div class="taskDate">${dueDate}</div>
        <svg id="trash" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
        </svg>`;

    task.innerHTML = layoutHTML;
    list.appendChild(task);  
}

function saveList() {
    let tasks = [];

    for (let i=0; i<taskArr.length; i++) {
        let task = taskArr[0];
        let taskInfo = {
            "title": task.getTitle(),
            "desc": task.getDesc(),
            "date": task.getDueDate(),
            "isDone": task.getCompleted()
        };
        tasks.push(taskInfo);
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadList() {
    if (localStorage.getItem("tasks") != null) {
        let tasks = JSON.parse(localStorage.getItem("tasks"));
        for (let i=0; i<tasks.length; i++) {
            let task = tasks[i];
            addTask(task.title, task.desc, task.date, task.isDone);
        }
    }
}

loadList();