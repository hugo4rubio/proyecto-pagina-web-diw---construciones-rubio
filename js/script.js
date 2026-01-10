document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("nav_hamburguer");
  const nav = document.getElementById("nav");

  btn.addEventListener("click", () => {
    nav.classList.toggle("activate");
  });
});
