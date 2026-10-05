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
    "nav.downloadCv": "Životopis (PDF)",

    // Hero Section
    "hero.badge": "Otvorená novým výzvam a projektom",
    "hero.pretitle": "IT Systémová Analýza • Softvérový Vývoj • Dáta & AI",
    "hero.subtitle": "Inžinierka Informačného manažmentu (EUBA) & Android Developer (WBPO)",
    "hero.description": "Vďaka praxi v softvérovom vývoji do hĺbky rozumiem technologickému pozadiu systémov. To mi umožňuje byť rovnocenným partnerom pre vývojárov a navrhovať riešenia, ktoré presne spĺňajú biznisové očakávania a dajú sa reálne implementovať.",
    "hero.ctaProjects": "Prehľad projektov",
    "hero.ctaDownload": "Stiahnuť životopis (PDF)",
    "hero.ctaContact": "Kontaktovať",
    "hero.stat1": "Data Science v ekonómii",
    "hero.stat2": "Informačný manažment",
    "hero.stat3": "Android vývoj a analýza",
    "hero.captionRole": "Android Developer (WBPO) • PhD. Candidate (EUBA)",
    "hero.captionLoc": "Bratislava, Slovensko",

    // About Section
    "about.tag": "PROFIL",
    "about.title": "Systémová analýza, dáta a softvérový vývoj",
    "about.subtitle": "Spojenie analytickej precíznosti s praktickou znalosťou aplikačnej architektúry",
    "about.quote": "Som inžinierka Informačného manažmentu so zameraním na <strong>IT analýzu</strong>, <strong>dáta</strong> a <strong>umelú inteligenciu</strong>. Vďaka praxi v softvérovom vývoji do hĺbky rozumiem technologickému pozadiu. To mi umožňuje byť <strong>rovnocenným partnerom pre vývojárov</strong> a navrhovať riešenia, ktoré presne spĺňajú biznisové očakávania a dajú sa reálne implementovať.",
    
    // Pillars
    "pillar1.title": "IT Analýza & Systémový Návrh",
    "pillar1.desc": "Modelovanie v UML a BPMN, Enterprise Architect, detailná dekompozícia biznis požiadaviek, špecifikácie integračných rozhraní a technická dokumentácia bez logických medzier.",
    "pillar2.title": "Aplikačný Vývoj & Logika",
    "pillar2.desc": "Vývoj mobilných aplikácií v Kotline (KMP) a Jave, návrh a konzumácia REST API, štruktúrovanie JSON dát, agilný vývoj v SCRUM tíme a správa repozitárov cez Git.",
    "pillar3.title": "Dátové Modelovanie & BI",
    "pillar3.desc": "Práca s relačnými databázami a Oracle SQL, transformácie dátových tokov (ETL), tvorba analytických modelov a interaktívnych reportovacích dashboardov v Power BI, Pythone a Tableau.",
    "pillar4.title": "Umelá Inteligencia & AI Inžinierstvo",
    "pillar4.desc": "Praktická integrácia LLM rozhraní, orchestrácia autonómnych AI agentov, lokálne modely a aplikácia metodík AI-Driven Development (AIDD) pre zefektívnenie vývojového cyklu.",

    // Experience Section
    "exp.tag": "KARIÉRA",
    "exp.title": "Pracovné skúsenosti a projekty",
    "exp.subtitle": "Komerčný vývoj, analytická činnosť a inžinierske projekty",
    "exp.wbpo.period": "2025 – súčasnosť",
    "exp.wbpo.status": "Súčasná pozícia",
    "exp.wbpo.b1": "Samostatné rozpracovanie zadaní do analýzy použiteľnej pre vývoj a návrh aplikačnej logiky.",
    "exp.wbpo.b2": "Návrh integračných rozhraní (REST API, JSON) a aktívna komunikácia s backend vývojármi a architektmi.",
    "exp.wbpo.b3": "Príprava testovacích scenárov, riešenie okrajových prípadov (edge cases) a chybových stavov, spolupráca v agilnom SCRUM tíme.",
    
    "exp.esg.period": "Inžinierska práca (Ing.)",
    "exp.esg.status": "EUBA",
    "exp.esg.title": "ESG Data Analýza a Vizualizácia",
    "exp.esg.subtitle": "Diplomová práca • Ekonomická univerzita v Bratislave / Power BI",
    "exp.esg.b1": "Zber, čistenie, transformácia a viacrozmerné dátové modelovanie ESG ukazovateľov pre analytické a strategické reportingové účely.",
    "exp.esg.b2": "Návrh a implementácia interaktívnych dashboardov v Power BI na základe definovaných biznisových metrík a udržateľných indikátorov.",
    "exp.esg.b3": "Dátová architektúra a automatizácia analytického toku spracovania dát v rámci inžinierskeho štúdia.",

    "exp.bp.period": "Bakalárska práca (Bc.)",
    "exp.bp.status": "TUKE",
    "exp.bp.title": "Trénovanie AI Modelu a Analýza Dát",
    "exp.bp.subtitle": "Bakalárska práca • Technická univerzita v Košiciach",
    "exp.bp.b1": "Analýza komplexných dátových sád, predspracovanie dát a natrénovanie modelu strojového učenia v Pythone.",
    "exp.bp.b2": "Vyhodnocovanie výsledkov, logické a analytické riešenie optimalizačných výziev a vyhodnotenie presnosti predikčných modelov.",

    // Skills Section
    "skills.tag": "KOMPETENCIE",
    "skills.title": "Zručnosti & Technologický Stack",
    "skills.subtitle": "Technické a analytické nástroje využívané v praxi",
    "skills.tabAll": "Všetko",
    "skills.tabAnalysis": "IT Analýza",
    "skills.tabData": "Dáta & SQL",
    "skills.tabDev": "Vývoj & Kód",
    "skills.tabAi": "Umelá Inteligencia",
    "skills.tabMethod": "Metodiky",

    "skills.cat1.title": "IT Analýza & Modelovanie",
    "skills.cat1.sub": "Systémový návrh a dokumentácia",
    "skills.cat2.title": "Dáta & Databázy",
    "skills.cat2.sub": "SQL, modelovanie a vizualizácia",
    "skills.cat3.title": "Technológie & Vývoj",
    "skills.cat3.sub": "Mobilný a softvérový vývoj",
    "skills.cat4.title": "Umelá Inteligencia (AI)",
    "skills.cat4.sub": "LLM integrácia a agentické systémy",
    "skills.cat5.title": "Metodiky & Nástroje",
    "skills.cat5.sub": "Projektové a tímové riadenie",
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
    "edu.subtitle": "Univerzitné vzdelanie a odborné vzdelávacie programy",
    "edu.col1Title": "Vzdelanie",
    "edu.col2Title": "Certifikáty & Workshopy",

    "edu.phdFocus": "Doktorandské štúdium a výskum zameraný na pokročilé dátové metódy a AI v ekonomických procesoch.",
    "edu.ingFocus": "Inžinierske štúdium: riadenie IT procesov, podnikové informačné systémy, IT analýza a riadenie projektov.",
    "edu.bcFocus": "Bakalárske štúdium: softvérové inžinierstvo, relačné databázy, dátové štruktúry a strojové učenie.",

    "cert.ipma": "Medzinárodný štandard riadenia projektov, metodiky a procesné kompetencie.",
    "cert.hackathon": "Riešenie udržateľných výziev s využitím agilných projektových prístupov a tímovej spolupráce.",
    "cert.scrum": "Praktická znalosť agilných metodík, sprintov a SCRUM frameworku.",
    "cert.amcham": "Úspešne ukončený intenzívny program rozvoja manažérskych a komunikačných zručností.",

    // Projects Section
    "proj.tag": "PORTFÓLIO",
    "proj.title": "Vybrané Projekty",
    "proj.subtitle": "Repozitáre, dátové modely a zdrojový kód na GitHube",
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
    "contact.title": "Spojme sa",
    "contact.subtitle": "Máte záujem o spoluprácu v oblasti IT analýzy, Android vývoja alebo dátových riešení?",
    "contact.emailLabel": "Email",
    "contact.phoneLabel": "Telefón",
    "contact.bannerTitle": "Otvorená novým projektom",
    "contact.bannerDesc": "Rada prediskutujem príležitosti v IT analýze, vývoji aplikácií alebo dátovom inžinierstve.",
    "contact.sendEmail": "Odoslať email",
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
    "nav.skills": "Skills",
    "nav.education": "Education",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "nav.downloadCv": "Resume (PDF)",

    // Hero Section
    "hero.badge": "Open to new opportunities",
    "hero.pretitle": "IT Systems Analysis • Software Engineering • Data & AI",
    "hero.subtitle": "Information Management Engineer (EUBA) & Android Developer (WBPO)",
    "hero.description": "Thanks to my hands-on background in software development, I have a deep understanding of system architecture. This enables me to be an equal partner to software engineers and design solutions that precisely meet business expectations and can be reliably implemented.",
    "hero.ctaProjects": "View Projects",
    "hero.ctaDownload": "Download Resume (PDF)",
    "hero.ctaContact": "Contact Me",
    "hero.stat1": "Data Science in Economics",
    "hero.stat2": "Information Management",
    "hero.stat3": "Android Dev & Analysis",
    "hero.captionRole": "Android Developer (WBPO) • PhD. Candidate (EUBA)",
    "hero.captionLoc": "Bratislava, Slovakia",

    // About Section
    "about.tag": "PROFILE",
    "about.title": "Systems Analysis, Data & Software Engineering",
    "about.subtitle": "Combining analytical rigor with hands-on application development expertise",
    "about.quote": "I am an Information Management engineer specializing in <strong>IT analysis</strong>, <strong>data</strong>, and <strong>artificial intelligence</strong>. With hands-on experience in software development, I thoroughly understand the technical landscape. This allows me to act as an <strong>equal partner to software developers</strong> and design solutions that precisely satisfy business requirements and can be realistically implemented.",
    
    // Pillars
    "pillar1.title": "IT Analysis & Systems Design",
    "pillar1.desc": "UML and BPMN modeling, Enterprise Architect, thorough requirements decomposition, integration interface specifications, and robust documentation.",
    "pillar2.title": "Application Development & Logic",
    "pillar2.desc": "Mobile development in Kotlin (KMP) and Java, REST API design and consumption, JSON schemas, Git repository management, and agile delivery in SCRUM.",
    "pillar3.title": "Data Modeling & Business Intelligence",
    "pillar3.desc": "Relational database modeling with Oracle SQL, ETL data pipeline transformations, dimensional modeling, and interactive dashboards in Power BI, Python, and Tableau.",
    "pillar4.title": "Artificial Intelligence & AI Engineering",
    "pillar4.desc": "LLM integrations, autonomous agent orchestration, local models, and AI-Driven Development (AIDD) methods to streamline engineering velocity.",

    // Experience Section
    "exp.tag": "CAREER",
    "exp.title": "Work Experience & Projects",
    "exp.subtitle": "Production engineering, technical analysis, and academic research",
    "exp.wbpo.period": "2025 – Present",
    "exp.wbpo.status": "Current Position",
    "exp.wbpo.b1": "Independently breaking down requirements into actionable analysis for engineering and application logic design.",
    "exp.wbpo.b2": "Designing integration interfaces (REST API, JSON) with active communication with backend engineers and solution architects.",
    "exp.wbpo.b3": "Drafting test scenarios, resolving edge cases, handling error states, and collaborating effectively in an agile SCRUM team.",
    
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
    "skills.tag": "CORE COMPETENCIES",
    "skills.title": "Skills & Tech Stack",
    "skills.subtitle": "Technical and analytical tools applied in real-world environments",
    "skills.tabAll": "All",
    "skills.tabAnalysis": "IT Analysis",
    "skills.tabData": "Data & SQL",
    "skills.tabDev": "Engineering",
    "skills.tabAi": "Artificial Intelligence",
    "skills.tabMethod": "Methodologies",

    "skills.cat1.title": "IT Analysis & Modeling",
    "skills.cat1.sub": "Systems design and specifications",
    "skills.cat2.title": "Data & Databases",
    "skills.cat2.sub": "SQL, modeling, and visualization",
    "skills.cat3.title": "Technologies & Development",
    "skills.cat3.sub": "Mobile and software engineering",
    "skills.cat4.title": "Artificial Intelligence (AI)",
    "skills.cat4.sub": "LLM integrations and agent architectures",
    "skills.cat5.title": "Methodologies & Tools",
    "skills.cat5.sub": "Project governance and team workflows",
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
    "edu.subtitle": "Academic background and professional industry credentials",
    "edu.col1Title": "Education",
    "edu.col2Title": "Certifications & Workshops",

    "edu.phdFocus": "Doctoral research focused on advanced data science methodologies and AI integration in economic systems.",
    "edu.ingFocus": "Master's degree: IT process governance, enterprise information systems, IT analysis, and project leadership.",
    "edu.bcFocus": "Bachelor's degree: Software engineering, relational databases, data structures, and machine learning models.",

    "cert.ipma": "International project management standard, delivery methodologies, and process competencies.",
    "cert.hackathon": "Solving real-world sustainability challenges using agile frameworks and collaborative problem-solving.",
    "cert.scrum": "Hands-on mastery of agile methodologies, sprint iterations, and SCRUM framework.",
    "cert.amcham": "Successfully completed intensive development program for soft skills, business negotiation, and leadership.",

    // Projects Section
    "proj.tag": "PORTFOLIO",
    "proj.title": "Featured Projects",
    "proj.subtitle": "Repositories, data models, and source code on GitHub",
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
    "contact.title": "Get In Touch",
    "contact.subtitle": "Looking for an IT Analyst, Android Developer, or Data & AI Specialist?",
    "contact.emailLabel": "Email",
    "contact.phoneLabel": "Phone",
    "contact.bannerTitle": "Open to New Collaborations",
    "contact.bannerDesc": "I would be glad to discuss opportunities in IT analysis, mobile development, or data initiatives.",
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
