const hero = document.querySelector(".hero");
const heroGlows = document.querySelectorAll(".hero-glow");
const revealTargets = document.querySelectorAll(".reveal");

if (hero && heroGlows.length) {
  hero.addEventListener("pointermove", (event) => {
    const rect = hero.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    heroGlows[0].style.transform = `translate(${x * 32}px, ${y * 22}px)`;
    heroGlows[1].style.transform = `translate(${x * -28}px, ${y * -18}px)`;
  });
}

if (revealTargets.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  revealTargets.forEach((target) => observer.observe(target));
}
