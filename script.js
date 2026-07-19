/* ==========================================================
   Rashmi Bhatia — Portfolio Interactions
   ========================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // ── Theme Toggle (Light / Dark) ───────────────────────
    const themeToggle = document.getElementById('themeToggle');
    const root = document.documentElement;

    const getPreferredTheme = () => {
        const stored = localStorage.getItem('rb-theme');
        if (stored) return stored;
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    };

    const setTheme = (theme) => {
        root.setAttribute('data-theme', theme);
        localStorage.setItem('rb-theme', theme);
    };

    // Apply saved/preferred theme immediately
    setTheme(getPreferredTheme());

    themeToggle.addEventListener('click', () => {
        const current = root.getAttribute('data-theme');
        setTheme(current === 'dark' ? 'light' : 'dark');
    });

    // Listen for OS-level theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('rb-theme')) {
            setTheme(e.matches ? 'dark' : 'light');
        }
    });

    // ── Nav scroll state ──────────────────────────────────
    const nav = document.getElementById('nav');
    const onScroll = () => {
        nav.classList.toggle('scrolled', window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // ── Mobile nav toggle ─────────────────────────────────
    const toggle = document.getElementById('navToggle');
    const links = document.getElementById('navLinks');
    toggle.addEventListener('click', () => {
        links.classList.toggle('open');
        toggle.classList.toggle('active');
    });
    links.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
            links.classList.remove('open');
            toggle.classList.remove('active');
        });
    });

    // ── Smooth scroll for anchor links ────────────────────
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                const offset = nav.offsetHeight + 20;
                const top = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });

    // ── Scroll-reveal animations ──────────────────────────
    const animateElements = () => {
        const selectors = [
            '.project-card',
            '.zine-cover-card',
            '.zine-content-card',
            '.art-piece',
            '.about-text',
            '.skill-group',
            '.timeline-item',
            '.section-title',
            '.section-intro',
            '.about-stats'
        ];
        document.querySelectorAll(selectors.join(',')).forEach(el => {
            if (!el.classList.contains('fade-in')) {
                el.classList.add('fade-in');
            }
        });

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.08,
            rootMargin: '0px 0px -40px 0px'
        });

        document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
    };
    animateElements();

    // ── Lightbox ──────────────────────────────────────────
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxClose = document.getElementById('lightboxClose');

    document.querySelectorAll('.project-images img, .art-piece img').forEach(img => {
        img.addEventListener('click', (e) => {
            e.stopPropagation();
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    const closeLightbox = () => {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    };

    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeLightbox();
    });

    // ── Active nav link highlighting ──────────────────────
    const sections = document.querySelectorAll('section[id]');
    const navLinksAll = document.querySelectorAll('.nav-links a');
    const highlightNav = () => {
        const scrollY = window.scrollY + nav.offsetHeight + 100;
        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');
            if (scrollY >= top && scrollY < top + height) {
                navLinksAll.forEach(link => {
                    link.style.color = '';
                    if (link.getAttribute('href') === `#${id}`) {
                        link.style.color = 'var(--text)';
                    }
                });
            }
        });
    };
    window.addEventListener('scroll', highlightNav, { passive: true });

    // ── Stagger animation for grid items ──────────────────
    const staggerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const parent = entry.target;
                const children = parent.querySelectorAll('.fade-in');
                children.forEach((child, i) => {
                    setTimeout(() => {
                        child.classList.add('visible');
                    }, i * 120);
                });
                staggerObserver.unobserve(parent);
            }
        });
    }, { threshold: 0.05 });

    document.querySelectorAll('.projects-grid, .art-gallery, .skills-grid').forEach(grid => {
        staggerObserver.observe(grid);
    });

    // ── Copyright Protection ──────────────────────────────
    // Disable right-click context menu on images
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            return false;
        });
        // Disable drag
        img.setAttribute('draggable', 'false');
        img.style.webkitUserDrag = 'none';
    });

    // Disable "Save Image As" via long-press on mobile
    document.addEventListener('touchstart', (e) => {
        if (e.target.tagName === 'IMG') {
            e.target.style.pointerEvents = 'none';
            setTimeout(() => { e.target.style.pointerEvents = ''; }, 500);
        }
    }, { passive: false });

    // Disable keyboard shortcuts for saving (Ctrl+S / Cmd+S)
    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 's') {
            e.preventDefault();
        }
    });

    // ── Scroll-to-top button ────────────────────────────────
    const toTop = document.getElementById('toTop');
    if (toTop) {
        const onScrollTop = () => {
            if (window.scrollY > 600) toTop.classList.add('visible');
            else toTop.classList.remove('visible');
        };
        onScrollTop();
        window.addEventListener('scroll', onScrollTop, { passive: true });
        toTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ── Scroll reveal (IntersectionObserver) ───────────────
    const revealEls = document.querySelectorAll('.project-card, .studio-index-card, .art-piece, .zine-cover-card, .zine-content-card, .timeline-item, .skill-group');
    revealEls.forEach(el => el.classList.add('reveal'));
    // Stagger inside grids
    document.querySelectorAll('.projects-grid').forEach(grid => {
        Array.from(grid.children).forEach((card, i) => {
            if (card.classList.contains('reveal')) card.style.setProperty('--i', i % 4);
        });
    });
    if ('IntersectionObserver' in window) {
        const io = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    obs.unobserve(entry.target);
                }
            });
        }, { rootMargin: '0px 0px -10% 0px', threshold: 0.08 });
        revealEls.forEach(el => io.observe(el));
    } else {
        revealEls.forEach(el => el.classList.add('is-visible'));
    }

    // ── Animated stat counters ──────────────────────────────
    const stats = document.querySelectorAll('.stat-num');
    const animateCount = (el) => {
        const raw = el.textContent.trim();
        const match = raw.match(/^([\d.]+)/);
        if (!match) return;
        const target = parseFloat(match[1]);
        const suffix = raw.replace(/^[\d.]+/, '');
        const dur = 1100;
        const start = performance.now();
        const step = (now) => {
            const t = Math.min((now - start) / dur, 1);
            const eased = 1 - Math.pow(1 - t, 3);
            const val = target * eased;
            el.textContent = (Number.isInteger(target) ? Math.round(val) : val.toFixed(1)) + suffix;
            if (t < 1) requestAnimationFrame(step);
            else el.textContent = raw;
        };
        requestAnimationFrame(step);
    };
    if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        const statIO = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCount(entry.target);
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.4 });
        stats.forEach(s => { s.textContent = s.textContent.trim(); statIO.observe(s); });
    }

    // ── Active nav state ────────────────────────────────────
    const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');
    const sectionsForNav = [];
    navAnchors.forEach(a => {
        const id = a.getAttribute('href').slice(1);
        const sec = document.getElementById(id);
        if (sec) sectionsForNav.push({ sec, a });
    });
    if ('IntersectionObserver' in window && sectionsForNav.length) {
        const navIO = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const match = sectionsForNav.find(s => s.sec === entry.target);
                if (match) {
                    if (entry.isIntersecting) {
                        navAnchors.forEach(a => a.classList.remove('active'));
                        match.a.classList.add('active');
                    }
                }
            });
        }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
        sectionsForNav.forEach(s => navIO.observe(s.sec));
    }

    // ── Keyboard shortcuts: j/k jump sections, t toggle theme ─
    const focusable = () => {
        const el = document.activeElement;
        return el && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.isContentEditable);
    };
    document.addEventListener('keydown', (e) => {
        if (focusable()) return;
        if (e.metaKey || e.ctrlKey || e.altKey) return;
        if (e.key === 't' || e.key === 'T') {
            themeToggle && themeToggle.click();
        } else if (e.key === 'j' || e.key === 'ArrowDown') {
            e.preventDefault();
            const order = sectionsForNav.map(s => s.sec);
            const cur = order.findIndex(sec => sec.getBoundingClientRect().top > 1);
            const target = order[cur === -1 ? order.length - 1 : cur];
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else if (e.key === 'k' || e.key === 'ArrowUp') {
            e.preventDefault();
            const order = sectionsForNav.map(s => s.sec).reverse();
            const cur = order.findIndex(sec => {
                const r = sec.getBoundingClientRect();
                return r.bottom < window.innerHeight - 1;
            });
            const target = order[cur === -1 ? order.length - 1 : cur];
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
