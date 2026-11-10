/* =========================================
   Portfolio — Arlene Assoua | script.js
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {

    /* ------------------------------------------
       0. Mode sombre / clair
       - par défaut : suit le réglage du téléphone / ordinateur
       - le bouton soleil/lune change et mémorise le choix
    ------------------------------------------ */
    const themeToggle = document.getElementById('themeToggle');
    const root = document.documentElement;
    function setTheme(t) {
        root.setAttribute('data-theme', t);
        const meta = document.querySelector('meta[name="theme-color"]');
        if (meta) meta.setAttribute('content', t === 'dark' ? '#15101b' : '#8b5fbf');
    }
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            setTheme(next);
            try { localStorage.setItem('portfolio-theme', next); } catch (e) {}
        });
    }
    // Si le visiteur n'a rien choisi, suivre les changements du système
    if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
            let saved = null;
            try { saved = localStorage.getItem('portfolio-theme'); } catch (err) {}
            if (!saved) setTheme(e.matches ? 'dark' : 'light');
        });
    }
    setTheme(root.getAttribute('data-theme') || 'light');

    /* ------------------------------------------
       1. Barre de progression de lecture
    ------------------------------------------ */
    const readProgress = document.getElementById('readProgress');
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        if (readProgress) readProgress.style.width = pct + '%';
    });

    /* ------------------------------------------
       2. Navbar : scrolled + hamburger
    ------------------------------------------ */
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    window.addEventListener('scroll', () => {
        if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 40);
    });

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('open');
            navLinks.classList.toggle('open');
            document.body.classList.toggle('menu-open');
        });
        // Fermer le menu au clic sur un lien
        navLinks.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => {
                hamburger.classList.remove('open');
                navLinks.classList.remove('open');
                document.body.classList.remove('menu-open');
            });
        });
        // Fermer le menu au clic sur le backdrop
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.navbar') && navLinks.classList.contains('open')) {
                hamburger.classList.remove('open');
                navLinks.classList.remove('open');
                document.body.classList.remove('menu-open');
            }
        });
    }

    /* ------------------------------------------
       3. Navigation smooth scroll + active state
    ------------------------------------------ */
    document.querySelectorAll('.nav-links a, .nav-logo').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                return;
            }
            document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
            if (!this.classList.contains('nav-logo')) this.classList.add('active');
            const el = document.querySelector(targetId);
            if (el) {
                const offset = 80;
                window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - offset, behavior: 'smooth' });
            }
        });
    });

    // Active nav via IntersectionObserver
    const sections = document.querySelectorAll('main section[id]');
    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                document.querySelectorAll('.nav-links a').forEach(a => {
                    a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id);
                });
            }
        });
    }, { rootMargin: '-40% 0px -55% 0px' });
    sections.forEach(s => navObserver.observe(s));

    /* ------------------------------------------
       4. Scroll Reveal (fade-in)
    ------------------------------------------ */
    const fadeEls = document.querySelectorAll('.fade-in');
    const fadeObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0, rootMargin: '0px 0px -10% 0px' });
    fadeEls.forEach(el => fadeObserver.observe(el));

    /* ------------------------------------------
       5. Effet typing hero
    ------------------------------------------ */
    // Les phrases viennent de lang.js (français ou anglais selon la langue choisie)
    let texts = window.TYPED_TEXTS || ['Développeuse Data & IA'];
    let ti = 0, ci = 0, deleting = false;
    document.addEventListener('langchange', () => {
        texts = window.TYPED_TEXTS;
        ti = 0; ci = 0; deleting = false;
    });
    const typedEl = document.getElementById('typedText');

    function typeLoop() {
        if (!typedEl) return;
        const current = texts[ti % texts.length];
        if (!deleting) {
            typedEl.textContent = current.slice(0, ++ci);
            if (ci === current.length) { deleting = true; setTimeout(typeLoop, 2000); return; }
        } else {
            typedEl.textContent = current.slice(0, --ci);
            if (ci === 0) { deleting = false; ti = (ti + 1) % texts.length; }
        }
        setTimeout(typeLoop, deleting ? 40 : 80);
    }
    typeLoop();

    /* ------------------------------------------
       6. Compteurs animés (À propos)
    ------------------------------------------ */
    const statNumbers = document.querySelectorAll('.stat-number');
    const counterObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.dataset.target, 10);
                let current = 0;
                const step = Math.ceil(target / 40);
                const interval = setInterval(() => {
                    current = Math.min(current + step, target);
                    el.textContent = current + '+';
                    if (current >= target) clearInterval(interval);
                }, 40);
                obs.unobserve(el);
            }
        });
    }, { threshold: 0.5 });
    statNumbers.forEach(el => counterObserver.observe(el));

    /* ------------------------------------------
       7. Barres de compétences animées
    ------------------------------------------ */
    const skillBars = document.querySelectorAll('.skill-bar-fill');
    const barObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.width = entry.target.dataset.width + '%';
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    skillBars.forEach(bar => barObserver.observe(bar));

    /* ------------------------------------------
       8. Projets : carrousel + filtres
       - chaque carte reçoit une grande image de couverture
       - les cartes sont rangées en "pages" (2 par page sur ordinateur, 1 sur téléphone)
       - flèches ← →, compteur 01 / 06, glissement au doigt, flèches du clavier
    ------------------------------------------ */
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = Array.from(document.querySelectorAll('.project-card'));
    const projectsContainer = document.querySelector('.projects-container');

    // --- a) Image de couverture en haut de chaque carte ---
    function coverTitle(card) {
        const h3 = card.querySelector('.project-header h3');
        return h3 ? (h3.childNodes[0].nodeValue || '').trim() : '';
    }
    projectCards.forEach(card => {
        const firstImg = card.querySelector('.static-img');
        const icon = card.querySelector('.project-icon i');
        const cover = document.createElement('div');
        cover.className = 'project-cover' + (firstImg ? '' : ' no-image') + (card.querySelector('.gallery-phone') ? ' phone' : '');
        if (firstImg) {
            const img = document.createElement('img');
            img.src = firstImg.getAttribute('src');
            img.alt = '';
            img.loading = 'lazy';
            cover.appendChild(img);
            // clic sur la couverture = ouvrir la galerie
            cover.addEventListener('click', () => firstImg.click());
        } else if (icon) {
            const big = document.createElement('i');
            big.className = icon.className + ' cover-icon';
            cover.appendChild(big);
        }
        const word = document.createElement('span');
        word.className = 'cover-word';
        const caption = document.createElement('span');
        caption.className = 'cover-caption mono';
        cover.append(word, caption);
        card.prepend(cover);
    });
    function refreshCovers() {
        projectCards.forEach(card => {
            const badge = card.querySelector('.project-badge');
            card.querySelector('.cover-word').textContent = coverTitle(card);
            card.querySelector('.cover-caption').textContent = badge ? badge.textContent.trim() : '';
        });
    }
    refreshCovers();
    document.addEventListener('langchange', refreshCovers);

    // --- b) Structure du carrousel ---
    const carousel = document.createElement('div');
    carousel.className = 'project-carousel';
    const viewport = document.createElement('div');
    viewport.className = 'project-viewport';
    projectsContainer.parentNode.insertBefore(carousel, projectsContainer);
    viewport.appendChild(projectsContainer);
    carousel.appendChild(viewport);

    const prevBtn = document.createElement('button');
    prevBtn.className = 'carousel-arrow carousel-prev';
    prevBtn.type = 'button';
    prevBtn.setAttribute('aria-label', 'Projets précédents');
    prevBtn.innerHTML = '←';
    const nextBtn = document.createElement('button');
    nextBtn.className = 'carousel-arrow carousel-next';
    nextBtn.type = 'button';
    nextBtn.setAttribute('aria-label', 'Projets suivants');
    nextBtn.innerHTML = '→';
    const status = document.createElement('span');
    status.className = 'carousel-status mono';
    const controls = document.createElement('div');
    controls.className = 'carousel-controls';
    controls.append(prevBtn, status, nextBtn);
    carousel.append(controls);

    let page = 0;
    const perPage = () => (window.innerWidth > 1000 ? 2 : 1);
    const visibleCards = () => projectCards.filter(c => !c.classList.contains('hidden'));
    const pageCount = () => Math.max(1, Math.ceil(visibleCards().length / perPage()));
    const pad = n => String(n).padStart(2, '0');

    function goTo(newPage, animate = true) {
        const total = pageCount();
        page = Math.max(0, Math.min(newPage, total - 1));
        const gap = parseFloat(getComputedStyle(projectsContainer).columnGap) || 0;
        const shift = page * (viewport.clientWidth + gap);
        projectsContainer.style.transition = animate ? '' : 'none';
        projectsContainer.style.transform = `translateX(${-shift}px)`;

        // cartes de la page affichée : petite animation d'entrée
        const cards = visibleCards();
        const per = perPage();
        const current = cards.slice(page * per, page * per + per);
        cards.forEach(c => c.classList.toggle('is-current', current.includes(c)));
        if (animate) {
            current.forEach((c, i) => {
                c.classList.remove('slide-in');
                void c.offsetWidth;
                c.style.animationDelay = (i * 80) + 'ms';
                c.classList.add('slide-in');
            });
        }
        // hauteur = carte la plus haute de la page (évite les grands vides)
        const h = Math.max(...current.map(c => c.offsetHeight), 0);
        viewport.style.height = (h + 16) + 'px';

        status.textContent = `${pad(page + 1)} / ${pad(total)}`;
        prevBtn.disabled = page === 0;
        nextBtn.disabled = page >= total - 1;
        carousel.classList.toggle('single-page', total <= 1);
    }

    prevBtn.addEventListener('click', () => goTo(page - 1));
    nextBtn.addEventListener('click', () => goTo(page + 1));

    // flèches du clavier quand la section projets est à l'écran
    document.addEventListener('keydown', e => {
        if (document.querySelector('.lightbox.active')) return;
        if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;
        const r = carousel.getBoundingClientRect();
        if (r.top > window.innerHeight * 0.6 || r.bottom < window.innerHeight * 0.3) return;
        if (e.key === 'ArrowRight') goTo(page + 1);
        if (e.key === 'ArrowLeft') goTo(page - 1);
    });

    // glisser au doigt (téléphone / tablette)
    let startX = null, startY = null;
    viewport.addEventListener('touchstart', e => { startX = e.touches[0].clientX; startY = e.touches[0].clientY; }, { passive: true });
    viewport.addEventListener('touchend', e => {
        if (startX === null) return;
        const dx = e.changedTouches[0].clientX - startX;
        const dy = e.changedTouches[0].clientY - startY;
        if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) goTo(page + (dx < 0 ? 1 : -1));
        startX = null;
    });

    // recalculer quand la fenêtre change de taille, quand les images arrivent, ou quand la langue change
    let resizeTimer;
    window.addEventListener('resize', () => { clearTimeout(resizeTimer); resizeTimer = setTimeout(() => goTo(page, false), 120); });
    window.addEventListener('load', () => goTo(page, false));
    document.addEventListener('langchange', () => setTimeout(() => goTo(page, false), 50));
    projectsContainer.querySelectorAll('img').forEach(img => img.addEventListener('load', () => goTo(page, false), { once: true }));

    // --- c) Filtres ---
    function filterProjects(filterValue) {
        projectCards.forEach(card => {
            // Une carte peut avoir plusieurs catégories séparées par un espace (ex : "web mobile ia")
            const cats = (card.dataset.category || '').split(' ');
            card.classList.toggle('hidden', !(filterValue === 'all' || cats.includes(filterValue)));
        });
        goTo(0);
    }

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterProjects(btn.dataset.filter);
        });
    });
    filterProjects('all');

    /* ------------------------------------------
       9. Lightbox — images statiques cliquables
    ------------------------------------------ */
    const lightbox        = document.getElementById('lightbox');
    const lightboxOverlay = document.getElementById('lightboxOverlay');
    const lightboxImg     = document.getElementById('lightboxImg');
    const lightboxClose   = document.getElementById('lightboxClose');
    const lightboxPrev    = document.getElementById('lightboxPrev');
    const lightboxNext    = document.getElementById('lightboxNext');

    let lbImages = [];
    let lbIndex  = 0;

    function openLb(images, index) {
        lbImages = images;
        lbIndex  = index;
        lightboxImg.src = images[index];
        lightbox.classList.add('active');
        lightboxOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    function closeLb() {
        lightbox.classList.remove('active');
        lightboxOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
    function goLb(dir) {
        lbIndex = (lbIndex + dir + lbImages.length) % lbImages.length;
        lightboxImg.style.opacity = '0';
        setTimeout(() => { lightboxImg.src = lbImages[lbIndex]; lightboxImg.style.opacity = '1'; }, 150);
    }

    lightboxImg.style.transition = 'opacity 0.15s ease';
    if (lightboxClose)   lightboxClose.addEventListener('click', closeLb);
    if (lightboxOverlay) lightboxOverlay.addEventListener('click', closeLb);
    if (lightboxPrev)    lightboxPrev.addEventListener('click', () => goLb(-1));
    if (lightboxNext)    lightboxNext.addEventListener('click', () => goLb(+1));
    document.addEventListener('keydown', e => {
        if (!lightbox || !lightbox.classList.contains('active')) return;
        if (e.key === 'Escape')      closeLb();
        if (e.key === 'ArrowLeft')   goLb(-1);
        if (e.key === 'ArrowRight')  goLb(+1);
    });

    // Relier chaque image statique à la lightbox
    document.querySelectorAll('.gallery-static').forEach(gallery => {
        const imgs = Array.from(gallery.querySelectorAll('.static-img'));
        const srcs = imgs.map(i => i.src);
        imgs.forEach((img, idx) => {
            img.addEventListener('click', () => openLb(srcs, idx));
        });
    });

    /* ------------------------------------------
       10. Bouton CV — gestion fichier absent
    ------------------------------------------ */
    ['cvDownloadBtn', 'cvDownloadBtn2'].forEach(id => {
        const btn = document.getElementById(id);
        if (btn) {
            btn.addEventListener('click', function (e) {
                // Vérifie si le fichier cv.pdf est accessible
                fetch('cv.pdf', { method: 'HEAD' })
                    .then(res => {
                        if (!res.ok) {
                            e.preventDefault();
                            showCVNotice();
                        }
                    })
                    .catch(() => {
                        e.preventDefault();
                        showCVNotice();
                    });
            });
        }
    });

    function showCVNotice() {
        const existing = document.getElementById('cv-notice');
        if (existing) return;
        const notice = document.createElement('div');
        notice.id = 'cv-notice';
        notice.style.cssText = `
            position: fixed; bottom: 28px; left: 50%; transform: translateX(-50%);
            background: rgba(15,23,42,0.95); border: 1px solid rgba(56,189,248,0.3);
            color: #f8fafc; padding: 14px 26px; border-radius: 12px; font-size: 0.95rem;
            z-index: 9999; backdrop-filter: blur(10px);
            box-shadow: 0 8px 30px rgba(0,0,0,0.4);
            display: flex; align-items: center; gap: 10px;
            animation: slideUp 0.4s ease;
        `;
        notice.innerHTML = `<i class="fa-solid fa-circle-info" style="color:#38bdf8"></i>
            Ajoutez votre fichier <strong>cv.pdf</strong> à la racine du projet pour activer ce bouton.`;
        document.body.appendChild(notice);
        setTimeout(() => notice.remove(), 5000);
    }

});