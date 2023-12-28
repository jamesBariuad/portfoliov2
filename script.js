const toggleMobileNav = ()=>{
    const mobileNav = document.getElementById("mobile-nav");
    const hamburgerMenu = document.getElementById("hamburger-menu")
    if (mobileNav.style.display === "none") {
        mobileNav.style.display = "block";
        hamburgerMenu.style.display = "none";
      } else {
        mobileNav.style.display = "none";
        hamburgerMenu.style.display = "block";
      }
}