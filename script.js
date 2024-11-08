
  const menuIcon = document.querySelector(".menu-icon");
  const navbar = document.getElementById("navbar");

  menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });

