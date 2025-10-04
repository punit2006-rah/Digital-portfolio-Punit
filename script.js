// ===== Hamburger Menu =====
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// ===== Animate Skills on Scroll =====
const skillCards = document.querySelectorAll(".skill-card");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

skillCards.forEach(card => {
  observer.observe(card);
});

