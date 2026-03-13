export function smoothScrollToElement(element, duration = 750, onComplete, navHeight = 140) {
  if (!element) return;
  const rect = element.getBoundingClientRect();
  const targetY = window.scrollY + rect.top - navHeight;
  const startY = window.scrollY;
  const distance = targetY - startY;

  if (Math.abs(distance) < 1) {
    if (onComplete) onComplete();
    return;
  }

  const startTime = performance.now();

  function ease(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }

  function step(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, startY + distance * ease(progress));
    if (progress < 1) {
      requestAnimationFrame(step);
    } else if (onComplete) {
      onComplete();
    }
  }

  requestAnimationFrame(step);
}
