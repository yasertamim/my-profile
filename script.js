
  document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menu-sm");
    const dropdown = document.getElementById("dropdown-menu");

    menuButton.addEventListener("click", function () {
      dropdown.classList.toggle("hidden");
    });
  });

