/* Kohler Architects — redesign concept */

(function () {
    "use strict";

    /* ------------------------------------------------------------------
       Project galleries: [project id] -> { title, images: [file, ...] }
    ------------------------------------------------------------------ */
    const PROJECTS = {
        "atherton-french-chateau": { title: "Atherton French Chateau", images: ["atherton-french-chateau_1.jpg", "atherton-french-chateau_2.jpg", "atherton-french-chateau_3.jpg", "atherton-french-chateau_4.jpg"] },
        "lake-tahoe-cabin": { title: "Lake Tahoe Cabin", images: ["lake-tahoe-cabin_1.jpg", "lake-tahoe-cabin_2.jpg", "lake-tahoe-cabin_3.jpg", "lake-tahoe-cabin_4.jpg"] },
        "menlo-park-rustic": { title: "Menlo Park Rustic", images: ["menlo-park-rustic_1.jpg", "menlo-park-rustic_2.jpg", "menlo-park-rustic_3.jpg", "menlo-park-rustic_4.jpg", "menlo-park-rustic_5.jpg", "menlo-park-rustic_6.jpg", "menlo-park-rustic_7.jpg", "menlo-park-rustic_8.jpg"] },
        "mountain-view-craftsman": { title: "Mountain View Craftsman", images: ["mountain-view-craftsman_1.jpg", "mountain-view-craftsman_2.jpg", "mountain-view-craftsman_3.jpg", "mountain-view-craftsman_4.jpg", "mountain-view-craftsman_5.jpg", "mountain-view-craftsman_6.jpg", "mountain-view-craftsman_7.jpg", "mountain-view-craftsman_8.jpg", "mountain-view-craftsman_9.jpg", "mountain-view-craftsman_10.jpg", "mountain-view-craftsman_11.jpg", "mountain-view-craftsman_12.jpg"] },
        "mountain-view-modern-craftsman-2": { title: "Mountain View Modern Craftsman", images: ["mountain-view-modern-craftsman-2_1.jpg", "mountain-view-modern-craftsman-2_2.jpg", "mountain-view-modern-craftsman-2_3.jpg", "mountain-view-modern-craftsman-2_4.jpg", "mountain-view-modern-craftsman-2_5.jpg", "mountain-view-modern-craftsman-2_6.jpg"] },
        "napa-vineyard-estate": { title: "Napa Vineyard Estate", images: ["napa-vineyard-estate_1.jpg"] },
        "palo-alto-colonial-2": { title: "Palo Alto Colonial", images: ["palo-alto-colonial-2_1.jpg", "palo-alto-colonial-2_2.jpg", "palo-alto-colonial-2_3.jpg", "palo-alto-colonial-2_4.jpg", "palo-alto-colonial-2_5.jpg", "palo-alto-colonial-2_6.jpg"] },
        "palo-alto-colonial-3": { title: "Palo Alto Colonial 2", images: ["palo-alto-colonial-3_1.jpg", "palo-alto-colonial-3_2.jpg", "palo-alto-colonial-3_3.jpg"] },
        "palo-alto-colonial": { title: "Palo Alto Colonial 3", images: ["palo-alto-colonial_1.jpg"] },
        "palo-alto-contemporary-3": { title: "Palo Alto Contemporary", images: ["palo-alto-contemporary-3_1.jpg", "palo-alto-contemporary-3_2.jpg", "palo-alto-contemporary-3_3.jpg", "palo-alto-contemporary-3_4.jpg", "palo-alto-contemporary-3_5.jpg", "palo-alto-contemporary-3_6.jpg", "palo-alto-contemporary-3_7.jpg", "palo-alto-contemporary-3_8.jpg"] },
        "palo-alto-contemporary": { title: "Palo Alto Contemporary 2", images: ["palo-alto-contemporary_1.jpg", "palo-alto-contemporary_2.jpg", "palo-alto-contemporary_3.jpg", "palo-alto-contemporary_4.jpg", "palo-alto-contemporary_5.jpg", "palo-alto-contemporary_6.jpg", "palo-alto-contemporary_7.jpg", "palo-alto-contemporary_8.jpg"] },
        "palo-alto-craftsman": { title: "Palo Alto Craftsman", images: ["palo-alto-craftsman_1.jpg", "palo-alto-craftsman_2.jpg", "palo-alto-craftsman_3.jpg", "palo-alto-craftsman_4.jpg", "palo-alto-craftsman_5.jpg", "palo-alto-craftsman_6.jpg", "palo-alto-craftsman_7.jpg", "palo-alto-craftsman_8.jpg"] },
        "palo-alto-farmhouse": { title: "Palo Alto Farmhouse", images: ["palo-alto-farmhouse_1.jpg", "palo-alto-farmhouse_2.jpg", "palo-alto-farmhouse_3.jpg", "palo-alto-farmhouse_4.jpg", "palo-alto-farmhouse_5.jpg", "palo-alto-farmhouse_6.jpg", "palo-alto-farmhouse_7.jpg", "palo-alto-farmhouse_8.jpg", "palo-alto-farmhouse_9.jpg", "palo-alto-farmhouse_10.jpg", "palo-alto-farmhouse_11.jpg", "palo-alto-farmhouse_12.jpg", "palo-alto-farmhouse_13.jpg"] },
        "palo-alto-french": { title: "Palo Alto French", images: ["palo-alto-french_1.jpg", "palo-alto-french_2.jpg", "palo-alto-french_3.jpg", "palo-alto-french_4.jpg", "palo-alto-french_5.jpg"] },
        "palo-alto-mediterranean": { title: "Palo Alto Mediterranean", images: ["palo-alto-mediterranean_1.jpg", "palo-alto-mediterranean_2.jpg", "palo-alto-mediterranean_3.jpg", "palo-alto-mediterranean_4.jpg"] },
        "palo-alto-modern-1": { title: "Palo Alto Modern", images: ["palo-alto-modern-1_1.jpg", "palo-alto-modern-1_2.jpg", "palo-alto-modern-1_3.jpg", "palo-alto-modern-1_4.jpg", "palo-alto-modern-1_5.jpg", "palo-alto-modern-1_6.jpg", "palo-alto-modern-1_7.jpg", "palo-alto-modern-1_8.jpg", "palo-alto-modern-1_9.jpg"] },
        "palo-alto-modern-2-2": { title: "Palo Alto Modern 2", images: ["palo-alto-modern-2-2_1.jpg", "palo-alto-modern-2-2_2.jpg", "palo-alto-modern-2-2_3.jpg", "palo-alto-modern-2-2_4.jpg", "palo-alto-modern-2-2_5.jpg", "palo-alto-modern-2-2_6.jpg", "palo-alto-modern-2-2_7.jpg", "palo-alto-modern-2-2_8.jpg", "palo-alto-modern-2-2_9.jpg", "palo-alto-modern-2-2_10.jpg"] },
        "palo-alto-modern-2": { title: "Palo Alto Modern 3", images: ["palo-alto-modern-2_1.jpg", "palo-alto-modern-2_2.jpg", "palo-alto-modern-2_3.jpg", "palo-alto-modern-2_4.jpg", "palo-alto-modern-2_5.jpg", "palo-alto-modern-2_6.jpg", "palo-alto-modern-2_7.jpg", "palo-alto-modern-2_8.jpg"] },
        "palo-alto-modern-3": { title: "Palo Alto Modern 4", images: ["palo-alto-modern-3_1.jpg", "palo-alto-modern-3_2.jpg", "palo-alto-modern-3_3.jpg", "palo-alto-modern-3_4.jpg", "palo-alto-modern-3_5.jpg", "palo-alto-modern-3_6.jpg", "palo-alto-modern-3_7.jpg", "palo-alto-modern-3_8.jpg"] },
        "palo-alto-modern-4": { title: "Palo Alto Modern 5", images: ["palo-alto-modern-4_1.jpg", "palo-alto-modern-4_2.jpg", "palo-alto-modern-4_3.jpg", "palo-alto-modern-4_4.jpg", "palo-alto-modern-4_5.jpg"] },
        "palo-alto-modern-5": { title: "Palo Alto Modern 6", images: ["palo-alto-modern-5_1.jpg"] },
        "palo-alto-modern-6": { title: "Palo Alto Modern 7", images: ["palo-alto-modern-6_1.jpg", "palo-alto-modern-6_2.jpg", "palo-alto-modern-6_3.jpg", "palo-alto-modern-6_4.jpg", "palo-alto-modern-6_5.jpg", "palo-alto-modern-6_6.jpg", "palo-alto-modern-6_7.jpg", "palo-alto-modern-6_8.jpg", "palo-alto-modern-6_9.jpg", "palo-alto-modern-6_10.jpg", "palo-alto-modern-6_11.jpg", "palo-alto-modern-6_12.jpg", "palo-alto-modern-6_13.jpg", "palo-alto-modern-6_14.jpg", "palo-alto-modern-6_15.jpg", "palo-alto-modern-6_16.jpg", "palo-alto-modern-6_17.jpg", "palo-alto-modern-6_18.jpg", "palo-alto-modern-6_19.jpg", "palo-alto-modern-6_20.jpg"] },
        "palo-alto-modern-8": { title: "Palo Alto Modern 8", images: ["palo-alto-modern-8_1.jpg", "palo-alto-modern-8_2.jpg", "palo-alto-modern-8_3.jpg", "palo-alto-modern-8_4.jpg", "palo-alto-modern-8_5.jpg", "palo-alto-modern-8_6.jpg", "palo-alto-modern-8_7.jpg", "palo-alto-modern-8_8.jpg", "palo-alto-modern-8_9.jpg", "palo-alto-modern-8_10.jpg", "palo-alto-modern-8_11.jpg", "palo-alto-modern-8_12.jpg"] },
        "palo-alto-modern-farmhouse-2": { title: "Palo Alto Modern Farmhouse", images: ["palo-alto-modern-farmhouse-2_1.jpg"] },
        "palo-alto-modern-farmhouse": { title: "Palo Alto Modern Farmhouse 2", images: ["palo-alto-modern-farmhouse_1.jpg", "palo-alto-modern-farmhouse_2.jpg", "palo-alto-modern-farmhouse_3.jpg", "palo-alto-modern-farmhouse_4.jpg", "palo-alto-modern-farmhouse_5.jpg", "palo-alto-modern-farmhouse_6.jpg"] },
        "palo-alto-modern-prairie": { title: "Palo Alto Modern Prairie", images: ["palo-alto-modern-prairie_1.jpg", "palo-alto-modern-prairie_2.jpg"] },
        "palo-alto-modern": { title: "Palo Alto Modern 9", images: ["palo-alto-modern_1.jpg", "palo-alto-modern_2.jpg"] },
        "palo-alto-soho": { title: "Palo Alto Soho", images: ["palo-alto-soho_1.jpg", "palo-alto-soho_2.jpg", "palo-alto-soho_3.jpg", "palo-alto-soho_4.jpg", "palo-alto-soho_5.jpg", "palo-alto-soho_6.jpg", "palo-alto-soho_7.jpg"] },
        "palo-alto-spanish-2": { title: "Palo Alto Spanish", images: ["palo-alto-spanish-2_1.jpg", "palo-alto-spanish-2_2.jpg", "palo-alto-spanish-2_3.jpg", "palo-alto-spanish-2_4.jpg", "palo-alto-spanish-2_5.jpg", "palo-alto-spanish-2_6.jpg"] },
        "palo-alto-spanish": { title: "Palo Alto Spanish 2", images: ["palo-alto-spanish_1.jpg", "palo-alto-spanish_2.jpg", "palo-alto-spanish_3.jpg", "palo-alto-spanish_4.jpg", "palo-alto-spanish_5.jpg", "palo-alto-spanish_6.jpg"] },
        "palo-alto-transitional-2": { title: "Palo Alto Transitional", images: ["palo-alto-transitional-2_1.jpg", "palo-alto-transitional-2_2.jpg", "palo-alto-transitional-2_3.jpg", "palo-alto-transitional-2_4.jpg", "palo-alto-transitional-2_5.jpg", "palo-alto-transitional-2_6.jpg", "palo-alto-transitional-2_7.jpg", "palo-alto-transitional-2_8.jpg"] },
        "palo-alto-transitional-3": { title: "Palo Alto Transitional 2", images: ["palo-alto-transitional-3_1.jpg", "palo-alto-transitional-3_2.jpg", "palo-alto-transitional-3_3.jpg"] },
        "palo-alto-transitional-4": { title: "Palo Alto Transitional 3", images: ["palo-alto-transitional-4_1.jpg", "palo-alto-transitional-4_2.jpg", "palo-alto-transitional-4_3.jpg", "palo-alto-transitional-4_4.jpg", "palo-alto-transitional-4_5.jpg"] },
        "palo-alto-transitional": { title: "Palo Alto Transitional 4", images: ["palo-alto-transitional_1.jpg", "palo-alto-transitional_2.jpg", "palo-alto-transitional_3.jpg", "palo-alto-transitional_4.jpg", "palo-alto-transitional_5.jpg", "palo-alto-transitional_6.jpg", "palo-alto-transitional_7.jpg", "palo-alto-transitional_8.jpg", "palo-alto-transitional_9.jpg", "palo-alto-transitional_10.jpg", "palo-alto-transitional_11.jpg", "palo-alto-transitional_12.jpg", "palo-alto-transitional_13.jpg", "palo-alto-transitional_14.jpg", "palo-alto-transitional_15.jpg", "palo-alto-transitional_16.jpg", "palo-alto-transitional_17.jpg"] },
        "portola-valley-craftsman": { title: "Portola Valley Craftsman", images: ["portola-valley-craftsman_1.jpg", "portola-valley-craftsman_2.jpg", "portola-valley-craftsman_3.jpg", "portola-valley-craftsman_4.jpg", "portola-valley-craftsman_5.jpg"] },
        "san-carlos-craftsman": { title: "San Carlos Craftsman", images: ["san-carlos-craftsman_1.jpg", "san-carlos-craftsman_2.jpg", "san-carlos-craftsman_3.jpg", "san-carlos-craftsman_4.jpg", "san-carlos-craftsman_5.jpg", "san-carlos-craftsman_6.jpg", "san-carlos-craftsman_7.jpg"] },
        "commercial-1-1": { title: "Commercial Offices", images: ["commercial-1-1_1.jpg"] },
        "commercial-1-2": { title: "Kohler Architects Offices", images: ["commercial-1-2_1.jpg", "commercial-1-2_2.jpg"] },
        "commercial-1-3": { title: "Mike’s Diner Bar Palo Alto", images: ["commercial-1-3_1.jpg", "commercial-1-3_2.jpg", "commercial-1-3_3.jpg"] },
        "commercial-1-4": { title: "Mike’s Cafe Menlo Park", images: ["commercial-1-4_1.jpg", "commercial-1-4_2.jpg", "commercial-1-4_3.jpg", "commercial-1-4_4.jpg", "commercial-1-4_5.jpg", "commercial-1-4_6.jpg", "commercial-1-4_7.jpg"] },
        "commercial-2-1": { title: "Retail Store", images: ["commercial-2-1_1.jpg", "commercial-2-1_2.jpg", "commercial-2-1_3.jpg"] },
        "historic": { title: "Historic", images: ["historic_1.jpg", "historic_2.jpg"] },
        "multi-family": { title: "Multi-family", images: ["multi-family_1.jpg"] },
        "accessory-structures": { title: "Accessory Structures", images: ["accessory-structures_1.jpg"] },
        "palo-alto-contemporary-2": { title: "Palo Alto Contemporary 4", images: ["palo-alto-contemporary-2_1.jpg", "palo-alto-contemporary-2_2.jpg", "palo-alto-contemporary-2_3.jpg"] },
        "palo-alto-modern-7": { title: "Palo Alto Modern", images: ["palo-alto-modern-7_1.jpg", "palo-alto-modern-7_2.jpg", "palo-alto-modern-7_3.jpg"] },
        "palo-alto-mid-century-modern": { title: "Palo Alto Mid-Century Modern", images: ["palo-alto-mid-century-modern_1.jpg", "palo-alto-mid-century-modern_2.jpg", "palo-alto-mid-century-modern_3.jpg"] },
        "palo-alto-craftsman-2": { title: "Palo Alto Craftsman", images: ["palo-alto-craftsman-2_1.jpg", "palo-alto-craftsman-2_2.jpg"] },
        "mountain-view-modern-farmhouse": { title: "Mountain View Modern Farmhouse", images: ["mountain-view-modern-farmhouse_1.jpg", "mountain-view-modern-farmhouse_2.jpg"] },
        "mountain-view-contemporary": { title: "Mountain View Contemporary", images: ["mountain-view-contemporary_1.jpg"] },
        "los-altos-modern-farmhouse": { title: "Los Altos Modern Farmhouse", images: ["los-altos-modern-farmhouse_1.jpg", "los-altos-modern-farmhouse_2.jpg"] },
        "itw-4-2": { title: "Mountain View Craftsman", images: ["itw-4-2_1.jpg"] },
        "itw-4-1": { title: "Palo Alto Transitional 2", images: ["itw-4-1_1.jpg", "itw-4-1_2.jpg"] },
        "itw-3-4": { title: "Palo Alto Contemporary 3", images: ["itw-3-4_1.jpg"] },
        "itw-3-3": { title: "Palo Alto Spanish", images: ["itw-3-3_1.jpg", "itw-3-3_2.jpg", "itw-3-3_3.jpg", "itw-3-3_4.jpg"] },
        "itw-3-2": { title: "Palo Alto Modern Farmhouse 4", images: ["itw-3-2_1.jpg"] },
        "itw-3-1": { title: "Mountain View Modern Ranch", images: ["itw-3-1_1.jpg", "itw-3-1_2.jpg", "itw-3-1_3.jpg", "itw-3-1_4.jpg"] },
        "itw-2-4": { title: "Palo Alto Contemporary 2", images: ["itw-2-4_1.jpg", "itw-2-4_2.jpg"] },
        "itw-2-3": { title: "Palo Alto Modern Farmhouse 3", images: ["itw-2-3_1.jpg", "itw-2-3_2.jpg"] },
        "itw-2-2": { title: "San Carlos Craftsman", images: ["itw-2-2_1.jpg"] },
        "itw-2-1": { title: "Palo Alto Contemporary", images: ["itw-2-1_1.jpg"] },
        "itw-1-4": { title: "Palo Alto Transitional", images: ["itw-1-4_1.jpg", "itw-1-4_2.jpg"] },
        "itw-1-3": { title: "Palo Alto Modern Farmhouse 2", images: ["itw-1-3_1.jpg"] },
        "itw-1-2": { title: "Palo Alto Modern Farmhouse", images: ["itw-1-2_1.jpg", "itw-1-2_2.jpg"] },
        "itw-1-1": { title: "Los Altos Hills Rustic", images: ["itw-1-1_1.jpg", "itw-1-1_2.jpg"] },
    };

    const header = document.getElementById("siteHeader");
    const navToggle = document.getElementById("navToggle");
    const navLinks = document.getElementById("navLinks");
    const toTop = document.getElementById("toTop");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightboxImg");
    const lightboxCaption = document.getElementById("lightboxCaption");

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
    document.querySelectorAll(".stat-num[data-year-from]").forEach((el) => {
        el.dataset.count = String(new Date().getFullYear() - parseInt(el.dataset.yearFrom, 10));
    });

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

    document.querySelectorAll(".project-card").forEach((card) => {
        const project = PROJECTS[card.dataset.project];
        const thumb = card.querySelector(".project-thumb");
        if (project && thumb) thumb.setAttribute("data-count", project.images.length);
    });

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

    /* --- Testimonial carousel ------------------------------------------------- */
    const tSlides = Array.from(document.querySelectorAll(".t-slide"));
    const tDotsWrap = document.getElementById("tDots");
    if (tSlides.length && tDotsWrap) {
        let tIndex = 0;
        let tTimer = null;
        const tCarousel = document.getElementById("tCarousel");

        tSlides.forEach((_, i) => {
            const dot = document.createElement("button");
            dot.className = "t-dot" + (i === 0 ? " is-active" : "");
            dot.setAttribute("aria-label", "Testimonial " + (i + 1));
            dot.addEventListener("click", () => { show(i); restart(); });
            tDotsWrap.appendChild(dot);
        });
        const tDots = Array.from(tDotsWrap.children);

        function show(i) {
            tIndex = (i + tSlides.length) % tSlides.length;
            tSlides.forEach((s, j) => s.classList.toggle("is-active", j === tIndex));
            tDots.forEach((d, j) => d.classList.toggle("is-active", j === tIndex));
        }

        function restart() {
            if (tTimer) clearInterval(tTimer);
            tTimer = setInterval(() => show(tIndex + 1), 6000);
        }

        document.getElementById("tPrev").addEventListener("click", () => { show(tIndex - 1); restart(); });
        document.getElementById("tNext").addEventListener("click", () => { show(tIndex + 1); restart(); });

        tCarousel.addEventListener("mouseenter", () => { if (tTimer) clearInterval(tTimer); tTimer = null; });
        tCarousel.addEventListener("mouseleave", restart);
        tCarousel.addEventListener("focusin", () => { if (tTimer) clearInterval(tTimer); tTimer = null; });
        tCarousel.addEventListener("focusout", restart);
        restart();
    }

    /* --- Awards carousel ----------------------------------------------------- */
    const aSlides = Array.from(document.querySelectorAll(".award-slide"));
    const aDotsWrap = document.getElementById("aDots");
    if (aSlides.length && aDotsWrap) {
        let aIndex = 0;
        let aTimer = null;
        const aCarousel = document.getElementById("awardsCarousel");

        aSlides.forEach((_, i) => {
            const dot = document.createElement("button");
            dot.className = "t-dot" + (i === 0 ? " is-active" : "");
            dot.setAttribute("aria-label", "Award " + (i + 1));
            dot.addEventListener("click", () => { aShow(i); aRestart(); });
            aDotsWrap.appendChild(dot);
        });
        const aDots = Array.from(aDotsWrap.children);

        function aShow(i) {
            aIndex = (i + aSlides.length) % aSlides.length;
            aSlides.forEach((s, j) => s.classList.toggle("is-active", j === aIndex));
            aDots.forEach((d, j) => d.classList.toggle("is-active", j === aIndex));
        }

        function aRestart() {
            if (aTimer) clearInterval(aTimer);
            aTimer = setInterval(() => aShow(aIndex + 1), 6000);
        }

        document.getElementById("aPrev").addEventListener("click", () => { aShow(aIndex - 1); aRestart(); });
        document.getElementById("aNext").addEventListener("click", () => { aShow(aIndex + 1); aRestart(); });

        aCarousel.addEventListener("mouseenter", () => { if (aTimer) clearInterval(aTimer); aTimer = null; });
        aCarousel.addEventListener("mouseleave", aRestart);
        aCarousel.addEventListener("focusin", () => { if (aTimer) clearInterval(aTimer); aTimer = null; });
        aCarousel.addEventListener("focusout", aRestart);
        aRestart();
    }

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
        lightbox.classList.toggle("is-single", gallery.length === 1);
        if (gallery.length === 1) {
            lightboxImg.alt = galleryTitle;
            lightboxCaption.textContent = galleryTitle;
        } else {
            lightboxImg.alt = galleryTitle + " — Kohler Architects project, image " + (index + 1) + " of " + gallery.length;
            lightboxCaption.textContent = galleryTitle + "  ·  " + (index + 1) + " / " + gallery.length;
        }
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

    /* --- Award / press image viewer ---------------------------------------- */
    function openImage(src, caption) {
        gallery = [src.replace(/^images\//, "")];
        galleryTitle = caption || "Kohler Architects";
        index = 0;
        lastFocus = document.activeElement;
        lightbox.hidden = false;
        document.body.style.overflow = "hidden";
        render();
        document.getElementById("lightboxClose").focus();
    }

    document.querySelectorAll(".award-logo, .press-clip").forEach((img) => {
        img.setAttribute("tabindex", "0");
        img.setAttribute("role", "button");
        const activate = () => openImage(img.getAttribute("src"), img.getAttribute("alt") || "Kohler Architects");
        img.addEventListener("click", activate);
        img.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                activate();
            }
        });
    });
})();
