export default function createNewTask(title, desc, dueDate) {
    const task = document.createElement("div");
    task.classList.add("task");
    task.textContent = title;

    const list = document.querySelector(".list");
    list.appendChild(task);
}
