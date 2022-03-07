const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
//const weather = document.querySelector('#weather');
const todoForm = document.querySelector('#todo-form');
//const quote = document.querySelector('#quote');

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function getZonInDay() {
  const date = new Date();
  const hours = date.getHours();

  if(hours < 12 ) {
    return 'Good Morning!';
  } else if ( hours < 18 ) {
    return 'Good Afternoon!';
  } else {
    return 'Good Evening!';
  }
}

function paintGreetings(username) {  
  greeting.classList.remove(HIDDEN_CLASSNAME);
  todoForm.classList.remove(HIDDEN_CLASSNAME);
  quote.classList.remove(HIDDEN_CLASSNAME);
  weather.classList.remove(HIDDEN_CLASSNAME);

  const zoneInDay = getZonInDay();
  greeting.innerText = `${zoneInDay} ${username}`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}