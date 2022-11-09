"use strict";
const formEl = document.getElementById("Form-list");
const inputEl = document.getElementById("list");
const displayareaEl = document.getElementById("display");

const submit = document.getElementById("submit");
let items = [];

let isEditing = false;
let editId = null;

//function
function displayUi() {
  displayareaEl.innerHTML = null;
  if (items.length > 0) {
    items.forEach((item) => {
      const listEl = document.createElement("li");
      listEl.classList.add("list_item");
      listEl.innerHTML = `${item.value}&emsp;&emsp;<button class="dlt_dtn" 
            onclick="deleteli(${item.id})"> <i class="fa-solid fa-trash"></i></button>&emsp; &emsp; 
            <button class='update' onclick="edting(${item.id})"><i class="fa-solid fa-scissors"></button>`;
      displayareaEl.appendChild(listEl);
    });
  }
  isEditing = false;
  editId = null;
  inputEl.value = null;
}

function deleteli(id) {
  items = items.filter((item) => item.id !== id);
  displayUi();
}

function edting(id) {
  const inedit = items.find((item) => item.id === id);
  inputEl.value = inedit.value;
  editId = id;
  isEditing = true;
}

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  if (inputEl.value) {
    if (isEditing) {
      items = items.map((item) => {
        if (item.id === editId) {
          return { ...item, value: inputEl.value };
        } else {
          return item;
        }
      });
      displayUi();
    } else {
      {
        const item = {
          id: new Date().valueOf(),
          value: inputEl.value,
        };
        items.push(item);
        displayUi();
      }
    }
  } else {
    alert("Enter a Item Name");
  }
});

//<i class="fa-solid fa-scissors"></i>
