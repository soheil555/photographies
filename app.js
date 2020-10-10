const burger = document.querySelector(".burger");
const navUl = document.querySelector("ul");
const links = navUl.querySelectorAll("a");

burger.addEventListener("click", () => {
  navUl.classList.toggle("nav-open");
  burger.classList.toggle("toggle");
});

links.forEach(link => {
  link.addEventListener("click", () => {
    navUl.classList.toggle("nav-open");
    burger.classList.toggle("toggle");
  });
});
