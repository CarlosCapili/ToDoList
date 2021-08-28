export default class Task {
    constructor(title, desc, dueDate = "No date") {
        this.title = title;
        this.desc = desc;
        this.dueDate = dueDate;
        this.completed = false;
    }

    getTitle() {
        return this.title;
    }
    setTitle(newTitle) {
        this.title = newTitle;
    }

    getDueDate() {
        return this.dueDate;
    }
    setDueDate(newDueDate) {
        this.dueDate = newDueDate;
    }

    getDesc() {
        return this.desc;
    }
    setDesc(newDesc) {
        this.desc = newDesc;
    }

    getCompleted() {
        return this.completed;
    }
    toggleCompleted() {
        this.completed = !this.completed;
    }
}