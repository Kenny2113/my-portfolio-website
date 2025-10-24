/* ===== TYPING ANIMATION ===== */
const text = ["Cloud Engineer", "DevOps Engineer", "AWS Specialist"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === text.length) {
    count = 0;
  }
  currentText = text[count];
  letter = currentText.slice(0, ++index);

  document.querySelector("h3").textContent = letter;

  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 2000);
  } else {
    setTimeout(type, 150);
  }
})();

/* ===== SCROLL REVEAL EFFECT ===== */
window.addEventListener("scroll", reveal);

function reveal() {
  const reveals = document.querySelectorAll(
    "#about, #skills, #projects, #certifications, #contact"
  );

  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

/* ===== ADD SMOOTH SCROLL ===== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

/* ===== DARK/LIGHT MODE TOGGLE ===== */
const themeToggle = document.getElementById("theme-icon");
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "light") {
  document.body.classList.add("light-mode");
  themeToggle.textContent = "🌙";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {
    themeToggle.textContent = "🌙"; // dark icon
    localStorage.setItem("theme", "light");
  } else {
    themeToggle.textContent = "☀️"; // light icon
    localStorage.setItem("theme", "dark");
  }
});
