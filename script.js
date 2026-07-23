/* =========================================
   Portfolio — Arlene Assoua | script.js
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {

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
        });
        // Fermer le menu au clic sur un lien
        navLinks.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => {
                hamburger.classList.remove('open');
                navLinks.classList.remove('open');
            });
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
    }, { threshold: 0.1 });
    fadeEls.forEach(el => fadeObserver.observe(el));

    /* ------------------------------------------
       5. Effet typing hero
    ------------------------------------------ */
    const texts = [
        'Développeuse d\'Applications',
        'Data & Intelligence Artificielle',
        'Créatrice de Bots & Agents IA',
        'Développeuse Mobile Flutter'
    ];
    let ti = 0, ci = 0, deleting = false;
    const typedEl = document.getElementById('typedText');

    function typeLoop() {
        if (!typedEl) return;
        const current = texts[ti];
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
       8. Filtre projets
    ------------------------------------------ */
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.dataset.filter;
            projectCards.forEach(card => {
                const cat = card.dataset.category;
                const visible = filter === 'all' || cat === filter;
                if (visible) {
                    card.classList.remove('hidden');
                    card.style.animation = 'none';
                    void card.offsetWidth; // reflow
                    card.style.animation = 'fadeInCard 0.4s ease forwards';
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });

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



