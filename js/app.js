// Portfolio — Mame Gnilane FAYE
// JavaScript vanilla (aucun framework, aucun module)

(function () {
  "use strict";

  // ---------- Navigation : état scrolled + menu mobile ----------
  var nav = document.getElementById("nav");
  var navToggle = document.getElementById("navToggle");
  var navLinks = document.getElementById("navLinks");

  function onScroll() {
    nav.classList.toggle("scrolled", window.scrollY > 30);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  navToggle.addEventListener("click", function () {
    navToggle.classList.toggle("open");
    navLinks.classList.toggle("open");
  });

  navLinks.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () {
      navToggle.classList.remove("open");
      navLinks.classList.remove("open");
    });
  });

  // ---------- Reveal au scroll ----------
  var revealObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );
  document.querySelectorAll(".reveal").forEach(function (el) {
    revealObserver.observe(el);
  });

  // ---------- Animation des barres de compétences ----------
  var skillObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          skillObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );
  document.querySelectorAll(".skill").forEach(function (el) {
    skillObserver.observe(el);
  });

  // ---------- Année du footer ----------
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---------- Validation du formulaire de contact ----------
  var form = document.getElementById("contactForm");
  if (!form) return;

  var status = document.getElementById("formStatus");

  function showError(name, msg) {
    var input = form.querySelector('[name="' + name + '"]');
    var err = form.querySelector('.field__error[data-for="' + name + '"]');
    if (err) err.textContent = msg;
    if (input) input.classList.toggle("invalid", Boolean(msg));
  }

  function isEmail(v) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var data = new FormData(form);
    var name = (data.get("name") || "").trim();
    var email = (data.get("email") || "").trim();
    var message = (data.get("message") || "").trim();
    var ok = true;

    showError("name", name.length < 2 ? "Veuillez entrer votre nom." : "");
    if (name.length < 2) ok = false;

    showError("email", !isEmail(email) ? "Email invalide." : "");
    if (!isEmail(email)) ok = false;

    showError("message", message.length < 10 ? "Message trop court (10 caractères min)." : "");
    if (message.length < 10) ok = false;

    if (!ok) {
      status.style.color = "var(--error)";
      status.textContent = "Veuillez corriger les champs en rouge.";
      return;
    }

    status.style.color = "var(--accent)";
    status.textContent = "Merci ! Votre message a été envoyé avec succès.";
    form.reset();
  });
})();
