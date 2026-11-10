/* =========================================================
   Portfolio — Arlene Assoua | lang.js
   Bouton FR / EN : traduit la page sans la recharger.

   Comment ça marche (simple) :
   - Le HTML est écrit en français.
   - Ce fichier contient un dictionnaire "texte français" → "texte anglais".
   - Quand on clique sur EN, chaque texte de la page trouvé dans le
     dictionnaire est remplacé par sa version anglaise.
   - Quand on clique sur FR, on remet le texte d'origine.
   - Le choix est mémorisé pour la prochaine visite.

   👉 Pour traduire un nouveau texte : ajoute une ligne dans EN ci-dessous
      "Texte exact en français": "English text",
   ========================================================= */

const EN = {
    // --- Menu ---
    "À propos": "About",
    "Compétences": "Skills",
    "Projets": "Projects",
    "Formation": "Education",
    "Contact": "Contact",
    "Parlons projet": "Let's talk",

    // --- Hero ---
    "Développeuse Data & IA · Abidjan, Côte d'Ivoire": "Data & AI Developer · Abidjan, Côte d'Ivoire",
    "Je transforme": "I turn",
    "les données": "data",
    "en solutions.": "into solutions.",
    "Je suis": "I'm",
    ". Je conçois des applications web et mobiles, des agents IA et des outils d'analyse de données — utiles, simples et pensés pour les vrais besoins.":
        ". I build web and mobile apps, AI agents and data analysis tools — useful, simple and designed for real needs.",
    "Découvrir mes projets": "See my projects",
    "Télécharger mon CV": "Download my resume",
    "Certifiée IBM": "IBM Certified",

    // --- 01 À propos ---
    "01 / À propos": "01 / About",
    "Coder avec rigueur.": "Code with rigor.",
    "Créer avec sens.": "Create with purpose.",
    "Développeuse": "Junior",
    "Data et Intelligence Artificielle": "Data and Artificial Intelligence",
    "junior, titulaire d'un": "developer, holder of a",
    "BTS en développement d'applications": "BTS degree in application development",
    "et actuellement en formation chez": "and currently training at",
    ". Je développe mes compétences en programmation Python, en analyse de données, en gestion de bases de données SQL et en conception de solutions intégrant des agents IA.":
        ". I am building my skills in Python programming, data analysis, SQL database management and designing solutions that integrate AI agents.",
    "Mon expérience entrepreneuriale avec": "My entrepreneurial experience with",
    "m'a également permis de renforcer mon autonomie, ma créativité, mon sens de l'organisation et ma capacité à gérer un projet de la conception jusqu'à la relation client.":
        "also strengthened my autonomy, creativity, organisation skills and ability to manage a project from design to client relations.",
    "Objectif →": "Goal →",
    "mettre ces compétences au service de projets numériques utiles et continuer à progresser au sein d'une équipe.":
        "put these skills to work on useful digital projects and keep growing within a team.",
    "Projets réalisés": "Projects completed",
    "Formations & certifs": "Courses & certificates",
    "Technologies IA": "AI technologies",
    "Langages maîtrisés": "Languages mastered",

    // --- 02 Compétences ---
    "Mes outils": "My tools",
    "pour créer.": "to create.",
    "Une boîte à outils pensée pour passer d'une idée — ou d'un jeu de données — à une solution qui fonctionne vraiment.":
        "A toolbox designed to go from an idea — or a dataset — to a solution that actually works.",
    "Avancé · 85%": "Advanced · 85%",
    "Avancé · 90%": "Advanced · 90%",
    "Intermédiaire · 70%": "Intermediate · 70%",
    "En progression · 30%": "Learning · 30%",
    "Débutant · 20%": "Beginner · 20%",
    "Langages": "Languages",
    "IA & Data": "AI & Data",
    "Frameworks & Outils": "Frameworks & Tools",
    "Figma · Power BI · UI/UX · Prototypage": "Figma · Power BI · UI/UX · Prototyping",
    "Bases de données": "Databases",
    "MySQL · TiDB Cloud · Conception BDD": "MySQL · TiDB Cloud · Database design",
    "Contenu": "Content",
    "Vidéos IA · Narration · Montage · Posts LinkedIn · Veille tech": "AI videos · Narration · Editing · LinkedIn posts · Tech watch",

    // --- 03 Projets ---
    "03 / Sélection": "03 / Selected work",
    "Des idées qui": "Ideas that",
    "prennent vie.": "come to life.",
    "Applications web et mobiles, agents IA, analyse de données et design : des projets menés de l'idée jusqu'au résultat.":
        "Web and mobile apps, AI agents, data analysis and design: projects taken from idea to result.",
    "Tous": "All",
    "IA / Data": "AI / Data",
    "Vidéo": "Video",
    "Fonctions :": "Features:",
    "Compétences :": "Skills:",

    // MonLogement
    "Location immobilière en Côte d'Ivoire — Web & Mobile": "Home rentals in Côte d'Ivoire — Web & Mobile",
    "Web · Mobile · IA": "Web · Mobile · AI",
    "Plateforme de location de logements pensée pour lutter contre les arnaques et les frais de visite élevés. Les locataires trouvent un logement et contactent directement le propriétaire ; les propriétaires publient et gèrent leurs annonces.":
        "A home rental platform built to fight scams and high viewing fees. Tenants find a place and contact the owner directly; owners publish and manage their listings.",
    "Une seule base de code Flutter": "A single Flutter codebase",
    "pour la version web et l'application Android.": "for the web version and the Android app.",
    "Agent IA (Groq)": "AI agent (Groq)",
    "recherche et filtres, estimation du prix par ML, agent IA conversationnel (conseils de quartiers), favoris, questionnaire de préférences, publication d'annonces avec photos, contact WhatsApp / email, signalement, tableau de bord propriétaire, mode sombre, FR / EN.":
        "search and filters, ML price estimation, conversational AI agent (neighbourhood advice), favourites, preference questionnaire, listings with photos, WhatsApp / email contact, reporting, owner dashboard, dark mode, FR / EN.",
    "Ouvrir la version web": "Open the web version",
    "Version web · Netlify": "Web version · Netlify",
    "Télécharger l'application Android": "Download the Android app",

    // Ar_NalyseIA
    "Analyse d'états financiers avec IA locale": "Financial statement analysis with local AI",
    "Desktop · IA": "Desktop · AI",
    "Nouvelle version repensée de": "Redesigned new version of",
    ": application desktop Python d'analyse des états financiers, avec un assistant IA qui tourne en local (les données restent sur l'ordinateur). « Ar » pour Arlène, « Nalyse » pour analyse.":
        ": a Python desktop app that analyses financial statements, with an AI assistant running locally (data stays on the computer). “Ar” for Arlène, “Nalyse” for analysis.",
    "Ollama (IA locale)": "Ollama (local AI)",
    "analyse de bilans et ratios financiers, tableau de bord, assistant IA sur une page dédiée, nouvelle interface aux couleurs violettes.":
        "balance sheet and financial ratio analysis, dashboard, AI assistant on its own page, new purple interface.",
    "Télécharger l'app desktop (Windows)": "Download the desktop app (Windows)",
    "Ar_NalyseIA.exe · 52 Mo": "Ar_NalyseIA.exe · 52 MB",

    // Bot Telegram
    "Bot Telegram Touristique": "Tourism Telegram Bot",
    "Agent IA — Tourisme en Côte d'Ivoire": "AI agent — Tourism in Côte d'Ivoire",
    "IA / Automation": "AI / Automation",
    "Agent conversationnel Telegram capable de fournir des informations touristiques sur la Côte d'Ivoire : sites à visiter, hôtels, restaurants et conseils pratiques.":
        "A Telegram chatbot that gives tourist information about Côte d'Ivoire: places to visit, hotels, restaurants and practical tips.",
    "Réponses automatiques, recommandations touristiques, gestion des conversations, intégration API.":
        "Automatic replies, tourist recommendations, conversation handling, API integration.",
    "Ouvrir le bot Telegram": "Open the Telegram bot",

    // Chat & Go
    "Application Mobile IA": "AI Mobile App",
    "Application mobile permettant à un utilisateur de discuter avec une IA pour obtenir des recommandations personnalisées sur des prestataires de services.":
        "A mobile app where users chat with an AI to get personalised recommendations for service providers.",
    "Chat IA en temps réel, recommandations de prestataires, interface mobile fluide, backend API PHP/Python.":
        "Real-time AI chat, provider recommendations, smooth mobile interface, PHP/Python API backend.",

    // Bilan Vision Pro
    "Application Desktop — Comptabilité IA": "Desktop App — AI Accounting",
    "Application desktop de gestion financière permettant de calculer les bilans et le ROE (Return on Equity). Dotée d'une IA locale intégrée via Ollama pour les requêtes intelligentes.":
        "A financial management desktop app that calculates balance sheets and ROE (Return on Equity), with a local AI built in via Ollama for smart queries.",
    "Calcul bilan comptable, calcul ROE, assistant IA local (Ollama), interface desktop compatible.":
        "Balance sheet calculation, ROE calculation, local AI assistant (Ollama), desktop interface.",
    "Télécharger l'app desktop": "Download the desktop app",

    // Sécurité
    "Application de Sécurité": "Security App",
    "Analyse de risque — Abidjan": "Risk analysis — Abidjan",
    "Application web permettant d'évaluer et de cartographier les zones à risque sécuritaire à Abidjan.":
        "A web app to assess and map security risk areas in Abidjan.",
    "Authentification, gestion utilisateurs, calcul de risque par zone.":
        "Authentication, user management, risk score per area.",
    "Application restée locale : elle n’est pas hébergée en ligne et reste accessible uniquement en environnement local.":
        "Local-only app: it is not hosted online and only runs in a local environment.",

    // Ar Tricot
    "Site Web Ar Tricot": "Ar Tricot Website",
    "Site Vitrine": "Showcase website",
    "Site vitrine élégant présentant les créations artisanales de tricot. Design soigné et responsive.":
        "An elegant showcase website for handmade knitwear. Polished, responsive design.",
    "Voir le site": "Visit the website",

    // Computer Vision
    "Détection de visage": "Face detection",
    "Projet de détection de visages en temps réel utilisant OpenCV. Application des techniques de vision par ordinateur.":
        "Real-time face detection project using OpenCV, applying computer vision techniques.",

    // Figma
    "Maquettes Figma": "Figma Mockups",
    "Design UI/UX — Prototypage": "UI/UX Design — Prototyping",
    "Conception de maquettes et prototypes interactifs pour des applications web et mobile. Travail sur l'ergonomie, les wireframes, les composants et les flows utilisateurs.":
        "Mockups and interactive prototypes for web and mobile apps: usability, wireframes, components and user flows.",
    "Prototypage": "Prototyping",
    "Design système, composants réutilisables, prototypes interactifs, design responsive.":
        "Design systems, reusable components, interactive prototypes, responsive design.",

    // Power BI
    "Conflits armés & Taux d'homicide mondial": "Armed conflicts & global homicide rates",
    "Tableau de bord analytique Power BI réalisant une": "A Power BI analytics dashboard running a",
    "analyse croisée": "cross-analysis",
    "entre les conflits armés et le taux d'homicide dans le monde. Visualisation interactive des corrélations géographiques et temporelles.":
        "of armed conflicts and homicide rates worldwide, with interactive views of geographic and time correlations.",
    "Analyse de données": "Data analysis",
    "Analyse croisée": "Cross-analysis",
    "Tableaux croisés, cartographie mondiale, filtres dynamiques, corrélations statistiques, visualisations interactives.":
        "Cross tables, world maps, dynamic filters, statistical correlations, interactive visuals.",
    "Voir le dossier Power BI": "Open the Power BI folder",

    // Sites d'événements
    "Sites d'Événements": "Event Websites",
    "Anniversaires & invitation de mariage": "Birthdays & wedding invitation",
    "Création de sites web sur mesure pour des événements : deux sites d'anniversaire personnalisés et un site d'invitation de mariage complet. Des expériences digitales uniques et mémorables pour chaque célébration.":
        "Custom websites for events: two personalised birthday sites and a full wedding invitation site. Unique, memorable digital experiences for every celebration.",
    "Animations de confettis, compte à rebours, galerie photos, messages personnalisés, accès par code d'invitation, confirmation de présence (RSVP), livre d'or, design sur mesure.":
        "Confetti animations, countdown, photo gallery, personalised messages, invitation-code access, RSVP, guestbook, custom design.",
    "Site Jennifer": "Jennifer's site",
    "Site Touti": "Touti's site",
    "Invitation de mariage": "Wedding invitation",

    // Vidéo IA
    "Vidéo IA Éducative": "Educational AI Video",
    "Création de contenu avec l'Intelligence Artificielle": "Content creation with Artificial Intelligence",
    "Vidéo / IA": "Video / AI",
    "Production de vidéos et films éducatifs en utilisant des outils d'Intelligence Artificielle. Création de contenu pédagogique sur la tech et l'IA, partagé sur LinkedIn.":
        "Producing educational videos and films with AI tools. Teaching content about tech and AI, shared on LinkedIn.",
    "IA générative": "Generative AI",
    "Montage vidéo": "Video editing",
    "Contenu éducatif": "Educational content",
    "Génération de visuels IA, narration automatisée, montage, diffusion de contenu tech & IA.":
        "AI-generated visuals, automated narration, editing, sharing tech & AI content.",
    "Voir la vidéo sur LinkedIn": "Watch the video on LinkedIn",
    "Voir les contenus TikTok": "See my TikTok content",

    // --- 04 Formation ---
    "04 / Parcours": "04 / Background",
    "Des preuves": "Proof",
    "qui comptent.": "that matters.",
    "Formations, diplômes et certifications qui structurent mon parcours en développement, data et IA.":
        "Courses, degrees and certifications that shape my path in development, data and AI.",
    "En cours": "In progress",
    "Formation Data & Intelligence Artificielle": "Data & Artificial Intelligence program",
    "Fondamentaux de Python appliqués à la Data Science : types, structures, fonctions, Pandas et NumPy.":
        "Python fundamentals for Data Science: types, structures, functions, Pandas and NumPy.",
    "Voir le certificat": "View certificate",
    "Préparation, exploration et visualisation des données appliquées au Machine Learning.":
        "Data preparation, exploration and visualisation for Machine Learning.",
    "Introduction au développement web & bases IA": "Introduction to web development & AI basics",
    "HTML/CSS, JavaScript et premières notions d'intelligence artificielle.":
        "HTML/CSS, JavaScript and first notions of artificial intelligence.",
    "Diplôme obtenu": "Degree obtained",
    "BTS Informatique — Développement d'Applications": "BTS in Computer Science — Application Development",
    "Tableaux, formules et analyse de données sur Excel.": "Tables, formulas and data analysis in Excel.",
    "Excel · Formules · Analyse": "Excel · Formulas · Analysis",
    "Mon parcours, en un document.": "My background, in one document.",
    "Téléchargez mon CV complet.": "Download my full resume.",
    "Télécharger le CV": "Download resume",

    // --- 05 Contact ---
    "05 / On en parle ?": "05 / Let's talk",
    "Un projet en tête ?": "Got a project in mind?",
    "Construisons-le.": "Let's build it.",
    "Contenu éducatif sur LinkedIn.": "Educational content on LinkedIn.",
    "Je partage régulièrement des posts sur la Data, l'IA et le développement — vulgarisation, conseils et veille tech.":
        "I regularly share posts about Data, AI and development — explainers, tips and tech news.",
    "Suivre sur LinkedIn": "Follow on LinkedIn",
    "Développeuse Data & IA · Abidjan": "Data & AI Developer · Abidjan",
    "Retour en haut ↑": "Back to top ↑",
};

// Phrases qui défilent dans l'accueil (effet machine à écrire)
const TYPED = {
    fr: ["Développeuse d'Applications", "Data & Intelligence Artificielle", "Créatrice de Bots & Agents IA", "Développeuse Mobile Flutter"],
    en: ["Application Developer", "Data & Artificial Intelligence", "Bot & AI Agent Builder", "Flutter Mobile Developer"],
};

const TITLES = {
    fr: "Arlene Assoua | Développeuse Data & IA",
    en: "Arlene Assoua | Data & AI Developer",
};

/* ---------------------------------------------------------
   Moteur de traduction (pas besoin de modifier en dessous)
   --------------------------------------------------------- */
(function () {
    const original = new Map();   // texte d'origine (français) de chaque morceau de texte
    const norm = s => s.replace(/\s+/g, ' ').trim();

    function collectTextNodes() {
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
            acceptNode: n => {
                const p = n.parentElement;
                if (!p || p.closest('script, style, #typedText')) return NodeFilter.FILTER_REJECT;
                return norm(n.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
            }
        });
        const nodes = [];
        while (walker.nextNode()) nodes.push(walker.currentNode);
        return nodes;
    }

    let nodes = [];

    function applyLang(lang) {
        if (!nodes.length) {
            nodes = collectTextNodes();
            nodes.forEach(n => original.set(n, n.nodeValue));
        }
        nodes.forEach(n => {
            const fr = original.get(n);
            const key = norm(fr);
            if (lang === 'en' && EN[key]) {
                // garder les espaces autour du texte (pour ne pas coller les mots)
                const lead = fr.match(/^\s*/)[0], trail = fr.match(/\s*$/)[0];
                n.nodeValue = lead + EN[key] + trail;
            } else {
                n.nodeValue = fr;
            }
        });
        document.documentElement.lang = lang;
        document.title = TITLES[lang];
        window.TYPED_TEXTS = TYPED[lang];
        document.querySelectorAll('.lang-switch [data-lang]').forEach(b => {
            b.classList.toggle('active', b.dataset.lang === lang);
            b.setAttribute('aria-pressed', b.dataset.lang === lang);
        });
        try { localStorage.setItem('portfolio-lang', lang); } catch (e) {}
        document.dispatchEvent(new CustomEvent('langchange', { detail: lang }));
    }

    function startLang() {
        let lang = null;
        try { lang = localStorage.getItem('portfolio-lang'); } catch (e) {}
        // Pas de choix enregistré → langue du navigateur (français par défaut)
        if (!lang) lang = (navigator.language || 'fr').toLowerCase().startsWith('fr') ? 'fr' : 'en';
        return lang;
    }

    window.TYPED_TEXTS = TYPED[startLang()];

    document.addEventListener('DOMContentLoaded', () => {
        applyLang(startLang());
        document.querySelectorAll('.lang-switch [data-lang]').forEach(btn => {
            btn.addEventListener('click', () => applyLang(btn.dataset.lang));
        });
    });
})();
