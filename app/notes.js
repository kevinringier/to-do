

let taskTest = {
    isComplete: false,
    taskName: 'No Task'
};

let task2 = {
    hi: true
};

let testObject = Object.assign({}, taskTest, task2);

console.log(testObject);


// tasks.forEach(task => {
//     console.log(task);
// });

// let testTask = Object.create(task, { test: {value: 'test'}});

// console.log(testTask);


class task {
    constructor(isComplete, taskName) {
        this.isComplete = isComplete;
        this.taskName = taskName;
    }

    get getIsComplete() {
        return 
    }

    set setIsComplete(value) {
        this.isComplete = value;
    }
}


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