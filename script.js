/**
 * Ruslana Buinytska - Portfolio & CV Website
 * Focus: IT Analyst & IT Project Manager
 * Interactive features: Bilingual Support (SK/EN), Dark/Light Theme, Skill Filters, Copy Toast
 */

// --- Translations Dictionary (Slovak / English) ---
const translations = {
  sk: {
    // Navigation
    "nav.about": "O mne",
    "nav.experience": "Skúsenosti",
    "nav.skills": "Kompetencie",
    "nav.education": "Vzdelanie & Certifikáty",
    "nav.projects": "Projekty",
    "nav.contact": "Kontakt",
    "nav.downloadCv": "Životopis (PDF)",

    // Hero Section
    "hero.badge": "Hľadám pozíciu: IT Analýza & IT Project Management",
    "hero.pretitle": "IT Systémová Analýza • IT Project Management • Dátové Inžinierstvo",
    "hero.subtitle": "IT Analytička & Projektová Manažérka | Ing. Informačný manažment (EUBA)",
    "hero.description": "Prepájam biznisové požiadavky s technickou realitou. Vďaka praktickej skúsenosti zo softvérového vývoja rozumiem architektúre systémov do hĺbky, čo mi umožňuje tvoriť precízne špecifikácie bez logických medzier, viesť agilné tímy a byť rovnocenným partnerom pre vývojárov aj manažment.",
    "hero.ctaProjects": "Prehľad projektov",
    "hero.ctaDownload": "Stiahnuť životopis (PDF)",
    "hero.ctaContact": "Kontaktovať ma",
    "hero.stat1": "IPMA Certifikácia",
    "hero.stat1sub": "Project Management",
    "hero.stat2": "Informačný manažment",
    "hero.stat2sub": "Ing. titul (EUBA)",
    "hero.stat3": "Systémový návrh",
    "hero.stat3sub": "UML, BPMN & API",
    "hero.captionRole": "IT Analytička & IT Project Manager",
    "hero.captionFocus": "Ing. Informačný manažment • IPMA Certified",
    "hero.captionLoc": "Bratislava, Slovensko",

    // About Section
    "about.tag": "PROFIL & PRÍSTUP",
    "about.title": "Analytická precíznosť s porozumením softvérovej architektúry",
    "about.subtitle": "Prepájanie biznisových očakávaní, dátového modelovania a štandardov projektového riadenia",
    "about.quote": "Som inžinierka Informačného manažmentu so zameraním na <strong>IT analýzu</strong>, <strong>riadenie IT projektov</strong> a <strong>dáta</strong>. Vďaka praxi v softvérovom vývoji do hĺbky rozumiem technologickému pozadiu. To mi umožňuje byť <strong>rovnocenným partnerom pre vývojárov</strong> a navrhovať riešenia, ktoré presne spĺňajú biznisové očakávania a dajú sa reálne implementovať.",
    
    // 4 Pillars
    "pillar1.title": "IT Systémová Analýza & Špecifikácie",
    "pillar1.desc": "Modelovanie v UML a BPMN (Enterprise Architect, Draw.io), detailná dekompozícia požiadaviek stakeholderov do funkčných a technických špecifikácií, návrh API kontraktov (REST, JSON) a User Stories bez logických medzier.",
    "pillar2.title": "IT Projektový Manažment & Agilita",
    "pillar2.desc": "Medzinárodná certifikácia IPMA Project Management Fundamentals, riadenie v agilných rámcoch SCRUM a Kanban, prioritizácia backlogu, koordinácia dodávky, riadenie rizík a aplikácia princípov PRINCE2 a ITIL.",
    "pillar3.title": "Dátové Modelovanie & BI Analytika",
    "pillar3.desc": "Práca s relačnými databázami a Oracle SQL, transformácie dátových tokov (ETL), tvorba analytických modelov a interaktívnych reportovacích dashboardov v Power BI a Tableau pre podporu strategických biznis rozhodnutí.",
    "pillar4.title": "Technický Background z Vývoja",
    "pillar4.desc": "Praktická skúsenosť zo softvérového vývoja (Kotlin/KMP, Java, Git, Android), vďaka ktorej odbúravam komunikačnú bariéru s vývojármi a viem posúdiť technickú realizovateľnosť a náročnosť zadaní.",

    // Experience Section
    "exp.tag": "PRAX & SKÚSENOSTI",
    "exp.title": "Pracovné skúsenosti a analytická prax",
    "exp.subtitle": "Reálne projekty, tvorba špecifikácií, systémová integrácia a tímová koordinácia",
    "exp.wbpo.period": "2025 – súčasnosť",
    "exp.wbpo.status": "Súčasná pozícia",
    "exp.wbpo.role": "IT Analýza & Softvérový Vývoj",
    "exp.wbpo.b1": "Samostatná dekompozícia biznis požiadaviek do technickej analýzy a funkčných špecifikácií aplikačnej logiky pre vývojový tím.",
    "exp.wbpo.b2": "Návrh systémových integračných rozhraní (REST API, dátové JSON štruktúry) a aktívna koordinácia s backend architektmi a vývojármi.",
    "exp.wbpo.b3": "Príprava detailných testovacích scenárov, identifikácia a riešenie okrajových stavov (edge cases), spolupráca v agilnom SCRUM tíme.",
    
    "exp.esg.period": "Inžinierska práca (Ing.)",
    "exp.esg.status": "EUBA",
    "exp.esg.title": "ESG Data Analýza a Vizualizácia",
    "exp.esg.subtitle": "Diplomová práca • Ekonomická univerzita v Bratislave / Power BI",
    "exp.esg.b1": "Zber, čistenie, transformácia a viacrozmerné dátové modelovanie ESG ukazovateľov pre analytické a strategické reportingové účely.",
    "exp.esg.b2": "Návrh a implementácia interaktívnych dashboardov v Power BI na základe definovaných biznisových metrík a udržateľných indikátorov.",
    "exp.esg.b3": "Dátová architektúra a automatizácia analytického toku spracovania dát v rámci inžinierskeho štúdia na EUBA.",

    "exp.bp.period": "Bakalárska práca (Bc.)",
    "exp.bp.status": "TUKE",
    "exp.bp.title": "Trénovanie AI Modelu a Analýza Dát",
    "exp.bp.subtitle": "Bakalárska práca • Technická univerzita v Košiciach",
    "exp.bp.b1": "Analýza komplexných dátových sád, predspracovanie dát a natrénovanie modelu strojového učenia v Pythone.",
    "exp.bp.b2": "Vyhodnocovanie výsledkov, logické a analytické riešenie optimalizačných výziev a vyhodnotenie presnosti predikčných modelov.",

    // Skills Section
    "skills.tag": "KOMPETENCIE",
    "skills.title": "Zručnosti & Metodický Stack",
    "skills.subtitle": "Kľúčové kompetencie v oblasti analýzy systémov, riadenia projektov a technológií",
    "skills.tabAll": "Všetko",
    "skills.tabAnalysis": "IT Analýza",
    "skills.tabPm": "Project Management",
    "skills.tabData": "Dáta & SQL",
    "skills.tabDev": "Technický Background",
    "skills.tabAi": "AI & Inovácie",

    "skills.cat1.title": "IT Analýza & Systémové Modelovanie",
    "skills.cat1.sub": "Špecifikácie, diagramy a rozhrania",
    "skills.cat2.title": "Projektový Manažment & Metodiky",
    "skills.cat2.sub": "IPMA, SCRUM, dodávka projektov",
    "skills.cat3.title": "Dáta & Databázy",
    "skills.cat3.sub": "SQL, modelovanie a reporting",
    "skills.cat4.title": "Technológie & Softvérový Vývoj",
    "skills.cat4.sub": "API architektúra a aplikačný kód",
    "skills.cat5.title": "Umelá Inteligencia (AI)",
    "skills.cat5.sub": "LLM integrácia a agentické systémy",
    "skills.cat6.title": "Jazykové Znalosti",
    "skills.cat6.sub": "Komunikačné schopnosti",

    "lang.uk": "Ukrajinčina",
    "lang.ru": "Ruština",
    "lang.sk": "Slovenčina",
    "lang.en": "Angličtina",
    "lang.native": "Materinský jazyk",

    // Education & Certifications
    "edu.tag": "KVALIFIKÁCIA",
    "edu.title": "Vzdelanie & Certifikáty",
    "edu.subtitle": "Univerzitné vzdelanie a odborné projektové certifikácie",
    "edu.col1Title": "Vzdelanie",
    "edu.col2Title": "Certifikáty & Riadenie Projektov",

    "edu.phdFocus": "Doktorandské štúdium a výskum zameraný na pokročilé dátové metódy a AI v ekonomických procesoch.",
    "edu.ingFocus": "Inžinierske štúdium: riadenie IT procesov, podnikové informačné systémy, IT systémová analýza a projektový manažment.",
    "edu.bcFocus": "Bakalárske štúdium: hospodárska informatika, softvérové inžinierstvo, relačné databázy a algoritmy.",

    "cert.ipma": "Medzinárodná certifikácia projektového manažmentu (IPMA), metodiky plánovania, riadenia a kontroly projektov.",
    "cert.hackathon": "Praktické riešenie udržateľných výziev s využitím agilných projektových prístupov a tímového vedenia.",
    "cert.scrum": "Praktická znalosť agilných metodík, sprintov, ceremónií a SCRUM frameworku.",
    "cert.amcham": "Úspešne ukončený intenzívny program rozvoja manažérskych zručností, vyjednávania a biznis komunikácie.",

    // Projects Section
    "proj.tag": "PROJEKTY",
    "proj.title": "Vybrané Projekty & Portfólio",
    "proj.subtitle": "Analytické modely, repozitáre a ukážky systémovej práce na GitHube",
    "proj.esg.badge": "Inžinierska práca",
    "proj.esg.title": "ESG Data Analýza a Vizualizácia",
    "proj.esg.desc": "Komplexné spracovanie a transformácia dát environmentálneho a sociálneho riadenia (ESG). Implementácia interaktívnych reportovacích panelov v Power BI na báze kľúčových biznisových indikátorov.",
    "proj.ml.badge": "Bakalárska práca",
    "proj.ml.title": "ML Model & Dátová Analýza",
    "proj.ml.desc": "Výskumný projekt bakalárskej práce: predspracovanie rozsiahlych datasetov, trénovanie algoritmov strojového učenia v Pythone a vyhodnocovanie presnosti modelov.",
    "proj.port.badge": "Portfólio",
    "proj.port.title": "Developer & Research Portfolio",
    "proj.port.desc": "Centrálny prehľad a archív vývojových zadaní, analýz a technických dokumentov.",
    "proj.viewRepo": "Pozrieť repozitár",

    // Contact Section
    "contact.tag": "KONTAKT",
    "contact.title": "Hľadáte IT analytičku alebo projektovú manažérku?",
    "contact.subtitle": "Rada prediskutujem možnosti spolupráce na pozíciách IT Analyst, Business/Technical Analyst alebo IT Project Manager.",
    "contact.emailLabel": "Email",
    "contact.phoneLabel": "Telefón",
    "contact.bannerTitle": "Otvorená novým príležitostiam",
    "contact.bannerDesc": "Hľadáte človeka, ktorý dokáže precízne zanalyzovať požiadavky a bezproblémovo komunikovať s vývojovým tímom?",
    "contact.sendEmail": "Odoslať správu",
    "contact.downloadCv": "Stiahnuť životopis (PDF)",

    // Footer
    "footer.rights": "Všetky práva vyhradené.",
    "footer.badge": "Hostované na GitHub Pages",

    // Toasts
    "toast.copied": "Skopírované do schránky!"
  },

  en: {
    // Navigation
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.skills": "Competencies",
    "nav.education": "Education & Certifications",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "nav.downloadCv": "Resume (PDF)",

    // Hero Section
    "hero.badge": "Seeking Roles: IT Analysis & IT Project Management",
    "hero.pretitle": "IT Systems Analysis • IT Project Management • Data Engineering",
    "hero.subtitle": "IT Analyst & Project Manager | MSc. Information Management (EUBA)",
    "hero.description": "Bridging business requirements with technical realities. With hands-on software development experience, I understand system architecture from the ground up, enabling me to author gap-free specifications, lead agile teams, and act as an equal partner to engineers and business leaders alike.",
    "hero.ctaProjects": "Explore Projects",
    "hero.ctaDownload": "Download Resume (PDF)",
    "hero.ctaContact": "Get in Touch",
    "hero.stat1": "IPMA Certified",
    "hero.stat1sub": "Project Management",
    "hero.stat2": "Information Management",
    "hero.stat2sub": "MSc. Degree (EUBA)",
    "hero.stat3": "Systems Design",
    "hero.stat3sub": "UML, BPMN & API",
    "hero.captionRole": "IT Analyst & IT Project Manager",
    "hero.captionFocus": "MSc. Information Management • IPMA Certified",
    "hero.captionLoc": "Bratislava, Slovakia",

    // About Section
    "about.tag": "PROFILE & APPROACH",
    "about.title": "Analytical rigor grounded in software architecture expertise",
    "about.subtitle": "Aligning business objectives, data modeling, and project governance standards",
    "about.quote": "I am an Information Management engineer specializing in <strong>IT analysis</strong>, <strong>IT project management</strong>, and <strong>data</strong>. With hands-on experience in software development, I thoroughly understand the technical landscape. This allows me to act as an <strong>equal partner to software developers</strong> and design solutions that precisely satisfy business requirements and can be realistically implemented.",
    
    // 4 Pillars
    "pillar1.title": "IT Systems Analysis & Specifications",
    "pillar1.desc": "Process and systems modeling (UML, BPMN, Enterprise Architect, Draw.io), decomposing stakeholder requirements into functional and technical specifications, API contracts (REST, JSON), and unambiguous User Stories.",
    "pillar2.title": "IT Project Management & Agile Governance",
    "pillar2.desc": "IPMA Project Management Fundamentals certified, delivery execution across SCRUM and Kanban frameworks, backlog prioritization, milestone tracking, risk mitigation, and PRINCE2/ITIL principles.",
    "pillar3.title": "Data Modeling & Business Intelligence",
    "pillar3.desc": "Relational databases and advanced Oracle SQL, ETL data flow transformations, dimensional modeling, and interactive dashboards in Power BI and Tableau to drive data-informed business decisions.",
    "pillar4.title": "Hands-on Technical Software Foundation",
    "pillar4.desc": "Direct background in software engineering (Kotlin/KMP, Java, Git, Android), eliminating the communication barrier between developers and management while verifying technical feasibility.",

    // Experience Section
    "exp.tag": "CAREER & PRACTICE",
    "exp.title": "Work Experience & Analytical Practice",
    "exp.subtitle": "Production systems, specification drafting, systems integration, and team coordination",
    "exp.wbpo.period": "2025 – Present",
    "exp.wbpo.status": "Current Position",
    "exp.wbpo.role": "IT Analysis & Software Development",
    "exp.wbpo.b1": "Independently breaking down business requirements into actionable technical analysis and functional application logic for engineering teams.",
    "exp.wbpo.b2": "Designing integration interfaces (REST API, JSON data schemas) with active coordination with backend architects and developers.",
    "exp.wbpo.b3": "Drafting comprehensive test scenarios, mapping edge cases, handling error states, and managing delivery in an agile SCRUM team.",
    
    "exp.esg.period": "Master's Thesis (Ing.)",
    "exp.esg.status": "EUBA",
    "exp.esg.title": "ESG Data Analysis & Visualization",
    "exp.esg.subtitle": "Master's Thesis • University of Economics in Bratislava / Power BI",
    "exp.esg.b1": "Data collection, cleaning, transformation, and dimensional modeling of ESG metrics for strategic corporate reporting.",
    "exp.esg.b2": "Design and implementation of interactive Power BI dashboards based on key business performance metrics and sustainability criteria.",
    "exp.esg.b3": "Data architecture and automated processing pipelines developed as part of engineering Master's studies at EUBA.",

    "exp.bp.period": "Bachelor's Thesis (Bc.)",
    "exp.bp.status": "TUKE",
    "exp.bp.title": "AI Model Training & Data Analysis",
    "exp.bp.subtitle": "Bachelor's Thesis • Technical University of Košice",
    "exp.bp.b1": "Analysis of complex datasets, data preprocessing, and supervised machine learning model training in Python.",
    "exp.bp.b2": "Evaluating model performance, analytical problem-solving during optimization, and predictive metric benchmarking.",

    // Skills Section
    "skills.tag": "COMPETENCIES",
    "skills.title": "Skills & Methodological Stack",
    "skills.subtitle": "Core competencies in systems analysis, project governance, and software engineering",
    "skills.tabAll": "All",
    "skills.tabAnalysis": "IT Analysis",
    "skills.tabPm": "Project Management",
    "skills.tabData": "Data & SQL",
    "skills.tabDev": "Technical Foundation",
    "skills.tabAi": "AI & Innovation",

    "skills.cat1.title": "IT Analysis & Systems Modeling",
    "skills.cat1.sub": "Specifications, diagrams, and interfaces",
    "skills.cat2.title": "Project Management & Methodologies",
    "skills.cat2.sub": "IPMA, SCRUM, project delivery",
    "skills.cat3.title": "Data & Databases",
    "skills.cat3.sub": "SQL, modeling, and reporting",
    "skills.cat4.title": "Technologies & Development",
    "skills.cat4.sub": "API architecture and application code",
    "skills.cat5.title": "Artificial Intelligence (AI)",
    "skills.cat5.sub": "LLM integrations and agent architectures",
    "skills.cat6.title": "Language Proficiency",
    "skills.cat6.sub": "Communication capabilities",

    "lang.uk": "Ukrainian",
    "lang.ru": "Russian",
    "lang.sk": "Slovak",
    "lang.en": "English",
    "lang.native": "Native language",

    // Education & Certifications
    "edu.tag": "QUALIFICATIONS",
    "edu.title": "Education & Certifications",
    "edu.subtitle": "Academic university degrees and professional project credentials",
    "edu.col1Title": "Education",
    "edu.col2Title": "Certifications & Project Management",

    "edu.phdFocus": "Doctoral research focused on advanced data science methodologies and AI integration in economic systems.",
    "edu.ingFocus": "Master's degree: IT process governance, enterprise information systems, IT systems analysis, and project management.",
    "edu.bcFocus": "Bachelor's degree: Business informatics, software engineering, relational databases, and data structures.",

    "cert.ipma": "International IPMA certification in project management standards, planning, risk mitigation, and project control.",
    "cert.hackathon": "Hands-on sustainability challenge resolution utilizing agile project methods and collaborative team leadership.",
    "cert.scrum": "Practical mastery of agile methodologies, sprint iterations, ceremonies, and SCRUM framework.",
    "cert.amcham": "Successfully completed intensive development program for soft skills, business negotiation, and leadership.",

    // Projects Section
    "proj.tag": "PROJECTS",
    "proj.title": "Featured Projects & Portfolio",
    "proj.subtitle": "Analytical pipelines, systems documentation, and code on GitHub",
    "proj.esg.badge": "Master's Thesis",
    "proj.esg.title": "ESG Data Analysis & Visualization",
    "proj.esg.desc": "Comprehensive pipeline and modeling for Environmental, Social, and Governance (ESG) metrics. Designed interactive Power BI reporting dashboards for business stakeholders.",
    "proj.ml.badge": "Bachelor's Thesis",
    "proj.ml.title": "ML Model & Data Analysis",
    "proj.ml.desc": "Bachelor thesis research: dataset preprocessing, feature engineering, Python-based machine learning training, and model evaluation.",
    "proj.port.badge": "Portfolio",
    "proj.port.title": "Developer & Research Portfolio",
    "proj.port.desc": "Central repository and showcase of engineering tasks, system analysis, and project archives for peers and collaborators.",
    "proj.viewRepo": "View Repository",

    // Contact Section
    "contact.tag": "CONNECT",
    "contact.title": "Looking for an IT Analyst or Project Manager?",
    "contact.subtitle": "I would be glad to discuss opportunities for IT Analyst, Business/Technical Analyst, or IT Project Manager roles.",
    "contact.emailLabel": "Email",
    "contact.phoneLabel": "Phone",
    "contact.bannerTitle": "Open to New Opportunities",
    "contact.bannerDesc": "Looking for someone who can translate business needs into technical specifications and collaborate smoothly with developers?",
    "contact.sendEmail": "Send an Email",
    "contact.downloadCv": "Download Resume (PDF)",

    // Footer
    "footer.rights": "All rights reserved.",
    "footer.badge": "Hosted on GitHub Pages",

    // Toasts
    "toast.copied": "Copied to clipboard!"
  }
};

// --- State Variables ---
let currentLang = localStorage.getItem("lang") || "sk";
let currentTheme = localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

// --- Initialization ---
document.addEventListener("DOMContentLoaded", () => {
  // Set Current Year
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Setup Language
  applyLanguage(currentLang);
  setupLanguageSwitcher();

  // Setup Theme
  applyTheme(currentTheme);
  setupThemeToggle();

  // Setup Skill Category Filters
  setupSkillFilters();

  // Setup Copy Buttons
  setupCopyButtons();

  // Setup Mobile Menu
  setupMobileMenu();

  // Setup Scroll Spy for Active Navigation
  setupScrollSpy();
});

// --- Language Functions ---
function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  document.documentElement.lang = lang;

  // Update Buttons
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });

  // Update All I18n Nodes
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
}

function setupLanguageSwitcher() {
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const selected = btn.getAttribute("data-lang");
      if (selected !== currentLang) {
        applyLanguage(selected);
      }
    });
  });
}

// --- Theme Functions ---
function applyTheme(theme) {
  currentTheme = theme;
  localStorage.setItem("theme", theme);
  document.documentElement.setAttribute("data-theme", theme);
  const meta = document.querySelector('meta[name="color-scheme"]');
  if (meta) {
    meta.content = theme;
  }
}

function setupThemeToggle() {
  const toggleBtn = document.getElementById("themeToggle");
  if (!toggleBtn) return;

  toggleBtn.addEventListener("click", () => {
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
  });

  // Listen to OS theme changes if user hasn't pinned one manually
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    if (!localStorage.getItem("theme")) {
      applyTheme(e.matches ? "dark" : "light");
    }
  });
}

// --- Skill Filter Tabs ---
function setupSkillFilters() {
  const tabs = document.querySelectorAll(".skill-tab");
  const cards = document.querySelectorAll(".skill-card");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => {
        t.classList.remove("active");
        t.setAttribute("aria-selected", "false");
      });
      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");

      const filter = tab.getAttribute("data-filter");

      cards.forEach(card => {
        const cat = card.getAttribute("data-category");
        if (filter === "all" || cat === filter || cat === "all") {
          card.classList.remove("hidden");
        } else {
          card.classList.add("hidden");
        }
      });
    });
  });
}

// --- Copy to Clipboard with Toast Notification ---
function setupCopyButtons() {
  const copyButtons = document.querySelectorAll(".copy-btn");
  copyButtons.forEach(btn => {
    btn.addEventListener("click", async () => {
      const textToCopy = btn.getAttribute("data-copy");
      if (!textToCopy) return;

      try {
        await navigator.clipboard.writeText(textToCopy);
        const copiedMsg = translations[currentLang]?.["toast.copied"] || "Copied to clipboard!";
        showToast(`✓ ${textToCopy} — ${copiedMsg}`);
      } catch (err) {
        // Fallback
        const textarea = document.createElement("textarea");
        textarea.value = textToCopy;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
        showToast(`✓ ${textToCopy}`);
      }
    });
  });
}

function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 3200);
}

// --- Mobile Navigation ---
function setupMobileMenu() {
  const btn = document.getElementById("mobileMenuBtn");
  const navLinks = document.getElementById("navLinks");
  if (!btn || !navLinks) return;

  btn.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    btn.classList.toggle("active", isOpen);
    btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // Close menu on link click
  navLinks.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      btn.classList.remove("active");
      btn.setAttribute("aria-expanded", "false");
    });
  });
}

// --- Scroll Spy for Active Navigation Link ---
function setupScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links .nav-link");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach(link => {
          link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
        });
      }
    });
  }, {
    rootMargin: "-25% 0px -60% 0px"
  });

  sections.forEach(section => observer.observe(section));
}
