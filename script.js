/**
 * Ruslana Buinytska - Portfolio & CV Website
 * Interactive features: Bilingual Support (SK/EN), Dark/Light Theme, Skill Filters, Copy Toast
 */

// --- Translations Dictionary (Slovak / English) ---
const translations = {
  sk: {
    // Navigation
    "nav.about": "O mne",
    "nav.experience": "Skúsenosti",
    "nav.skills": "Zručnosti",
    "nav.education": "Vzdelanie",
    "nav.projects": "Projekty",
    "nav.contact": "Kontakt",
    "nav.downloadCv": "CV (PDF)",

    // Hero Section
    "hero.badge": "Otvorená novým výzvam & projektom",
    "hero.greeting": "Ahoj, ja som",
    "hero.subtitle": "Inžinierka Informačného manažmentu • IT Analýza • Android Developer • Dáta & AI",
    "hero.description": "Prepájam svet biznisu so softvérovým inžinierstvom. Vďaka praxi vo vývoji rozumiem technologickému pozadiu a navrhujem IT riešenia, ktoré presne spĺňajú biznisové ciele a dajú sa reálne implementovať.",
    "hero.ctaProjects": "Pozrieť projekty",
    "hero.ctaDownload": "Stiahnuť CV v PDF",
    "hero.ctaContact": "Kontaktovať",
    "hero.stat1": "Data Science v ekonómii",
    "hero.stat2": "Informačný manažment",
    "hero.stat3": "Android vývoj & analýza",

    // Floating Badges
    "badge.phd": "PhD. Výskum",
    "badge.dev": "Android & KMP",
    "badge.ai": "AI & Agenti",

    // About Section
    "about.tag": "O MNE",
    "about.title": "Prepájam biznis a technológie",
    "about.subtitle": "Hlboké porozumenie IT procesom, dátam a modernému softvérovému vývoju",
    "about.quote": "Som inžinierka Informačného manažmentu so zameraním na <strong>IT analýzu</strong>, <strong>dáta</strong> a <strong>umelú inteligenciu</strong>. Vďaka praxi v softvérovom vývoji do hĺbky rozumiem technologickému pozadiu. To mi umožňuje byť <strong>rovnocenným partnerom pre vývojárov</strong> a navrhovať riešenia, ktoré presne spĺňajú biznisové očakávania a dajú sa reálne implementovať.",
    
    // Pillars
    "pillar1.title": "IT Analýza & Modelovanie",
    "pillar1.desc": "Tvorba UML, BPMN diagramov, Enterprise Architect, analýza požiadaviek, špecifikácie rozhraní a systémový návrh bez medzier v logike.",
    "pillar2.title": "Vývoj & Aplikačná logika",
    "pillar2.desc": "Vývoj v Kotline (KMP), Java, návrh integračných REST API, práca s JSON/XML, git a agilná tímová spolupráca.",
    "pillar3.title": "Dáta & Business Intelligence",
    "pillar3.desc": "Oracle SQL, relačné databázy, interaktívny reporting v Power BI, analýza v Pythone, R a Tableau pre biznis rozhodovanie.",
    "pillar4.title": "Umelá inteligencia & Agenti",
    "pillar4.desc": "Lokálne modely, LLM integrácia, tvorba a orchestrácia AI agentov a AI-Driven Development (AIDD) zrýchľujúci vývoj.",

    // Experience Section
    "exp.tag": "KARIÉRA & SKÚSENOSTI",
    "exp.title": "Pracovné skúsenosti a prax",
    "exp.subtitle": "Reálne projekty, analytická práca a technické riešenia",
    "exp.wbpo.b1": "Samostatné rozpracovanie zadaní do analýzy použiteľnej pre vývoj a návrh aplikačnej logiky.",
    "exp.wbpo.b2": "Návrh integračných rozhraní (REST API, JSON) a aktívna komunikácia s backend vývojármi a architektmi.",
    "exp.wbpo.b3": "Príprava testovacích scenárov, riešenie okrajových prípadov (edge cases) a chybových stavov, spolupráca v agilnom SCRUM tíme.",
    
    "exp.esg.title": "ESG Data Analýza a Vizualizácia",
    "exp.esg.subtitle": "Analytický projekt / Power BI",
    "exp.esg.b1": "Zber, čistenie, transformácia a modelovanie dát pre analytické a reportingové účely.",
    "exp.esg.b2": "Návrh a implementácia interaktívnych dashboardov na základe kľúčových biznisových metrík a ESG indikátorov.",

    "exp.bp.title": "Trénovanie AI Modelu a Analýza Dát",
    "exp.bp.b1": "Analýza komplexných dátových sád, predspracovanie dát a natrénovanie modelu strojového učenia.",
    "exp.bp.b2": "Vyhodnocovanie výsledkov, logické a analytické riešenie optimalizačných výziev a vyhodnotenie presnosti.",

    // Skills Section
    "skills.tag": "KOMPETENCIE",
    "skills.title": "Zručnosti & Technologický Stack",
    "skills.subtitle": "Kombinácia analytického myslenia, dát a moderných vývojových nástrojov",
    "skills.tabAll": "Všetky zručnosti",
    "skills.tabAnalysis": "IT Analýza",
    "skills.tabData": "Dáta & SQL",
    "skills.tabDev": "Vývoj & Kód",
    "skills.tabAi": "Umelá Inteligencia",
    "skills.tabMethod": "Metodiky",

    "skills.cat1.title": "IT Analýza & Modelovanie",
    "skills.cat1.sub": "Systémový dizajn a dokumentácia",
    "skills.cat2.title": "Dáta & Databázy",
    "skills.cat2.sub": "SQL, vizualizácia a reporting",
    "skills.cat3.title": "Technológie & Vývoj",
    "skills.cat3.sub": "Mobilný a backend vývoj",
    "skills.cat4.title": "Umelá Inteligencia (AI)",
    "skills.cat4.sub": "Agenti a pokročilé modely",
    "skills.cat5.title": "Metodiky & Nástroje",
    "skills.cat5.sub": "Projektové a tímové riadenie",
    "skills.cat6.title": "Jazykové Znalosti",
    "skills.cat6.sub": "Medzinárodná komunikácia",

    "lang.uk": "Ukrajinčina",
    "lang.ru": "Ruština",
    "lang.sk": "Slovenčina",
    "lang.en": "Angličtina",
    "lang.native": "Materinský jazyk",

    // Education & Certifications
    "edu.tag": "KVALIFIKÁCIA",
    "edu.title": "Vzdelanie & Certifikáty",
    "edu.subtitle": "Akademický rast a medzinárodné odborné workshopy",
    "edu.col1Title": "Akademické vzdelanie",
    "edu.col2Title": "Certifikáty & Workshopy",

    "edu.phdFocus": "Doktorandské štúdium a výskum zameraný na pokročilé dátové metódy a AI v ekonomických procesoch.",
    "edu.ingFocus": "Inžinierske štúdium: riadenie IT procesov, podnikové informačné systémy, IT analýza a riadenie projektov.",
    "edu.bcFocus": "Bakalárske štúdium: softvérové inžinierstvo, databázy, algoritmy a trénovanie modelov strojového učenia.",

    "cert.ipma": "Medzinárodný štandard riadenia projektov, metodiky a procesné kompetencie.",
    "cert.hackathon": "Riešenie udržateľných výziev s využitím agilných projektových prístupov a tímovej spolupráce.",
    "cert.scrum": "* Praktická znalosť agilných metodík, sprintov a SCRUM frameworku.",
    "cert.amcham": "Úspešne ukončený intenzívny program rozvoja soft-skills, vyjednávania a biznis komunikácie.",

    // Projects Section
    "proj.tag": "PORTFÓLIO",
    "proj.title": "Vybrané Projekty",
    "proj.subtitle": "Ukážky kódu, analýz a dátových projektov na GitHube",
    "proj.esg.desc": "Komplexné spracovanie a transformácia dát environmentálneho a sociálneho riadenia (ESG). Implementácia interaktívnych reportovacích panelov v Power BI na báze kľúčových biznisových indikátorov.",
    "proj.ml.title": "ML Model & Dátová Analýza",
    "proj.ml.desc": "Výskumný projekt bakalárskej práce: predspracovanie rozsiahlych datasetov, trénovanie algoritmov strojového učenia v Pythone a vyhodnocovanie presnosti modelov.",
    "proj.port.title": "Developer & Research Portfolio",
    "proj.port.desc": "Centrálny repozitár a prehľad vývojových zadaní, analýz a projektových archívov. Zdieľanie kódu a dokumentácie pre komunitu a partnerov.",
    "proj.viewRepo": "Pozrieť na GitHube",

    // Contact Section
    "contact.tag": "SPOJME SA",
    "contact.title": "Kontaktujte ma",
    "contact.subtitle": "Hľadáte IT analytičku, Android vývojárku alebo partnera pre dáta & AI?",
    "contact.emailLabel": "Email",
    "contact.phoneLabel": "Telefón",
    "contact.bannerTitle": "Máte záujem o spoluprácu?",
    "contact.bannerDesc": "Rada prediskutujem nové projekty, IT analýzu, Android vývoj či dátové iniciatívy.",
    "contact.sendEmail": "Napísať správu",
    "contact.downloadCv": "Stiahnuť CV v PDF",

    // Footer
    "footer.rights": "Všetky práva vyhradené.",
    "footer.badge": "🚀 Hostované na GitHub Pages cez GitHub Student Pack",

    // Toasts
    "toast.copied": "Skopírované do schránky!"
  },

  en: {
    // Navigation
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.skills": "Skills",
    "nav.education": "Education",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "nav.downloadCv": "CV (PDF)",

    // Hero Section
    "hero.badge": "Open to new challenges & opportunities",
    "hero.greeting": "Hello, I am",
    "hero.subtitle": "Information Management Engineer • IT Analysis • Android Developer • Data & AI",
    "hero.description": "Bridging business vision and software engineering. With a solid software development background, I design actionable IT solutions that precisely meet business goals and can be practically built.",
    "hero.ctaProjects": "Explore Projects",
    "hero.ctaDownload": "Download CV (PDF)",
    "hero.ctaContact": "Get in Touch",
    "hero.stat1": "Data Science in Economics",
    "hero.stat2": "Information Management",
    "hero.stat3": "Android Dev & Analysis",

    // Floating Badges
    "badge.phd": "PhD. Research",
    "badge.dev": "Android & KMP",
    "badge.ai": "AI & Agents",

    // About Section
    "about.tag": "ABOUT ME",
    "about.title": "Bridging Business and Technology",
    "about.subtitle": "In-depth understanding of IT processes, data analytics, and modern software development",
    "about.quote": "I am an Information Management engineer specializing in <strong>IT analysis</strong>, <strong>data</strong>, and <strong>artificial intelligence</strong>. Thanks to my background in software engineering, I thoroughly understand the technical landscape. This allows me to act as an <strong>equal partner to software developers</strong> and design solutions that precisely satisfy business requirements and can be realistically implemented.",
    
    // Pillars
    "pillar1.title": "IT Analysis & Modeling",
    "pillar1.desc": "UML and BPMN diagrams, Enterprise Architect, requirements analysis, interface specifications, and gap-free systems design.",
    "pillar2.title": "Software Development & Logic",
    "pillar2.desc": "Kotlin (KMP), Java development, REST API design, JSON/XML handling, Git workflows, and agile team execution.",
    "pillar3.title": "Data & Business Intelligence",
    "pillar3.desc": "Oracle SQL, relational databases, interactive dashboards in Power BI, data analysis in Python, R, and Tableau for strategic decisions.",
    "pillar4.title": "Artificial Intelligence & Agents",
    "pillar4.desc": "Local LLM integration, AI agent orchestration, and AI-Driven Development (AIDD) accelerating workflow throughput.",

    // Experience Section
    "exp.tag": "CAREER & EXPERIENCE",
    "exp.title": "Work Experience & Practice",
    "exp.subtitle": "Production systems, analytical specifications, and engineering solutions",
    "exp.wbpo.b1": "Independently breaking down requirements into actionable analysis for engineering and application logic design.",
    "exp.wbpo.b2": "Designing integration interfaces (REST API, JSON) with active collaboration with backend developers and system architects.",
    "exp.wbpo.b3": "Drafting test scenarios, resolving edge cases, handling error states, and thriving in an agile SCRUM team.",
    
    "exp.esg.title": "ESG Data Analysis & Visualization",
    "exp.esg.subtitle": "Analytical Project / Power BI",
    "exp.esg.b1": "Data gathering, cleaning, transformation, and modeling for reporting and business intelligence.",
    "exp.esg.b2": "Design and implementation of interactive dashboards based on key business metrics and ESG benchmarks.",

    "exp.bp.title": "AI Model Training & Data Analysis",
    "exp.bp.b1": "Exploration of complex datasets, data preprocessing, and supervised ML model training.",
    "exp.bp.b2": "Evaluating model performance, analytical problem-solving during optimization, and metric benchmarking.",

    // Skills Section
    "skills.tag": "CORE COMPETENCIES",
    "skills.title": "Skills & Tech Stack",
    "skills.subtitle": "A synergistic blend of analytical rigor, data science, and modern development tools",
    "skills.tabAll": "All Skills",
    "skills.tabAnalysis": "IT Analysis",
    "skills.tabData": "Data & SQL",
    "skills.tabDev": "Engineering",
    "skills.tabAi": "Artificial Intelligence",
    "skills.tabMethod": "Methodologies",

    "skills.cat1.title": "IT Analysis & Modeling",
    "skills.cat1.sub": "Systems design and technical documentation",
    "skills.cat2.title": "Data & Databases",
    "skills.cat2.sub": "SQL, visualization, and reporting",
    "skills.cat3.title": "Technologies & Development",
    "skills.cat3.sub": "Mobile and backend engineering",
    "skills.cat4.title": "Artificial Intelligence (AI)",
    "skills.cat4.sub": "Autonomous agents and LLM architectures",
    "skills.cat5.title": "Methodologies & Tools",
    "skills.cat5.sub": "Project governance and agile execution",
    "skills.cat6.title": "Language Proficiency",
    "skills.cat6.sub": "International communication",

    "lang.uk": "Ukrainian",
    "lang.ru": "Russian",
    "lang.sk": "Slovak",
    "lang.en": "English",
    "lang.native": "Native language",

    // Education & Certifications
    "edu.tag": "QUALIFICATIONS",
    "edu.title": "Education & Certifications",
    "edu.subtitle": "Academic excellence and professional industry workshops",
    "edu.col1Title": "Academic Background",
    "edu.col2Title": "Certifications & Workshops",

    "edu.phdFocus": "Doctoral research focused on advanced data science methodologies and AI integration in economic systems.",
    "edu.ingFocus": "Master's degree: IT process governance, enterprise information systems, IT analysis, and project leadership.",
    "edu.bcFocus": "Bachelor's degree: Software engineering, relational databases, data structures, and machine learning models.",

    "cert.ipma": "International project management standard, delivery methodologies, and process competencies.",
    "cert.hackathon": "Solving real-world sustainability challenges using agile frameworks and collaborative problem-solving.",
    "cert.scrum": "* Hands-on mastery of agile methodologies, sprint iterations, and SCRUM framework.",
    "cert.amcham": "Successfully completed intensive development program for soft skills, business negotiation, and leadership.",

    // Projects Section
    "proj.tag": "PORTFOLIO",
    "proj.title": "Featured Projects",
    "proj.subtitle": "Code samples, analytics pipelines, and research projects on GitHub",
    "proj.esg.desc": "Comprehensive pipeline and modeling for Environmental, Social, and Governance (ESG) metrics. Designed interactive Power BI reporting dashboards for business stakeholders.",
    "proj.ml.title": "ML Model & Data Analysis",
    "proj.ml.desc": "Bachelor thesis research: dataset preprocessing, feature engineering, Python-based machine learning training, and model evaluation.",
    "proj.port.title": "Developer & Research Portfolio",
    "proj.port.desc": "Central repository and showcase of engineering tasks, system analysis, and project archives for peers and collaborators.",
    "proj.viewRepo": "View on GitHub",

    // Contact Section
    "contact.tag": "CONNECT",
    "contact.title": "Get In Touch",
    "contact.subtitle": "Looking for an IT Analyst, Android Developer, or Data & AI Specialist?",
    "contact.emailLabel": "Email",
    "contact.phoneLabel": "Phone",
    "contact.bannerTitle": "Interested in working together?",
    "contact.bannerDesc": "I would love to discuss new opportunities, IT analysis, Android development, or data initiatives.",
    "contact.sendEmail": "Send an Email",
    "contact.downloadCv": "Download CV (PDF)",

    // Footer
    "footer.rights": "All rights reserved.",
    "footer.badge": "🚀 Hosted on GitHub Pages via GitHub Student Pack",

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
