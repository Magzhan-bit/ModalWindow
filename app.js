const modal = document.getElementById("myModal");
const openButton = document.getElementById("openModal");
const closeButton = document.querySelector(".close");

openButton.addEventListener("click", () => modal.style.display = "block");
closeButton.addEventListener("click", () => modal.style.display = "none");

window.addEventListener("click", event => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});