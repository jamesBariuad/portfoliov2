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

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Web Developer", "Copy Paster", "Pro Googler"];
const typingDelay = 50;
const erasingDelay = 50;
const newTextDelay = 1000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});
