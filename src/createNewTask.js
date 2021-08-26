export function createNewTask(title, desc, dueDate) {
    const task = document.createElement("div");

    console.log("MADE IT HERE!");

    return task;
}

export function loadNewTask() {
    const list = document.querySelector(".list");
    list.append(createNewTask());
}