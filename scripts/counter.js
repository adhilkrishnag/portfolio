export function initCounters() {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const countElements = document.querySelectorAll("[data-counter-target]");

  if (prefersReducedMotion) {
    countElements.forEach(el => {
      el.textContent = el.getAttribute("data-counter-target");
    });
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateValue(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  countElements.forEach(el => observer.observe(el));
}

function animateValue(element) {
  const targetStr = element.getAttribute("data-counter-target");
  const numMatch = targetStr.match(/([0-9.]+)/);
  if (!numMatch) {
    element.textContent = targetStr;
    return;
  }

  const targetNum = parseFloat(numMatch[1]);
  const prefix = targetStr.substring(0, numMatch.index);
  const suffix = targetStr.substring(numMatch.index + numMatch[0].length);
  const isFloat = numMatch[1].includes(".");
  
  const duration = 1200;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easeProgress = 1 - Math.pow(1 - progress, 3);
    const currentVal = (targetNum * easeProgress);

    const formattedVal = isFloat ? currentVal.toFixed(1) : Math.floor(currentVal);
    element.textContent = prefix + formattedVal + suffix;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      element.textContent = targetStr;
    }
  }

  requestAnimationFrame(update);
}
