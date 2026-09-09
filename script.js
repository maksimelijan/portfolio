(() => {
  const header = document.querySelector('.site-header');
  if (!header) return;

  let lastY = window.pageYOffset || document.documentElement.scrollTop || 0;
  let ticking = false;

  // Более медленная и мягкая анимация без резкого исчезновения.
  header.style.transition = 'transform 0.65s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.65s ease';
  header.style.willChange = 'transform, opacity';

  function getScrollY() {
    return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  }

  function handleScroll() {
    const y = getScrollY();
    const delta = y - lastY;

    if (y <= 5) {
      header.style.transform = 'translate3d(0, 0, 0)';
      header.style.opacity = '1';
      header.style.pointerEvents = 'auto';
    } else if (delta > 2) {
      header.style.transform = 'translate3d(0, -110%, 0)';
      header.style.opacity = '0';
      header.style.pointerEvents = 'none';
    } else if (delta < -2) {
      header.style.transform = 'translate3d(0, 0, 0)';
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
