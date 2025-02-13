import "./styles.css";
import { createMenuPage } from "./menu.js";
import { createHomePage } from "./home.js";
import { createAboutPage } from "./about.js";

const content = document.getElementById("content");
const homeBtn = document.getElementById("homeBtn");
const menuBtn = document.getElementById("menuBtn");
const aboutBtn = document.getElementById("aboutBtn");

function updateActiveTab(activeButton) {
  const buttons = document.querySelectorAll("nav button"); // Get all buttons
  buttons.forEach((button) => button.classList.remove("active")); // Remove 'active' from all
  activeButton.classList.add("active"); // Add 'active' to the clicked button
}

function loadPage(page) {
  content.innerHTML = "";
  content.appendChild(page);
}

loadPage(createHomePage());

// Wait for the DOM to be fully loaded before adding event listeners and loading content
document.addEventListener("DOMContentLoaded", () => {
  loadPage(createHomePage()); // Load the initial page
  updateActiveTab(homeBtn);

  homeBtn.addEventListener("click", () => {
    loadPage(createHomePage());
    updateActiveTab(homeBtn);
  });

  menuBtn.addEventListener("click", () => {
    loadPage(createMenuPage());
    updateActiveTab(menuBtn);
  });

  aboutBtn.addEventListener("click", () => {
    loadPage(createAboutPage());
    updateActiveTab(aboutBtn);
  });
});
