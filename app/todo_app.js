
let taskId = 0;

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

/////////////////////////////
//GET CREATE A TASK//////////
/////////////////////////////
let createTask = new function(taskName) {
    let newTask = Task(taskName);
    tasks.push(newTask);
}

/////////////////////////////
//ALL TASKS//////////////////
/////////////////////////////
let tasks = [];

/////////////////////////////
//GET ACTIVE TASKS///////////
/////////////////////////////
let getActiveTasks = new function() {
    return tasks.filter(task => task.isComplete == false);
}

/////////////////////////////
//GET COMPLETE TASKS/////////
/////////////////////////////
let getCompleteTasks = new function() {
    return tasks.filter(task => task.isComplete == true);
}

/////////////////////////////
//REMOVE ALL TASKS///////////
/////////////////////////////

