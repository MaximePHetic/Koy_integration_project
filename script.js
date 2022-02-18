const toggleButton = document.getElementById("toggle-button");
const sideBar = document.getElementById("side-bar");

toggleButton.addEventListener("click", show);

function show() {
  sideBar.classList.toggle("active");
}

// REMOVE SIDEBAR IF CLICK ON THE MAIN CONTENT
const content = document.querySelector(".content");
content.addEventListener("click", () => {
  sideBar.classList.remove("active");
});

const btnPanier = document.getElementsByClassName("btn-panier");

btnPanier.addEventListener("click", changeColors);

function changeColors() {
  const hoverPanier = document.getElementsByClassName("panier-btn");
  hoverPanier.classList.add("is-hovering-basket");
}
