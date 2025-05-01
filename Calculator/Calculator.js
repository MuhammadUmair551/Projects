function Clicking(e){
    var accessBtn = document.getElementById("inpp");
    accessBtn.value += e;
}
function clr(){
    var accessBtn = document.getElementById("inpp");
    accessBtn.value = accessBtn.value.slice(0,-1);
}
function clrall(){
    var accessBtn = document.getElementById("inpp");
    accessBtn.value = '';
}
function equ(){
    var accessBtn = document.getElementById("inpp");
    accessBtn.value = eval(accessBtn.value);
}
