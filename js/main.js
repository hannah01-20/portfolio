(function () {
  "use strict";

  const navToggle = document.querySelector(".nav__toggle");
  const navMenu = document.querySelector(".nav__menu");
  const navLinks = document.querySelectorAll(".nav__link");
  const sections = document.querySelectorAll("section[id]");
  const revealElements = document.querySelectorAll(".reveal");

  /* Mobile nav toggle */
  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
      const isOpen = navMenu.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        navMenu.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* Smooth scroll for anchor links */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (event) {
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const target = document.querySelector(targetId);
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    });
  });

  /* Active nav highlight on scroll */
  function setActiveNavLink() {
    const scrollPos = window.scrollY + 100;

    let currentSection = "";
    sections.forEach(function (section) {
      if (scrollPos >= section.offsetTop) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach(function (link) {
      link.classList.remove("is-active");
      if (link.getAttribute("href") === "#" + currentSection) {
        link.classList.add("is-active");
      }
    });
  }

  window.addEventListener("scroll", setActiveNavLink, { passive: true });
  setActiveNavLink();

  /* Scroll reveal via IntersectionObserver */
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    revealElements.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    revealElements.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }
})();
