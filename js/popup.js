"use strick";

const setting = document.querySelector('#setting');
//const logoutBtn = document.querySelector("#logout");

function showPopup(hasFilter) {
  const popup = document.querySelector("#popup-wrap");

  if (hasFilter) {
    popup.classList.add("has-filter");
  } else {
    popup.classList.remove("has-filter");
  }
  popup.classList.remove("hide");
}

setting.addEventListener("click", showPopup);

const yesBtn = document.querySelector(".yes");
const noBtn = document.querySelector(".no");

function closePopup() {
  const popup = document.querySelector("#popup-wrap");
  popup.classList.add("hide");
}

function userLogout() {
  localStorage.clear();
  // url 변경필요
  location.replace("../index.html");
}

yesBtn.addEventListener("click", userLogout);
noBtn.addEventListener("click", closePopup);
