const items = ["candles", "decorations", "chocolate"];

const checklist = document.getElementById("checklist");
const input = document.getElementById("input");
const btnAdd = document.getElementById("btnAdd");
const btnDel = document.getElementById("btnDel");

function renderList() {
items.forEach(item => {
    checklist.innerHTML+=`<div class='checklist-item'>
    <input type="checkbox" id=${item} name=${item} value=${item}>
    <label class="strikethrough" for=${item}>${item}</label></div>`
    });
}

renderList();

function changeList() {
    checklist.innerHTML =  "<h1>Christmas Shopping List</h1>";
    input.value = "";
    renderList();
}

btnAdd.addEventListener("click",function() {
    items.push(input.value.toLowerCase());
    changeList();
})

btnDel.addEventListener("click", function(){
    let checkedItem = document.querySelectorAll("input[type=checkbox]:checked");
    for (let checked of checkedItem){
        let index = items.indexOf(checked.value);
        items.splice(index, 1);
    }
    changeList();
})