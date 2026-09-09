(() => {
  const header = document.querySelector('.site-header');
  if (!header) return;

  let lastY = window.pageYOffset || document.documentElement.scrollTop || 0;
  let ticking = false;

  header.style.transition = 'transform 0.25s ease, opacity 0.25s ease';
  header.style.willChange = 'transform, opacity';

  function getScrollY() {
    return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  }

  function handleScroll() {
    const y = getScrollY();
    const delta = y - lastY;

    if (y <= 5) {
      header.style.transform = 'translateY(0)';
      header.style.opacity = '1';
      header.style.pointerEvents = 'auto';
    } else if (delta > 2) {
      header.style.transform = 'translateY(-110%)';
      header.style.opacity = '0';
      header.style.pointerEvents = 'none';
    } else if (delta < -2) {
      header.style.transform = 'translateY(0)';
      header.style.opacity = '1';
      header.style.pointerEvents = 'auto';
    }

    lastY = y;
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(handleScroll);
      ticking = true;
    }
  }, { passive: true });
})();
