// Typing animation for code block
const codeBlock = document.querySelector('.code-animation pre');
let codeText = codeBlock.textContent;
let index = 0;

function typeCode() {
  codeBlock.textContent = codeText.substring(0, index++);
  if (index <= codeText.length) {
    setTimeout(typeCode, 50);
  } else {
    index = 0;
    setTimeout(typeCode, 2000);
  }
}
setTimeout(typeCode, 2000);

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Highlight active nav item
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-menu ul li a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});



