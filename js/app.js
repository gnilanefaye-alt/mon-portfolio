/* ════════════════════════════════════════════════════════════════════════════
   PORTFOLIO — JAVASCRIPT
   - Injection des données (compétences, projets)
   - Menu mobile (hamburger)
   - Navigation : scroll fluide + section active
   - Animation des barres de compétences au scroll
   - Validation du formulaire de contact
   ════════════════════════════════════════════════════════════════════════════ */

   (function () {
    'use strict';
  
    /* ─── DONNÉES ─────────────────────────────────────────────────────────────── */
  
    const SKILLS = [
      { label: 'HTML / CSS3',    level: 90, icon: 'code' },
      { label: 'JavaScript',     level: 80, icon: 'terminal' },
      { label: 'React',          level: 75, icon: 'layers' },
      { label: 'SQL / Supabase', level: 65, icon: 'database' },
      { label: 'Git / GitHub',   level: 70, icon: 'git' },
      { label: 'UI / UX Design', level: 60, icon: 'palette' },
    ];
  
    const ICONS = {
      code: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
      terminal: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>',
      layers: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>',
      database: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 5v14c0 1.66-4 3-9 3s-9-1.34-9-3V5"/></svg>',
      git: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9v3a2 2 0 0 1-2 2H8"/></svg>',
      palette: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>',
    };
  
    const PROJECTS = [
      {
        title: 'Portfolio Personnel',
        description: "Site portfolio responsive construit avec HTML sémantique, CSS3 et JavaScript. Inclut un formulaire de contact avec validation côté client.",
        tags: ['HTML', 'CSS3', 'JavaScript'],
        image: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=600',
        github: '#projets',
        demo: '#projets',
      },
      {
        title: 'Application Météo',
        description: "Application web qui affiche les prévisions météo en temps réel via une API publique. Interface claire et responsive.",
        tags: ['JavaScript', 'API REST', 'CSS Grid'],
        image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
        github: '#projets',
        demo: '#projets',
      },
      {
        title: 'Dashboard Analytics',
        description: "Tableau de bord interactif de visualisation de données avec graphiques dynamiques et filtres en temps réel.",
        tags: ['React', 'Tailwind', 'Supabase'],
        image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600',
        github: '#projets',
        demo: '#projets',
      },
      {
        title: 'E-Commerce UI',
        description: "Interface complète d'une boutique en ligne avec panier, filtres produits et page de commande responsive.",
        tags: ['React', 'CSS3', 'JavaScript'],
        image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
        github: '#projets',
        demo: '#projets',
      },
    ];
  
    /* ─── INJECTION DES COMPÉTENCES ────────────────────────────────────────────── */
  
    function renderSkills() {
      const container = document.getElementById('skills-grid');
      if (!container) return;
  
      container.innerHTML = SKILLS.map(skill => `
        <div class="skill-item">
          <div class="skill-header">
            <span class="skill-label">${ICONS[skill.icon] || ''}${skill.label}</span>
            <span class="skill-percent">${skill.level}%</span>
          </div>
          <div class="skill-track" role="progressbar" aria-valuenow="${skill.level}" aria-valuemin="0" aria-valuemax="100" aria-label="${skill.label} : ${skill.level}%">
            <div class="skill-fill" data-level="${skill.level}"></div>
          </div>
        </div>
      `).join('');
    }
  
    /* ─── INJECTION DES PROJETS ────────────────────────────────────────────────── */
  
    function renderProjects() {
      const container = document.getElementById('projects-grid');
      if (!container) return;
  
      container.innerHTML = PROJECTS.map(project => `
        <article class="project-card">
          <div class="project-img-wrap">
            <img src="${project.image}" alt="Capture d'écran du projet ${project.title}" loading="lazy" />
            <div class="project-overlay">
              <a href="${project.demo}" class="project-btn" aria-label="Voir la démo de ${project.title}">↗ Démo</a>
              <a href="${project.github}" class="project-btn project-btn--ghost" aria-label="Code source de ${project.title}">⌥ Code</a>
            </div>
          </div>
          <div class="project-body">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-desc">${project.description}</p>
            <ul class="project-tags" aria-label="Technologies utilisées">
              ${project.tags.map(tag => `<li class="tag">${tag}</li>`).join('')}
            </ul>
          </div>
        </article>
      `).join('');
    }
  
    /* ─── MENU MOBILE (HAMBURGER) ──────────────────────────────────────────────── */
  
    function initMobileMenu() {
      const toggle = document.getElementById('menu-toggle');
      const navList = document.getElementById('nav-list');
      if (!toggle || !navList) return;
  
      toggle.addEventListener('click', function () {
        const isOpen = navList.classList.toggle('nav-list--open');
        toggle.classList.toggle('menu-toggle--open', isOpen);
        toggle.setAttribute('aria-label', isOpen ? 'Fermer le menu' : 'Ouvrir le menu');
        toggle.setAttribute('aria-expanded', String(isOpen));
      });
  
      // Fermer le menu quand on clique sur un lien
      navList.querySelectorAll('.nav-link').forEach(function (link) {
        link.addEventListener('click', function () {
          navList.classList.remove('nav-list--open');
          toggle.classList.remove('menu-toggle--open');
          toggle.setAttribute('aria-expanded', 'false');
        });
      });
  
      // Fermer le menu si on clique en dehors
      document.addEventListener('click', function (e) {
        if (!navList.contains(e.target) && !toggle.contains(e.target) && navList.classList.contains('nav-list--open')) {
          navList.classList.remove('nav-list--open');
          toggle.classList.remove('menu-toggle--open');
          toggle.setAttribute('aria-expanded', 'false');
        }
      });
    }
  
    /* ─── SCROLL FLUIDE + HEADER + SECTION ACTIVE ──────────────────────────────── */
  
    function initScroll() {
      const header = document.getElementById('site-header');
      const navLinks = document.querySelectorAll('.nav-link');
      const sections = document.querySelectorAll('main section[id]');
  
      // Header au scroll
      function onScroll() {
        if (window.scrollY > 60) {
          header.classList.add('site-header--scrolled');
        } else {
          header.classList.remove('site-header--scrolled');
        }
  
        // Section active
        let current = '';
        sections.forEach(function (section) {
          if (window.scrollY >= section.offsetTop - 120) {
            current = section.id;
          }
        });
  
        navLinks.forEach(function (link) {
          link.classList.toggle('nav-link--active', link.dataset.section === current);
          if (link.dataset.section === current) {
            link.setAttribute('aria-current', 'page');
          } else {
            link.removeAttribute('aria-current');
          }
        });
      }
  
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }
  
    /* ─── ANIMATION DES BARRES DE COMPÉTENCES AU SCROLL ────────────────────────── */
  
    function initSkillBars() {
      const fills = document.querySelectorAll('.skill-fill');
      if (fills.length === 0) return;
  
      const observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              const fill = entry.target;
              const level = fill.dataset.level;
              fill.style.width = level + '%';
              observer.unobserve(fill);
            }
          });
        },
        { threshold: 0.3 }
      );
  
      fills.forEach(function (fill) { observer.observe(fill); });
    }
  
    /* ─── ANIMATION REVEAL AU SCROLL ───────────────────────────────────────────── */
  
    function initRevealOnScroll() {
      const elements = document.querySelectorAll('.skill-item, .project-card, .apropos-img-wrap, .apropos-text, .contact-info, .contact-form-wrap');
      elements.forEach(function (el) { el.classList.add('reveal'); });
  
      const observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add('reveal--visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15 }
      );
  
      elements.forEach(function (el) { observer.observe(el); });
    }
  
    /* ─── VALIDATION DU FORMULAIRE DE CONTACT ──────────────────────────────────── */
  
    function initContactForm() {
      const form = document.getElementById('contact-form');
      if (!form) return;
  
      const fields = ['name', 'email', 'subject', 'message'];
      const touched = {};
  
      // Règles de validation
      function validateField(name, value) {
        value = value.trim();
        switch (name) {
          case 'name':
            if (!value) return 'Le nom est requis.';
            if (value.length < 2) return 'Le nom doit contenir au moins 2 caractères.';
            return '';
          case 'email':
            if (!value) return "L'adresse e-mail est requise.";
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Veuillez saisir une adresse e-mail valide.';
            return '';
          case 'subject':
            if (!value) return 'Le sujet est requis.';
            return '';
          case 'message':
            if (!value) return 'Le message est requis.';
            if (value.length < 10) return 'Le message doit contenir au moins 10 caractères.';
            return '';
          default:
            return '';
        }
      }
  
      function showError(name, message) {
        const input = document.getElementById(name);
        const errorEl = document.getElementById(name + '-error');
        if (!input || !errorEl) return;
  
        if (message) {
          input.classList.add('form-input--error');
          input.setAttribute('aria-invalid', 'true');
          errorEl.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg> ' + message;
          errorEl.hidden = false;
        } else {
          input.classList.remove('form-input--error');
          input.removeAttribute('aria-invalid');
          errorEl.hidden = true;
          errorEl.textContent = '';
        }
      }
  
      function validateAll() {
        let isValid = true;
        fields.forEach(function (name) {
          const input = document.getElementById(name);
          if (!input) return;
          const error = validateField(name, input.value);
          showError(name, error);
          if (error) isValid = false;
        });
        return isValid;
      }
  
      // Validation en temps réel (après première interaction)
      fields.forEach(function (name) {
        const input = document.getElementById(name);
        if (!input) return;
  
        input.addEventListener('blur', function () {
          touched[name] = true;
          const error = validateField(name, input.value);
          showError(name, error);
        });
  
        input.addEventListener('input', function () {
          if (touched[name]) {
            const error = validateField(name, input.value);
            showError(name, error);
          }
        });
      });
  
      // Soumission du formulaire
      form.addEventListener('submit', function (e) {
        e.preventDefault();
  
        // Marquer tous les champs comme touchés
        fields.forEach(function (name) { touched[name] = true; });
  
        if (validateAll()) {
          // Succès — afficher le message de confirmation
          const feedback = document.getElementById('form-feedback');
          if (feedback) {
            feedback.hidden = false;
          }
          form.reset();
          fields.forEach(function (name) {
            touched[name] = false;
            showError(name, '');
          });
  
          // Masquer le message après 5 secondes
          setTimeout(function () {
            if (feedback) feedback.hidden = true;
          }, 5000);
        } else {
          // Erreur — focus sur le premier champ invalide
          const firstError = form.querySelector('.form-input--error');
          if (firstError) firstError.focus();
        }
      });
    }
  
    /* ─── ANNÉE DYNAMIQUE DANS LE FOOTER ───────────────────────────────────────── */
  
    function initYear() {
      const el = document.getElementById('year');
      if (el) el.textContent = new Date().getFullYear();
    }
  
    /* ─── INITIALISATION ───────────────────────────────────────────────────────── */
  
    function init() {
      renderSkills();
      renderProjects();
      initMobileMenu();
      initScroll();
      initSkillBars();
      initRevealOnScroll();
      initContactForm();
      initYear();
    }
  
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
    } else {
      init();
    }
  })();
  