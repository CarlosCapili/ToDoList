import { loadNewTask, createNewTask } from './createNewTask';

//Use a module later!!!

const saveBtn = document.querySelector("#save");
saveBtn.addEventListener("click", collectFormData);


//Add priority level!!
function collectFormData() {
    let title = document.querySelector("#title");
    let desc = document.querySelector("#description");
    let dueDate = document.querySelector("#date").value;

    createNewTask(title, desc, dueDate);
}