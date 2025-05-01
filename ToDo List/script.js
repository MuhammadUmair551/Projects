var getInp = document.querySelector("#inp");
var getList = document.querySelector("#unordered-list");
var getTask = document.querySelector("#Task");

function Add() {
    if (getInp.value == '') {
        alert("Enter the Task First");
    } else {

        var storedTask = JSON.parse(localStorage.getItem("Task")) || [];

        var obj = {
            Task: getInp.value
        }

        storedTask.push(obj);
        localStorage.setItem("Task", JSON.stringify(storedTask));

        getTask.style.display = "block";
        getList.innerHTML += `<li>${getInp.value} <button onclick="edit(this)" class="btn">Edit</button> <button onclick="del(this)" class="btn">Del</button></li> `
        getTask.innerHTML = `<h3>Tasks to do:</h3>`
        getInp.value = '';
    }
}

window.onload = function () {
    var storedTasks = JSON.parse(localStorage.getItem("Task")) || [];
    if (storedTasks.length > 0) {
        getTask.style.display = "block";
        getTask.innerHTML = `<h3>Tasks to do:</h3>`;
    }
    storedTasks.forEach(function (item) {
        getList.innerHTML += `<li>${item.Task} <button onclick="edit(this)" class="btn">Edit</button></li>`;
    });
}


function delAll() {
    getList.innerHTML = '';
    localStorage.removeItem("Task")
    storedTasks = [];
}

function edit(e) {
    var editlist = prompt("Edit your Task", e.parentNode.firstChild.textContent);
    e.parentNode.firstChild.textContent = editlist;
}