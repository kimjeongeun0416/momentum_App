const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function completeToDo(event) {
  const parent = event.target.parentNode;

  toDos[toDos.findIndex((todo) => todo.id == parent.id)].complete = true;
  paintComplete(parent);
  saveToDos();
}

function paintComplete(parent) {
  const text = parent.querySelector('span');
  text.style.textDecorationLine = 'line-through';
}

function paintCancle(parent) {
  const text = parent.querySelector('span');
  text.style.textDecorationLine = 'none';
}

function paintToDo(text, completed) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const delBtn = document.createElement("button");
  const comBtn = document.createElement("button");
  const newId = toDos.length + 1;

  delBtn.innerText = "➖";
  delBtn.addEventListener('click', deleteToDo);
  comBtn.innerText = "✔";
  comBtn.addEventListener('click', completeToDo);
  span.innerText = text;

  li.appendChild(comBtn);
  li.appendChild(delBtn);
  li.appendChild(span);

  li.id = newId;
  toDoList.appendChild(li);

  const toDoObj = {
    text: text,
    id: newId,
    complete: completed,
  };
  toDos.push(toDoObj);
  saveToDos();
  if ( completed ) {
    comBtn.click();}
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(function(toDo) {
    paintToDo(toDo.text, toDo.complete);
  });
}