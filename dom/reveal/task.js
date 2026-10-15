const revealElements = document.querySelectorAll('.reveal');

function checkReveal() {
  revealElements.forEach((element) => {
    const rect = element.getBoundingClientRect();

    if (rect.top < window.innerHeight && rect.bottom > 0) {
      element.classList.add('reveal_active');
    }
  });
}

window.addEventListener('scroll', checkReveal);
checkReveal();