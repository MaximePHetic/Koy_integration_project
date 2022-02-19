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

const btnPanier = document.getElementById("my-basket");
const btnPanierIcon = document.getElementById("my-basket-icon");

btnPanier.addEventListener("mouseover", changeColors);
btnPanier.addEventListener("mouseout", deleteColors);

function changeColors() {
  btnPanierIcon.classList.add("is-hovering-basket");
}

function deleteColors () {
  btnPanierIcon.classList.remove("is-hovering-basket");
}



// const btnPanier = document.getElementsByClassName("btn-panier");
// btnPanier.addEventListener("click", changeColors);

// function changeColors() {
//   const hoverPanier = document.getElementsByClassName("panier-btn");
//   hoverPanier.classList.add("is-hovering-basket");
// }

// btnPanier.addEventListener("click", () => {
//   const hoverPanier = document.getElementsByClassName("panier-btn");
//   hoverPanier.classList.add("is-hovering-basket");
// });

// function changeColors() {
//   const hoverPanier = document.getElementsByClassName("panier-btn");
//   hoverPanier.classList.add("is-hovering-basket");
// }
