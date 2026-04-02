const headerToggle = document.querySelector("#headerToggle");
const headNav = document.querySelector(".head_nav");

headerToggle.addEventListener("click", () => {
  headNav.classList.toggle("show");
});
