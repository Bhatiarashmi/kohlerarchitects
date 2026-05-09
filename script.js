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
});
