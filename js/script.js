/* ==========================================================================
   MUHAMMAD DILAWAR — PORTFOLIO
   Vanilla JavaScript — interactions & animations
   ========================================================================== */

"use strict";

/* --------------------------------------------------------------------------
   1. PROJECT DATA
   -------------------------------------------------------------------------- */
const PROJECTS = {
  p1: {
    image: "images/projects/fisheries.svg",
    alt: "Khyber Pakhtunkhwa Fisheries Department mobile app preview",
    category: "Mobile",
    title: "Khyber Pakhtunkhwa Fisheries Department App",
    desc: "A professional Flutter mobile application designed for the Khyber Pakhtunkhwa Fisheries Department. It digitizes fisheries management by combining authentication, dashboards and geo-data about water bodies into a single responsive mobile experience.",
    features: [
      "Login / Signup UI",
      "Fisheries dashboard",
      "Fish farm management",
      "Water bodies management",
      "Dams, rivers & streams data",
      "Licence management",
      "Employee attendance",
      "Fish farm registration",
      "Farmer information",
      "Responsive mobile UI",
      "Tarbela, Warsak, Gomal Zam & Kurram Tangi Dams",
    ],
    tech: ["Flutter", "Dart", "Responsive UI"],
  },
  p2: {
    image: "images/projects/fish-farm.svg",
    alt: "Fish Farm Management UI preview",
    category: "Mobile",
    title: "Fish Farm Management UI",
    desc: "A detailed responsive Flutter interface for registering and managing fish farms. The UI captures complete farm profiles and farmer records in a clean, structured and easy-to-use form experience.",
    features: [
      "Farm name",
      "Address",
      "Registration number",
      "Certificate number",
      "Farm area",
      "GPS coordinates",
      "Production capacity",
      "Farmer information",
      "CNIC",
      "Qualification",
      "Marital status",
    ],
    tech: ["Flutter", "Dart"],
  },
  p3: {
    image: "images/projects/installment.svg",
    alt: "Installment Management App preview",
    category: "Mobile",
    title: "Installment Management App",
    desc: "A mobile application concept for selling products through installments. Users can browse products, calculate EMIs and manage their installment plans with a smooth, modern mobile shopping flow.",
    features: [
      "User profile",
      "Product catalog",
      "EMI calculator",
      "Shopping cart",
      "Checkout",
      "Installment management",
      "Products: mobile phones, washing machines, refrigerators",
    ],
    tech: ["Flutter", "Dart"],
  },
  p4: {
    image: "images/projects/webguard.svg",
    alt: "WebGuard SaaS website monitoring platform preview",
    category: "Web",
    title: "WebGuard",
    desc: "WebGuard is a SaaS-based website monitoring and management platform concept. It centralizes website health, performance and security checks into one futuristic dashboard with real-time alerts and analytical reports.",
    features: [
      "Website availability monitoring",
      "Downtime detection",
      "Response-time monitoring",
      "SSL certificate monitoring",
      "Domain expiration monitoring",
      "Uptime monitoring",
      "Real-time notifications",
      "Analytical reports",
      "Centralized dashboard",
      "Web and mobile monitoring",
    ],
    tech: ["HTML", "CSS", "JavaScript", "Software Engineering"],
  },
  p5: {
    image: "images/projects/lms.svg",
    alt: "LMS School Management System preview",
    category: "Systems",
    title: "LMS / School Management System",
    desc: "A professional Learning Management System concept with role-based dashboards for every stakeholder in an institution. It covers the complete academic and administrative lifecycle in one platform.",
    features: [
      "Student dashboard",
      "Teacher dashboard",
      "Parent dashboard",
      "Admin dashboard",
      "Student management",
      "Teacher management",
      "Parent management",
      "Courses",
      "Attendance",
      "Academic management",
      "Administration",
    ],
    tech: ["HTML", "CSS", "JavaScript", "Software Engineering"],
  },
  p6: {
    image: "images/projects/erp.svg",
    alt: "Motorcycle Spare Parts ERP preview",
    category: "Desktop",
    title: "Motorcycle Spare Parts ERP",
    desc: "A Windows/Desktop ERP concept built for motorcycle spare parts businesses. It brings inventory, sales, purchasing and reporting together so a store can run entirely on one system.",
    features: [
      "Product management",
      "Inventory",
      "Sales",
      "Purchases",
      "Customers",
      "Suppliers",
      "Reports",
      "Stock management",
    ],
    tech: ["HTML", "CSS", "JavaScript", "Software Engineering"],
  },
};

/* --------------------------------------------------------------------------
   2. DOM REFS
   -------------------------------------------------------------------------- */
const preloader = document.getElementById("preloader");
const navbar = document.getElementById("navbar");
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");
const toTop = document.getElementById("toTop");

/* --------------------------------------------------------------------------
   3. PRELOADER
   -------------------------------------------------------------------------- */
window.addEventListener("load", () => {
  if (preloader) preloader.classList.add("hidden");
});
setTimeout(() => {
  if (preloader && !preloader.classList.contains("hidden")) {
    preloader.classList.add("hidden");
  }
}, 2600);

/* --------------------------------------------------------------------------
   4. NAVBAR — scroll state & active links
   -------------------------------------------------------------------------- */
const navLinks = Array.from(document.querySelectorAll(".nav-link"));
const sections = Array.from(document.querySelectorAll("main section[id]"));

function onScrollNav() {
  if (navbar) navbar.classList.toggle("scrolled", window.scrollY > 40);
  if (toTop) toTop.classList.toggle("show", window.scrollY > 600);
}

function setActiveLink() {
  const pos = window.scrollY + window.innerHeight * 0.32;
  let currentId = "home";
  sections.forEach((sec) => {
    if (pos >= sec.offsetTop) currentId = sec.id;
  });
  navLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === "#" + currentId;
    link.classList.toggle("active", isActive);
    if (link.getAttribute("href") === "#" + currentId) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

window.addEventListener("scroll", () => {
  onScrollNav();
  setActiveLink();
}, { passive: true });

/* --------------------------------------------------------------------------
   5. MOBILE MENU
   -------------------------------------------------------------------------- */
function closeMenu() {
  hamburger.classList.remove("open");
  navMenu.classList.remove("open");
  hamburger.setAttribute("aria-expanded", "false");
}

hamburger.addEventListener("click", () => {
  const open = navMenu.classList.toggle("open");
  hamburger.classList.toggle("open", open);
  hamburger.setAttribute("aria-expanded", String(open));
});

navLinks.forEach((link) => link.addEventListener("click", closeMenu));

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMenu();
});

/* --------------------------------------------------------------------------
   6. HERO TYPEWRITER (name first, then role)
   -------------------------------------------------------------------------- */
(function initHeroTypewriter() {
  const nameEl = document.getElementById("typeName");
  const roleEl = document.getElementById("typeRole");
  const cursorName = document.getElementById("cursorName");
  const cursorRole = document.getElementById("cursorRole");
  if (!nameEl || !roleEl) return;

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const steps = [
    { el: nameEl, text: "Muhammad Dilawar" },
    { el: roleEl, text: "Full Stack Developer" },
  ];

  if (reduced) {
    nameEl.textContent = steps[0].text;
    roleEl.textContent = steps[1].text;
    if (cursorName) cursorName.classList.add("hide");
    if (cursorRole) cursorRole.classList.add("hide");
    return;
  }

  let step = 0;
  let i = 0;
  let phase = "type"; // type -> hold -> clear

  function syncCursor() {
    if (cursorName) cursorName.classList.toggle("hide", step !== 0);
    if (cursorRole) cursorRole.classList.toggle("hide", step !== 1);
  }

  function tick() {
    const s = steps[step];

    if (phase === "type") {
      i += 1;
      s.el.textContent = s.text.slice(0, i);
      syncCursor();
      if (i >= s.text.length) {
        phase = "hold";
        setTimeout(tick, step === steps.length - 1 ? 2000 : 700);
      } else {
        setTimeout(tick, 70);
      }
      return;
    }

    if (phase === "hold") {
      if (step < steps.length - 1) {
        step += 1;
        i = 0;
        phase = "type";
        setTimeout(tick, 380);
      } else {
        phase = "clear";
        setTimeout(tick, 350);
      }
      return;
    }

    // clear (delete) characters, last step first
    if (i > 0) {
      i -= 1;
      steps[step].el.textContent = steps[step].text.slice(0, i);
      syncCursor();
      setTimeout(tick, 24);
      return;
    }
    if (step > 0) {
      step -= 1;
      i = steps[step].text.length;
      setTimeout(tick, 140);
      return;
    }
    phase = "type";
    setTimeout(tick, 400);
  }

  tick();
})();

/* --------------------------------------------------------------------------
   7. PARTICLE BACKGROUND (canvas)
   -------------------------------------------------------------------------- */
(function initParticles() {
  const canvas = document.getElementById("particleCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let particles = [];
  const COLORS = ["59,130,246", "34,211,238", "139,92,246"];
  const COUNT_DESKTOP = 70;
  const COUNT_MOBILE = 30;

  function resize() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    const count = window.innerWidth < 768 ? COUNT_MOBILE : COUNT_DESKTOP;
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2.2 + 0.7,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      c: COLORS[Math.floor(Math.random() * COLORS.length)],
      tw: Math.random() * Math.PI * 2,
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      p.tw += 0.02;

      if (p.x < -10) p.x = canvas.width + 10;
      if (p.x > canvas.width + 10) p.x = -10;
      if (p.y < -10) p.y = canvas.height + 10;
      if (p.y > canvas.height + 10) p.y = -10;

      const alpha = 0.22 + (Math.sin(p.tw) + 1) * 0.22;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.c},${alpha})`;
      ctx.fill();
    });

    // connecting lines
    for (let i = 0; i < particles.length; i += 1) {
      for (let j = i + 1; j < particles.length; j += 1) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.strokeStyle = `rgba(80,120,200,${(1 - dist / 120) * 0.14})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }

    if (!reduced) requestAnimationFrame(draw);
  }

  window.addEventListener("resize", resize);
  resize();
  draw();
})();

/* --------------------------------------------------------------------------
   8. SCROLL REVEAL (IntersectionObserver)
   -------------------------------------------------------------------------- */
const revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  revealEls.forEach((el) => revealObserver.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("visible"));
}

/* --------------------------------------------------------------------------
   9. COUNTERS & PROGRESS BARS
   -------------------------------------------------------------------------- */
function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const duration = 1600;
  const start = performance.now();

  function step(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(target * eased);
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

function animateProgress(bar) {
  const value = parseInt(bar.dataset.progress, 10);
  requestAnimationFrame(() => {
    bar.style.width = value + "%";
  });
}

const animObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.querySelectorAll(".counter").forEach(animateCounter);
      entry.target.querySelectorAll(".progress-fill").forEach(animateProgress);
      animObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.25 }
);

document.querySelectorAll(".about-stat, .stat-card, .skill-card").forEach((el) => animObserver.observe(el));

/* --------------------------------------------------------------------------
   10. PROJECT FILTERING
   -------------------------------------------------------------------------- */
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => {
      b.classList.toggle("active", b === btn);
      b.setAttribute("aria-pressed", String(b === btn));
    });

    const filter = btn.dataset.filter;
    projectCards.forEach((card) => {
      const show = filter === "all" || card.dataset.category === filter;
      card.classList.toggle("hide", !show);
      if (show) {
        requestAnimationFrame(() => card.classList.add("visible"));
      }
    });
  });
});

/* --------------------------------------------------------------------------
   11. PROJECT MODAL
   -------------------------------------------------------------------------- */
const modal = document.getElementById("projectModal");
const modalClose = document.getElementById("modalClose");
const modalImage = document.getElementById("modalImage");
const modalCategory = document.getElementById("modalCategory");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalFeatures = document.getElementById("modalFeatures");
const modalTech = document.getElementById("modalTech");
let lastFocused = null;

function openModal(key) {
  const data = PROJECTS[key];
  if (!data || !modal) return;

  modalImage.src = data.image;
  modalImage.alt = data.alt;
  modalCategory.textContent = data.category;
  modalTitle.textContent = data.title;
  modalDesc.textContent = data.desc;

  modalFeatures.innerHTML = "";
  data.features.forEach((f) => {
    const li = document.createElement("li");
    li.textContent = f;
    modalFeatures.appendChild(li);
  });

  modalTech.innerHTML = "";
  data.tech.forEach((t) => {
    const li = document.createElement("li");
    li.textContent = t;
    modalTech.appendChild(li);
  });

  lastFocused = document.activeElement;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  modalClose.focus();
}

function closeModal() {
  if (!modal) return;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  if (lastFocused) lastFocused.focus();
}

document.querySelectorAll("[data-project]").forEach((btn) => {
  btn.addEventListener("click", () => openModal(btn.dataset.project));
});

if (modalClose) modalClose.addEventListener("click", closeModal);

if (modal) {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal && modal.classList.contains("open")) {
    closeModal();
  }
});

/* --------------------------------------------------------------------------
   12. CONTACT FORM VALIDATION
   -------------------------------------------------------------------------- */
const form = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function setFieldState(input, valid) {
  const group = input.closest(".form-group");
  const error = group ? group.querySelector(".form-error") : null;
  input.classList.toggle("invalid", !valid);
  if (error) {
    error.textContent = valid ? "" : getErrorMessage(input);
    error.classList.toggle("show", !valid);
  }
  return valid;
}

function getErrorMessage(input) {
  switch (input.name) {
    case "name":
      return "Please enter your name (at least 3 characters).";
    case "email":
      return "Please enter a valid email address.";
    case "subject":
      return "Please enter a subject.";
    case "message":
      return "Message should be at least 10 characters.";
    default:
      return "This field is required.";
  }
}

function validateField(input) {
  const value = input.value.trim();
  if (input.name === "name") return setFieldState(input, value.length >= 3);
  if (input.name === "email") return setFieldState(input, EMAIL_RE.test(value));
  if (input.name === "subject") return setFieldState(input, value.length >= 2);
  if (input.name === "message") return setFieldState(input, value.length >= 10);
  return setFieldState(input, value.length > 0);
}

if (form) {
  const fields = form.querySelectorAll("input, textarea");

  fields.forEach((field) => {
    field.addEventListener("blur", () => {
      if (field.value.trim() !== "") validateField(field);
    });
    field.addEventListener("input", () => {
      if (field.classList.contains("invalid")) validateField(field);
    });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let allValid = true;
    fields.forEach((field) => {
      if (!validateField(field)) allValid = false;
    });

    if (!allValid) {
      const firstInvalid = form.querySelector(".invalid");
      if (firstInvalid) firstInvalid.focus();
      formStatus.textContent = "Please fix the highlighted fields.";
      formStatus.classList.add("error");
      return;
    }

    formStatus.classList.remove("error");
    formStatus.textContent = "Thank you! Your message has been prepared.";
    form.reset();
    setTimeout(() => {
      formStatus.textContent = "";
    }, 5000);
  });
}

/* --------------------------------------------------------------------------
   13. MISC
   -------------------------------------------------------------------------- */
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

toTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
