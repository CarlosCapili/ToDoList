export default class Task {
    constructor(title, desc, dueDate = "No date") {
        this.title = title;
        this.desc = desc;
        this.dueDate = dueDate;

        console.log(title);
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
}