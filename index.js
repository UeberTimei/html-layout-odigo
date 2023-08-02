(function () {
  const header = document.querySelector(".header");
  window.onscroll = () => {
    if (window.scrollY > 50) {
      header.classList.add("header_active");
    }
    if (window.scrollY < 50) {
      header.classList.remove("header_active");
    }
  };
})();

(function () {
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".header_nav");
  const menuClose = document.querySelector(".header_nav-close");

  burger.addEventListener("click", () => {
    menu.classList.add("header_nav_active");
  });

  menuClose.addEventListener("click", () => {
    menu.classList.remove("header_nav_active");
  });
})();
