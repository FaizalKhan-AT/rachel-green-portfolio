import data, { achievements } from "./data.js";
const cardContainer = document.querySelector(".work-card-container");
const achieveContainer = document.querySelector(".achieve-cards-container");
const nav = document.querySelector(".navbar");

document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("scroll", changeBg);
  displayWorks();
  displayAchievements();
});

const changeBg = () => {
  if (window.scrollY > 100) nav.classList.add("active");
  else nav.classList.remove("active");
};

const displayWorks = () => {
  let html = data
    .map((item) => {
      return `
        <div class="work-card">
          <div class="card-mark"></div>
          <div class="card-img">
            <img src=${item.img} alt=${item.title} />
          </div>
          <h3 class="card-title">${item.title}</h3>
          <div class="card-sub">
            ${item.desc}
          </div>
          <div class="card-link">SEE PROJECT</div>
        </div>
        `;
    })
    .join("");
  cardContainer.innerHTML = html;
};

const displayAchievements = () => {
  let html = achievements
    .map((item) => {
      return `
        <div class="achieve-card">
          <div class="card-bar"></div>
          <div class="card-content">${item}</div>
        </div>
        `;
    })
    .join("");
  achieveContainer.innerHTML = html;
};
