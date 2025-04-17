var getInp = document.querySelector("#inp-name");
var getList = document.querySelector("#unordered-list");
var getItemsHeading = document.querySelector("#Item-heading");
var getItemPrice = document.querySelector("#inp-price");
var getTotal = document.querySelector("#total-div");

let price = [];

function Add() {
    if (getInp.value.trim() === '' || getItemPrice.value.trim() === '') {
        alert("Fill both the field first");
    }
    else {
        price.push({name:getInp.value, price: parseFloat(getItemPrice.value)});
        getItemsHeading.style.display = "block";
        getItemsHeading.innerHTML = `<h3>Your Items:</h3><br><p>Items, Price</p>`;
        getInp.value = '';
        getItemPrice.value = '';
        updateTotal();
        updateList();
    }
}

function updateList(){
    getList.innerHTML = '';

    price.forEach(function(item, index){
        getList.innerHTML += `<li>${item.name} ${item.price} <button onclick="del(this,${index})" class="btn"><i class="fa-solid fa-minus"></i></button></li>`
    })
    getItemsHeading.style.display = price.length ? "block" : "none";
}

function updateTotal() {
    let sum = price.reduce(function (acc, item) {
        return acc + item.price;
    }, 0);
    getTotal.innerHTML = `<h3 style="color: rgb(55, 54, 54); font-weight: lighter;">Total: ${sum}</h3>`;
}

function delAll() {
    getList.innerHTML = '';
    getItemsHeading.style.display = "none";
    getTotal.innerHTML = "Total: 0";
    price = [];
    updateTotal();
}

function del(e, index) {
    e.parentNode.remove();
    price = price.filter((_,i ) => i !== index);
    updateTotal();
    updateList();
}