import pageLoad from "./page-load";
import home from "./tabs/home";
import contact from "./tabs/contact";
import menu from "./tabs/menu";
import "./style.css";

const parentNode = document.querySelector("#content");

function addClick() {
  const anchors = document.querySelectorAll("a");

  anchors.forEach((link) => {
    link.addEventListener("click", tabSwitching);
  });
}

function tabSwitching(e) {
  switch (e.target.textContent) {
    case "home":
      home();
      break;

    case "menu":
      menu();
      break;

    case "contact":
      contact();
      break;
  }
}

function init() {
  pageLoad(parentNode);
  addClick();
}

init();
