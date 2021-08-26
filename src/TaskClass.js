export default class Task {
    constructor(title, desc, priority, dueDate = "No date") {
        this.title = title;
        this.desc = desc;
        this.priority = priority;
        this.dueDate = dueDate;
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

    getPriority() {
        return this.priority;
    }
    setPriority(newPriority) {
        this.priority = newPriority;
    }

    getDesc() {
        return this.desc;
    }
    setDesc(newDesc) {
        this.desc = newDesc;
    }

}