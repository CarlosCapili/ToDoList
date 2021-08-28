import Task from './TaskClass';

let taskArr = [];

//Use a module later!!! call it main
const saveBtn = document.querySelector("#save");
saveBtn.addEventListener("click", (e) => {
    const isEmpty = document.querySelector("#title").value;
    if (isEmpty !== "" && isEmpty.trim() !== "") {
        collectFormData();
    }
});

const list = document.querySelector(".list");
list.addEventListener("click", handleTask);

function handleTask(e) {
    console.log(e.target);
    if (e.target.id === "trash") {
        // console.log(e.target.parentNode.id);
        deleteTask(e.target.parentNode.id);
        deleteTaskUI(e.target.parentNode);
    } else if (e.target.parentNode.id === "trash") {
        deleteTask(e.target.parentNode.parentNode.id);
        deleteTaskUI(e.target.parentNode.parentNode);
    }
}

function collectFormData() {
    let title = document.querySelector("#title").value;
    let desc = document.querySelector("#description").value;
    let dueDate = document.querySelector("#date").value;

    //For DOM
    createNewTask(title, desc, dueDate);
    //For object
    const newTask = new Task(title, desc, dueDate);
    taskArr.push(newTask);
    console.log(taskArr);
    let form = document.querySelector(".create-task");
    form.reset();
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
    task.setAttribute("id", title);
    task.classList.add("task");

    const layoutHTML = `
        <input type="checkbox">
        <div class="taskTitle"><p>${title}</p></div>
        <div class="taskDate"><p>${dueDate}</p></div>
        <svg id="trash" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
        </svg>`;

    task.innerHTML = layoutHTML;
    list.appendChild(task);
}
