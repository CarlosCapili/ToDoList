import createNewTask from './createNewTask';
import Task from './TaskClass';

let taskArr = [];

//Use a module later!!!
const saveBtn = document.querySelector("#save");
saveBtn.addEventListener("click", (e) => {
    // e.preventDefault();
    const isEmpty = document.querySelector("#title").value;
    const title = document.querySelector("#title").required = true;
    if (isEmpty !== "" && isEmpty.trim() !== "") {
        collectFormData();
    }
  
});


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
    console.log("hehehehe");
    let form = document.querySelector(".create-task");
    form.reset();
}