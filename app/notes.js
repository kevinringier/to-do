

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
