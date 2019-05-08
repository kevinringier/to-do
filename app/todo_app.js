
let taskId = 0;
const TASKS_DIV_ID = "tasks";

class Task {
    constructor(taskName) {
        this.taskId = taskId;
        this.taskName = taskName;
        this.isComplete = false;
        taskId++;
    }

    setIsComplete() {
        this.isComplete = true;
    }
}

let tasks = [];

let createTask = function(taskName) {
    let newTask = new Task(taskName);
    tasks.push(newTask);
}

let getActiveTasks = function() {
    return tasks.filter(task => task.isComplete == false);
}

let getCompleteTasks = function() {
    return tasks.filter(task => task.isComplete == true);
}

function createTaskElements(taskArray, divId) {
    taskArray.forEach(element => {
        taskElement = document.createElement("P");
        taskElement.innerText = element.taskName;
        taskElement.id = element.taskId ;
        document.getElementById(divId).appendChild(taskElement);
    });
}

function removeElementsFromDiv(divId) {
    var parentDiv = document.getElementById(divId);
    
    while(parentDiv.firstChild) {
        parentDiv.removeChild(parentDiv.firstChild);
    }
}

// testing stuff
document.getElementById("task_Form_Btn").addEventListener('click', function() {
    let taskForm = document.forms["taskForm"]
    let taskName = taskForm.elements["taskInput"].value;
    
    createTask(taskName);
    removeElementsFromDiv(TASKS_DIV_ID);
    createTaskElements(tasks, TASKS_DIV_ID);
});

document.getElementById("all_btn").addEventListener('click', function() {
    removeElementsFromDiv(TASKS_DIV_ID);
    createTaskElements(tasks, TASKS_DIV_ID);
});

document.getElementById("active_btn").addEventListener('click', function() {
    removeElementsFromDiv(TASKS_DIV_ID);
    createTaskElements(getActiveTasks(), TASKS_DIV_ID);
});

document.getElementById("completed_btn").addEventListener('click', function() {
    removeElementsFromDiv(TASKS_DIV_ID);
    createTaskElements(getCompleteTasks(), TASKS_DIV_ID);
});


 