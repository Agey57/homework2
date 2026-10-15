const rotators = document.querySelectorAll('.rotator');

rotators.forEach((rotator) => {
  const cases = rotator.querySelectorAll('.rotator__case');
  let index = 0;

  const showCase = (i) => {
    cases.forEach((item) => item.classList.remove('rotator__case_active'));

    const current = cases[i];
    current.classList.add('rotator__case_active');

    if (current.dataset.color) {
      current.style.color = current.dataset.color;
    }

    const speed = Number(current.dataset.speed) || 1000;

    setTimeout(() => {
      index = (index + 1) % cases.length;
      showCase(index);
    }, speed);
  };

  showCase(index);
});