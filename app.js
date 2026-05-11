/* ═══════════════════════════════════════════════════════════════
   ALEK CABALLERO – Landing profesional
   Interacciones: navegación móvil, scroll reveal, año footer,
   enlaces activos y mejoras de accesibilidad.
   ═══════════════════════════════════════════════════════════════ */

document.addEventListener("DOMContentLoaded", () => {
  initFooterYear();
  initMobileNav();
  initRevealOnScroll();
  initActiveNavLinks();
  initSafeProjectLinks();
});

/**
 * Actualiza automáticamente el año del footer.
 */
function initFooterYear() {
  const yearEl = document.getElementById("footer-year");

  if (!yearEl) return;

  yearEl.textContent = new Date().getFullYear();
}

/**
 * Controla el menú móvil:
 * - Abre/cierra con el botón hamburguesa.
 * - Cierra al hacer clic en un enlace.
 * - Cierra al presionar Escape.
 * - Mantiene aria-expanded actualizado.
 */
function initMobileNav() {
  const toggle = document.querySelector(".nav__toggle");
  const linksList = document.getElementById("nav-links");
  const navLinks = document.querySelectorAll(".nav__links a");

  if (!toggle || !linksList) return;

  const setMenuState = (isOpen) => {
    linksList.classList.toggle("open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
    document.body.classList.toggle("menu-open", isOpen);
  };

  toggle.addEventListener("click", () => {
    const isOpen = linksList.classList.contains("open");
    setMenuState(!isOpen);
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      setMenuState(false);
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setMenuState(false);
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 660) {
      setMenuState(false);
    }
  });
}

/**
 * Muestra elementos con clase .reveal al entrar en pantalla.
 * Si el navegador no soporta IntersectionObserver, los muestra todos.
 */
function initRevealOnScroll() {
  const revealElements = document.querySelectorAll(".reveal");

  if (!revealElements.length) return;

  if (!("IntersectionObserver" in window)) {
    revealElements.forEach((element) => element.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("visible");
        currentObserver.unobserve(entry.target);
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px",
    }
  );

  revealElements.forEach((element) => observer.observe(element));
}

/**
 * Marca como activo el enlace de navegación correspondiente
 * según la sección visible.
 */
function initActiveNavLinks() {
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".nav__links a[href^='#']");

  if (!sections.length || !navLinks.length || !("IntersectionObserver" in window)) return;

  const linkById = new Map();

  navLinks.forEach((link) => {
    const id = link.getAttribute("href")?.replace("#", "");
    if (id) linkById.set(id, link);
  });

  const clearActiveLinks = () => {
    navLinks.forEach((link) => link.classList.remove("active"));
  };

  const observer = new IntersectionObserver(
    (entries) => {
      const visibleEntries = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (!visibleEntries.length) return;

      const activeId = visibleEntries[0].target.id;
      const activeLink = linkById.get(activeId);

      clearActiveLinks();

      if (activeLink) {
        activeLink.classList.add("active");
      }
    },
    {
      threshold: [0.2, 0.35, 0.5, 0.65],
      rootMargin: "-90px 0px -45% 0px",
    }
  );

  sections.forEach((section) => observer.observe(section));
}

/**
 * Evita que los botones de proyectos con href="#" suban al inicio.
 * Cuando tengas URLs reales, reemplaza el href="#" en index.html.
 */
function initSafeProjectLinks() {
  const placeholderLinks = document.querySelectorAll("a[href='#']");

  placeholderLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      const originalText = link.textContent;
      link.textContent = "Próximamente";
      link.setAttribute("aria-disabled", "true");

      window.setTimeout(() => {
        link.textContent = originalText;
        link.removeAttribute("aria-disabled");
      }, 1400);
    });
  });
}
