// Fonction demandée pour afficher les images dans la galerie correspondante
function addProjectImages(containerId, images) {
    const container = document.getElementById(containerId);
    // Vider le conteneur pour éviter de créer des doublons à chaque clic
    container.innerHTML = '';
    
    if (images.length === 0) return;

    images.forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src; // Vous remplacerez "projet1.jpeg" par vos propres images dans les dossiers
        img.className = 'project-img';
        img.alt = 'Aperçu du projet';
        
        // Animation CSS au moment de l'ajout
        img.style.opacity = '0';
        img.style.transform = 'scale(0.9)';
        img.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        
        container.appendChild(img);
        
        // Fait apparaitre les images avec un léger délai
        setTimeout(() => {
            img.style.opacity = '1';
            img.style.transform = 'scale(1)';
        }, 50 * index);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    /* --- Navigation Smooth Scroll --- */
    document.querySelectorAll('.nav-links a, .nav-logo').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if(targetId === '#') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                return;
            }

            // Met à jour la classe active sur la navigation
            document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
            if(this.classList.contains('nav-logo') === false) {
                this.classList.add('active');
            }

            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                // S'assure que le header collant plus fin ne cache pas le titre
                const headerOffset = 90;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    /* --- Animations d'apparition au défilement (Scroll Reveal) --- */
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Déclenche à 15% de visibilité
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optionnel : arrêter d'observer une fois affiché
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeElements.forEach(el => observer.observe(el));
});
