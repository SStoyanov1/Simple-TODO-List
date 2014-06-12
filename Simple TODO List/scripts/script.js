var onAddButton = document.getElementById('add-btn');
onAddButton.addEventListener('click', getTitleAndDescription, false);

var onDelButton = document.getElementById('del-btn');
onDelButton.addEventListener('click', deleteSelectedTasks, false);

var onShowHideButton = document.getElementById('show-hide-btn');
onShowHideButton.addEventListener('click', showHideTasks, false);

var wrapper = document.getElementById('wrapper');
var taskContainer = document.getElementById('task-container');
var addedTasks = document.getElementsByClassName('added-task');

function showHideTasks() {
    if (hasClass(taskContainer, 'hidden')) {
        wrapper.style.height = '620px';
        taskContainer.style.display = '';
        removeClass(taskContainer, 'hidden');
        onShowHideButton.innerHTML = 'Show';
    }
    else {
        wrapper.style.height = '300px';
        taskContainer.style.display = 'none';
        addClass(taskContainer, 'hidden');
        onShowHideButton.innerHTML = 'Hide';
    }
}

function deleteSelectedTasks() {
    var selectedTasks = document.getElementsByClassName('added-task selected');

    for (var i = 0, length = selectedTasks.length; i < length; i++) {
        while (selectedTasks[i]) {
            selectedTasks[i].parentNode.removeChild(selectedTasks[i]);
        }
    }
}

function getTitleAndDescription() {
    var inputTitle = document.getElementById('title-input').value;
    var inputDescription = document.getElementById("description-input").value;

    if (inputTitle) {
        var currentTitle = inputTitle;

        if (inputDescription) {
            var currentDescription = inputDescription;
            addNewTask(currentTitle, currentDescription);
        }
        else {
            addNewTask(currentTitle, '');
        }
    }
}

function addNewTask(currTitle, currentDescription) {
    var newTask = document.createElement('div');

    newTask.addEventListener('click', function () {
        if (hasClass(newTask, 'selected')) {
            removeClass(newTask, 'selected');
        }
        else {
            addClass(newTask, 'selected');
        }
    }, false);

    newTask.className = 'added-task';

    newTask.innerHTML = '<strong>' + currTitle + '</strong><br />';
    if (currentDescription != '') {
        newTask.innerHTML += currentDescription;
    }
    taskContainer.appendChild(newTask)
}

function hasClass(ele, cls) {
    return ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}

function addClass(ele, cls) {
    if (!this.hasClass(ele, cls)) ele.className += " " + cls;
    ele.className.replace(/ +/g, ' ');
}

function removeClass(ele, cls) {
    if (hasClass(ele, cls)) {
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        ele.className = ele.className.replace(reg, '');
    }
}