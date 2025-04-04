getInp = document.querySelector("#inp");
getList = document.querySelector("#unordered-list");
getTask = document.querySelector("#Task");

function Add() {
    if (getInp.value == '') {
        alert("Enter the Task First");
    } else {
        getTask.style.display = "block";
        getTask.innerHTML = `<h3>Tasks to do:</h3>`
        getList.innerHTML += `<li>${getInp.value} <button onclick="edit(this)" class="btn">Edit</button> <button onclick="del(this)" class="btn">Del</button></li> `
        getInp.value = '';
    }
}

function delAll() {
    getList.innerHTML = '';
}

function edit(e) {
    var editlist = prompt("Edit your Task", e.parentNode.firstChild.textContent);
    e.parentNode.firstChild.textContent = editlist;
}

function del(e) {
    e.parentNode.remove();
}