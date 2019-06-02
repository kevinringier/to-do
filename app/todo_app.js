
let taskId = 0;
const TASK_FORM = "taskForm";
const TASKS_DIV_ID = "tasks";
const ADD_TASK = "add_task";
const ALL_TASKS = "all_tasks";
const ACTIVE_TASKS = "active_tasks";
const COMPLETED_TASKS = "completed_tasks";
const CLEAR_COMPLETED_TASKS = "clear_completed"
let currentFilter = ALL_TASKS;

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

function clearCompleteTasks() {
    removeElementsFromDiv(TASKS_DIV_ID);
    tasks = tasks.filter(task => task.isComplete == false);
    createTaskElements(filterTasks(currentFilter), TASKS_DIV_ID);
}

function filterTasks(filter) {
    switch(filter) {
        case ALL_TASKS:
            return tasks;
        case ACTIVE_TASKS:
            return getActiveTasks();
        case COMPLETED_TASKS:
            return getCompleteTasks();
    }
}

function createTaskElements(taskArray, parentElementId) {
    taskArray.forEach(element => {
        taskElement = document.createElement("P");
        taskElement.innerText = element.taskName;
        taskElement.id = element.taskId ;
        document.getElementById(parentElementId).appendChild(taskElement);
    });
}

function removeElementsFromDiv(parentElementId) {
    var parentDiv = document.getElementById(parentElementId);
    
    while(parentDiv.firstChild) {
        parentDiv.removeChild(parentDiv.firstChild);
    }
}

document.getElementById(TASK_FORM).addEventListener('submit', (e) => {
    e.preventDefault();

    let taskForm = document.forms[TASK_FORM]
    let taskInput = taskForm.elements["taskInput"];
    
    createTask(taskInput.value);
    removeElementsFromDiv(TASKS_DIV_ID);
    createTaskElements(filterTasks(currentFilter), TASKS_DIV_ID);
    taskInput.value = '';
});

document.getElementById(ALL_TASKS).addEventListener('click', function() {
    removeElementsFromDiv(TASKS_DIV_ID);
    createTaskElements(tasks, TASKS_DIV_ID);
    currentFilter = ALL_TASKS;
});

document.getElementById(ACTIVE_TASKS).addEventListener('click', function() {
    removeElementsFromDiv(TASKS_DIV_ID);
    createTaskElements(getActiveTasks(), TASKS_DIV_ID);
    currentFilter = ACTIVE_TASKS;
});

document.getElementById(COMPLETED_TASKS).addEventListener('click', function() {
    removeElementsFromDiv(TASKS_DIV_ID);
    createTaskElements(getCompleteTasks(), TASKS_DIV_ID);
    currentFilter = COMPLETED_TASKS;
});

document.getElementById(TASKS_DIV_ID).addEventListener('click', function(event) {
    if (event.target && event.target.nodeName == 'P') {
        tasks.find(element => element.taskId == event.target.id).setIsComplete();
        removeElementsFromDiv(TASKS_DIV_ID);
        createTaskElements(filterTasks(currentFilter), TASKS_DIV_ID);
    }
});

document.getElementById(CLEAR_COMPLETED_TASKS).addEventListener('click', function() {
    clearCompleteTasks();
});