/* Kohler Architects — redesign concept */

(function () {
    "use strict";

    /* ------------------------------------------------------------------
       Project galleries: [project id] -> { title, images: [file, ...] }
    ------------------------------------------------------------------ */
    const PROJECTS = {
        "sf-palo-alto-contemporary": { title: "Palo Alto Contemporary", images: ["sf-palo-alto-contemporary_1.jpg", "sf-palo-alto-contemporary_2.jpg", "sf-palo-alto-contemporary_3.jpg"] },
        "sf-palo-alto-farmhouse": { title: "Palo Alto Farmhouse", images: ["sf-palo-alto-farmhouse_1.jpg", "sf-palo-alto-farmhouse_2.jpg", "sf-palo-alto-farmhouse_3.jpg"] },
        "sf-palo-alto-modern-farmhouse": { title: "Palo Alto Modern Farmhouse", images: ["sf-palo-alto-modern-farmhouse_1.jpg", "sf-palo-alto-modern-farmhouse_2.jpg"] },
        "sf-palo-alto-modern": { title: "Palo Alto Modern", images: ["sf-palo-alto-modern_2.jpg", "sf-palo-alto-modern_3.jpg"] },
        "sf-atherton-french-chateau": { title: "Atherton French Chateau", images: ["sf-atherton-french-chateau_1.jpg", "sf-atherton-french-chateau_2.jpg"] },
        "sf-mountain-view-modern-craftsman": { title: "Mountain View Modern Craftsman", images: ["sf-mountain-view-modern-craftsman_1.jpg", "sf-mountain-view-modern-craftsman_2.jpg"] },
        "sf-palo-alto-transitional": { title: "Palo Alto Transitional", images: ["sf-palo-alto-transitional_1.jpg", "sf-palo-alto-transitional_2.jpg"] },
        "sf-menlo-park-rustic": { title: "Menlo Park Rustic", images: ["sf-menlo-park-rustic_1.jpg", "sf-menlo-park-rustic_2.jpg"] },
        "cat-historic": { title: "Historic Residence", images: ["cat-historic_1.jpg", "cat-historic_2.jpg"] },
        "sf-lake-tahoe-cabin": { title: "Lake Tahoe Cabin", images: ["sf-lake-tahoe-cabin_1.jpg", "sf-lake-tahoe-cabin_2.jpg"] },
        "cat-additions-remodels": { title: "Addition & Remodel I", images: ["cat-additions-remodels_1.jpg", "cat-additions-remodels_2.jpg"] },
        "sf-palo-alto-modern-2": { title: "Palo Alto Modern 2", images: ["sf-palo-alto-modern-2_1.jpg", "sf-palo-alto-modern-2_2.jpg"] },
        "sf-mountain-view-craftsman": { title: "Mountain View Craftsman", images: ["sf-mountain-view-craftsman_1.jpg", "sf-mountain-view-craftsman_2.jpg"] },
        "sf-napa-vineyard-estate": { title: "Napa Vineyard Estate", images: ["sf-napa-vineyard-estate_1.jpg"] },
        "sf-palo-alto-soho": { title: "Palo Alto Soho", images: ["sf-palo-alto-soho_1.jpg", "sf-palo-alto-soho_2.jpg"] },
        "com-commercial-1": { title: "Commercial Interior", images: ["com-commercial-1_1.jpg"] },
        "sf-san-carlos-craftsman": { title: "San Carlos Craftsman", images: ["sf-san-carlos-craftsman_1.jpg", "sf-san-carlos-craftsman_2.jpg"] },
        "sf-palo-alto-spanish": { title: "Palo Alto Spanish", images: ["sf-palo-alto-spanish_1.jpg", "sf-palo-alto-spanish_2.jpg"] },
        "sf-palo-alto-craftsman": { title: "Palo Alto Craftsman", images: ["sf-palo-alto-craftsman_1.jpg", "sf-palo-alto-craftsman_2.jpg"] },
        "cat-additions-remodels-2": { title: "Addition & Remodel II", images: ["cat-additions-remodels-2_1.jpg", "cat-additions-remodels-2_2.jpg"] },
        "sf-palo-alto-modern-prairie": { title: "Palo Alto Modern Prairie", images: ["sf-palo-alto-modern-prairie_1.jpg", "sf-palo-alto-modern-prairie_2.jpg"] },
        "sf-palo-alto-mediterranean": { title: "Palo Alto Mediterranean", images: ["sf-palo-alto-mediterranean_1.jpg", "sf-palo-alto-mediterranean_2.jpg"] },
        "sf-palo-alto-french": { title: "Palo Alto French", images: ["sf-palo-alto-french_1.jpg", "sf-palo-alto-french_2.jpg"] },
        "cat-multi-family": { title: "Multi-Family Residence", images: ["cat-multi-family_1.jpg"] },
        "sf-portola-valley-craftsman": { title: "Portola Valley Craftsman", images: ["sf-portola-valley-craftsman_1.jpg", "sf-portola-valley-craftsman_2.jpg"] },
        "sf-palo-alto-modern-3": { title: "Palo Alto Modern 3", images: ["sf-palo-alto-modern-3_1.jpg", "sf-palo-alto-modern-3_2.jpg"] },
        "cat-accessory-structures": { title: "Accessory Structure", images: ["cat-accessory-structures_1.jpg"] },
        "sf-palo-alto-contemporary-2": { title: "Palo Alto Contemporary 2", images: ["sf-palo-alto-contemporary-2_1.jpg", "sf-palo-alto-contemporary-2_2.jpg"] },
        "com-commercial-2": { title: "Commercial Renovation", images: ["com-commercial-2_1.jpg", "com-commercial-2_2.jpg"] },
        "cat-additions-remodels-3": { title: "Addition & Remodel III", images: ["cat-additions-remodels-3_1.jpg", "cat-additions-remodels-3_2.jpg"] },
        "com-commercial-3": { title: "Commercial Building", images: ["com-commercial-3_1.jpg", "com-commercial-3_2.jpg"] },
        "sf-palo-alto-colonial": { title: "Palo Alto Colonial", images: ["sf-palo-alto-colonial_1.jpg"] },
        "com-commercial-4": { title: "Commercial Office", images: ["com-commercial-4_1.jpg", "com-commercial-4_2.jpg"] },
        "itw-palo-alto-modern-farmhouse": { title: "Palo Alto Modern Farmhouse", images: ["itw-palo-alto-modern-farmhouse_1.jpg", "itw-palo-alto-modern-farmhouse_2.jpg"] },
        "itw-palo-alto-contemporary": { title: "Palo Alto Contemporary", images: ["itw-palo-alto-contemporary_1.jpg", "itw-palo-alto-contemporary_2.jpg"] },
        "itw-mountain-view-modern-farmhouse": { title: "Mountain View Modern Farmhouse", images: ["itw-mountain-view-modern-farmhouse_1.jpg", "itw-mountain-view-modern-farmhouse_2.jpg"] },
        "itw-palo-alto-craftsman": { title: "Palo Alto Craftsman", images: ["itw-palo-alto-craftsman_1.jpg", "itw-palo-alto-craftsman_2.jpg"] },
        "itw-los-altos-modern-farmhouse": { title: "Los Altos Modern Farmhouse", images: ["itw-los-altos-modern-farmhouse_1.jpg", "itw-los-altos-modern-farmhouse_2.jpg"] },
        "itw-palo-alto-mid-century-modern": { title: "Palo Alto Mid-Century Modern", images: ["itw-palo-alto-mid-century-modern_1.jpg", "itw-palo-alto-mid-century-modern_2.jpg"] },
        "itw-mountain-view-contemporary": { title: "Mountain View Contemporary", images: ["itw-mountain-view-contemporary_1.jpg"] },
        "itw-los-altos-hills-rustic": { title: "Los Altos Hills Rustic", images: ["itw-los-altos-hills-rustic_1.jpg", "itw-los-altos-hills-rustic_2.jpg"] }
    };

    const header = document.getElementById("siteHeader");
    const navToggle = document.getElementById("navToggle");
    const navLinks = document.getElementById("navLinks");
    const themeToggle = document.getElementById("themeToggle");
    const toTop = document.getElementById("toTop");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightboxImg");
    const lightboxCaption = document.getElementById("lightboxCaption");

    /* --- Theme -------------------------------------------------------- */
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
    let theme = localStorage.getItem("kohler-theme") || (prefersDark.matches ? "dark" : "light");
    applyTheme(theme);

    themeToggle.addEventListener("click", () => {
        theme = theme === "dark" ? "light" : "dark";
        localStorage.setItem("kohler-theme", theme);
        applyTheme(theme);
    });

    function applyTheme(value) {
        document.documentElement.setAttribute("data-theme", value);
    }

    /* --- Header state + back-to-top ------------------------------------ */
    function onScroll() {
        header.classList.toggle("is-scrolled", window.scrollY > 40);
        if (toTop) {
            const show = window.scrollY > 900;
            toTop.hidden = !show && !toTop.classList.contains("is-visible");
            toTop.classList.toggle("is-visible", show);
        }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    if (toTop) {
        toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
    }

    /* --- Mobile menu ---------------------------------------------------- */
    navToggle.addEventListener("click", () => {
        const open = header.classList.toggle("menu-open");
        navToggle.setAttribute("aria-expanded", open ? "true" : "false");
        document.body.style.overflow = open ? "hidden" : "";
    });

    navLinks.addEventListener("click", (e) => {
        if (e.target.closest("a") && header.classList.contains("menu-open")) {
            header.classList.remove("menu-open");
            navToggle.setAttribute("aria-expanded", "false");
            document.body.style.overflow = "";
        }
    });

    /* --- Reveal on scroll ------------------------------------------------ */
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in");
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

    document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

    /* --- Animated counters ------------------------------------------------- */
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const el = entry.target;
            counterObserver.unobserve(el);
            const target = parseInt(el.dataset.count, 10);
            const suffix = el.dataset.suffix || "";
            const duration = 1400;
            const start = performance.now();
            (function tick(now) {
                const p = Math.min((now - start) / duration, 1);
                const eased = 1 - Math.pow(1 - p, 3);
                el.textContent = Math.round(target * eased) + (p === 1 ? suffix : "");
                if (p < 1) requestAnimationFrame(tick);
            })(start);
        });
    }, { threshold: 0.6 });

    document.querySelectorAll(".stat-num[data-count]").forEach((el) => counterObserver.observe(el));

    /* --- Portfolio filtering ------------------------------------------------- */
    const chips = document.querySelectorAll(".filter-chip");
    const cards = document.querySelectorAll("#projectGrid .project-card");

    chips.forEach((chip) => {
        chip.addEventListener("click", () => {
            chips.forEach((c) => c.classList.remove("is-active"));
            chip.classList.add("is-active");
            const filter = chip.dataset.filter;
            cards.forEach((card) => {
                const match = filter === "all" || card.dataset.category === filter;
                card.classList.toggle("is-hidden", !match);
            });
        });
    });

    /* --- Lightbox -------------------------------------------------------------- */
    let gallery = [];
    let galleryTitle = "";
    let index = 0;
    let lastFocus = null;

    document.querySelectorAll(".project-card").forEach((card) => {
        card.addEventListener("click", () => openLightbox(card.dataset.project));
        card.setAttribute("tabindex", "0");
        card.setAttribute("role", "button");
        card.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                openLightbox(card.dataset.project);
            }
        });
    });

    function openLightbox(projectId) {
        const project = PROJECTS[projectId];
        if (!project) return;
        gallery = project.images;
        galleryTitle = project.title;
        index = 0;
        lastFocus = document.activeElement;
        lightbox.hidden = false;
        document.body.style.overflow = "hidden";
        render();
        document.getElementById("lightboxClose").focus();
    }

    function render() {
        const file = gallery[index];
        lightboxImg.src = "images/" + file;
        lightboxImg.alt = galleryTitle + " — Kohler Architects project, image " + (index + 1) + " of " + gallery.length;
        lightboxCaption.textContent = galleryTitle + "  ·  " + (index + 1) + " / " + gallery.length;
    }

    function step(delta) {
        index = (index + delta + gallery.length) % gallery.length;
        render();
    }

    function closeLightbox() {
        lightbox.hidden = true;
        document.body.style.overflow = "";
        lightboxImg.src = "";
        if (lastFocus) lastFocus.focus();
    }

    document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
    document.getElementById("lightboxPrev").addEventListener("click", () => step(-1));
    document.getElementById("lightboxNext").addEventListener("click", () => step(1));
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener("keydown", (e) => {
        if (lightbox.hidden) return;
        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowLeft") step(-1);
        if (e.key === "ArrowRight") step(1);
    });
})();
