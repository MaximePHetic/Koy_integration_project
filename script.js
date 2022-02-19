// burger menu
const toggleButton = document.getElementById("toggle-button");
const sideBar = document.getElementById("side-bar");

toggleButton.addEventListener("click", show);

function show() {
  sideBar.classList.toggle("active");
}

// remove sidebar if click on the main content
const content = document.querySelector(".content");
content.addEventListener("click", () => {
  sideBar.classList.remove("active");
});

// hovering basket button
const btnPanier = document.getElementById("my-basket");
const btnPanierIcon = document.getElementById("my-basket-icon");

btnPanier.addEventListener("mouseover", changeColors);
btnPanier.addEventListener("mouseout", deleteColors);

function changeColors() {
  btnPanierIcon.classList.add("is-hovering-basket");
}

function deleteColors() {
  btnPanierIcon.classList.remove("is-hovering-basket");
}
