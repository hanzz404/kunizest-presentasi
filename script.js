document.addEventListener("DOMContentLoaded", () => {
  // 1. Sticky Navbar Effect & Background Change on Scroll
  const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // 2. Mobile Hamburger Menu Toggle
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const navItems = document.querySelectorAll(".nav-links li a");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    // Ganti icon hamburger ke close (optional)
    const icon = hamburger.querySelector("i");
    if (navLinks.classList.contains("active")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-times");
    } else {
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
    }
  });

  // Tutup menu mobile ketika salah satu link diklik
  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      if (navLinks.classList.contains("active")) {
        navLinks.classList.remove("active");
        hamburger.querySelector("i").classList.remove("fa-times");
        hamburger.querySelector("i").classList.add("fa-bars");
      }
    });
  });

  // 3. Scroll Reveal Animation via Intersection Observer
  const animateElements = document.querySelectorAll(".animate");

  const observerOptions = {
    root: null, // viewport
    threshold: 0.15, // trigger ketika 15% elemen terlihat
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        // Optional: Stop observing setelah animasi berjalan agar tidak berulang
        // observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  animateElements.forEach((el) => {
    observer.observe(el);
  });
});
