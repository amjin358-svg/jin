const categoryBackgrounds = {
  "index.html": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2200&q=80",
  "about.html": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=2200&q=80",
  "services.html": "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=2200&q=80",
  "industries.html": "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=2200&q=80",
  "news.html": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=2200&q=80",
  "contact.html": "https://images.unsplash.com/photo-1485217988980-11786ced9454?auto=format&fit=crop&w=2200&q=80",
  "mls-map.html": "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=2200&q=80"
};

const heroHeader = document.querySelector(".hero-header");
const navLinks = document.querySelectorAll(".top-nav ul a");

if (heroHeader && navLinks.length) {
  const pathName = window.location.pathname.split("/").pop() || "index.html";
  const defaultImage = categoryBackgrounds[pathName] || categoryBackgrounds["index.html"];

  const applyImage = (imageUrl) => {
    heroHeader.style.setProperty("--hero-image", `url("${imageUrl}")`);
  };

  applyImage(defaultImage);

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    const targetImage = categoryBackgrounds[href];
    if (!targetImage) {
      return;
    }

    link.addEventListener("mouseenter", () => {
      applyImage(targetImage);
    });

    link.addEventListener("focus", () => {
      applyImage(targetImage);
    });
  });

  const navBar = document.querySelector(".top-nav ul");
  if (navBar) {
    navBar.addEventListener("mouseleave", () => {
      applyImage(defaultImage);
    });
  }
}
