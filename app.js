const BUTTONS = document.querySelectorAll(".button");
const CARD_CONTAINER = document.querySelector(".card-container");

BUTTONS.forEach((button) => {
  button.textContent = "✔";
  button.addEventListener("click", (e) => {
    e.target.classList.toggle("white");
  });
});
