const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const tasksCounter = document.getElementById("tasks-counter");

let taskCount = parseInt(localStorage.getItem("TODO-COUNT") || 0);

const displayCount = (taskCount) => {
    tasksCounter.innerText = taskCount;
};

function addTask() {
    if (inputBox.value === "") {
        alert("Please write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        taskCount += 1;
        console.log(taskCount);
        displayCount(taskCount);
    }
    // taskCount += 1;
    // displayCount(taskCount);
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener(
    "click",
    function (e) {
        if (e.target.tagName === "LI") {
            e.target.classList.toggle("checked");
            saveData();
        } else if (e.target.tagName === "SPAN") {
            e.target.parentElement.remove();
            if (taskCount != 0) taskCount -= 1;
            console.log(taskCount);
            displayCount(taskCount);
            saveData();
        }
    },
    false
);

function saveData() {
    localStorage.setItem("TODO-COUNT", taskCount);
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTasks() {
    listContainer.innerHTML = localStorage.getItem("data");
    displayCount(localStorage.getItem("TODO-COUNT") || 0);
}
showTasks();

// console.log('Working');
