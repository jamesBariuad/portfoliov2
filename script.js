const toggleMobileNav = () => {
  const mobileMenu = document.getElementById("mobile-menu");
  const hamburgerMenu = document.getElementById("hamburger-menu");

  if (mobileMenu.style.display === "none") {
    mobileMenu.style.display = "block";
    hamburgerMenu.style.display = "none";
    document.body.style.overflow = "hidden";
  } else {
    mobileMenu.style.display = "none";
    hamburgerMenu.style.display = "block";
    document.body.style.overflow = "auto";
  }
};
