const nav = document.querySelector(".header-nav");
const toggleNav = () => nav.classList.toggle("active");

const closeNav = () => {
  if (nav.classList.contains("active")) {
    nav.classList.remove("active");
  }
};
document.addEventListener("click", (e) => {
  const navContainer = e.target.closest(".header-nav");
  const nav = e.target.closest(".nav-main");
  const navButton = e.target.closest(".nav-toggle");

  if ((!nav && navContainer) || navButton) {
    toggleNav();
  }
});

window.addEventListener("resize", (e) => {
  if (window.innerWidth >= 820 && nav.classList.contains("active")) {
    closeNav();
  }
});
