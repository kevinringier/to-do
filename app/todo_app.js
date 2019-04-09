// setup
var idCounter = 0;


class Task {
    constructor(taskName) {
        this.id = idCounter;
        this.taskName = taskName;
        this.isComplete = false;
    }

    setIsComplete() {
        this.isComplete = true;
    }
}

let tasks = [];

function addTask(tasks, task) {
    tasks.push(task);
}

let testTask = new Task("Wash House");

addTask(tasks, testTask);

console.log(tasks);

//------------------------------------------
// execution

function addTask() {
    idCounter++;
    let taskInput = document.getElementById("taskInput").value;
    tasks.push(new Task(taskInput));
    tasks.forEach(task => console.log(task));

    tasks.forEach(task => {
        let newElement = document.createElement('p');
        newElement.id = task.id;
        newElement.innerHTML = task.taskName;
        document.body.appendChild(newElement);
    });
}

var para = document.createElement("p");
var node = document.createTextNode(testTask.taskName);
para.appendChild(node);

var element = document.getElementById("tasks");
element.appendChild(para);  