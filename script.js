function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

/* ANIMAÇÃO AO ROLAR */
const elements = document.querySelectorAll(".fade-in, .slide-up");

function checkScroll() {
  const trigger = window.innerHeight * 0.85;

  elements.forEach(el => {
    const rect = el.getBoundingClientRect().top;
    if (rect < trigger) {
      el.style.animationPlayState = "running";
    }
  });
}

window.addEventListener("scroll", checkScroll);
checkScroll();
