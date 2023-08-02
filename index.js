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
