# Ruslana Buinytska — Portfolio & CV Website 🚀

Moderná osobná webová stránka a interaktívne CV vytvorené pre **Ruslanu Buinytsku** (Android Developer, IT Analyst, Data Science & AI).

---

## ✨ Kľúčové Vlastnosti / Features

- 🌓 **Tmavý & Svetlý Režim (Dark / Light Mode)** — Automatická detekcia systémových preferencií OS + prepínač s uložením v `localStorage`.
- 🌍 **Dvojjazyčnosť (Bilingual SK / EN)** — Plynulé okamžité prepínanie medzi slovenčinou a angličtinou bez nutnosti znovunačítania stránky.
- 📱 **Plne Responzívny Moderný Dizajn** — Glassmorphism (sklenený efekt), prémiová typografia (Outfit + Plus Jakarta Sans), plynulé mikroanimácie a optimalizácia pre mobilné zariadenia.
- 🔍 **Filtrovanie Zručností (Skill Filters)** — Interaktívne kategórie (IT Analýza, Dáta & SQL, Vývoj, AI, Metodiky).
- 📋 **Rýchle Kopírovanie Kontaktov** — Kopírovanie emailu a telefónu na jeden klik s toast notifikáciou.
- 📄 **Stiahnutie Originálneho CV** — Priamy odkaz na stiahnutie `Ruslana_Buinytska_CV.pdf`.
- ⚡ **100% Čistý Web (Zero Build Step)** — Čistý HTML5, CSS3 a JavaScript bez ťažkých závislostí = bleskurýchle načítanie a nulová údržba na GitHub Pages.

---

## 📁 Štruktúra Projektu

```text
CV_Web/
├── index.html                  # Hlavná štruktúra s i18n atribútmi a SEO
├── style.css                   # Dizajnový systém, CSS premenné, responzivita
├── script.js                   # Preklady (SK/EN), dark mode, filtre, toast
├── assets/
│   ├── profile.jpg             # Pôvodná profilová fotografia
│   ├── Ruslana_Buinytska_CV.pdf# Originálne CV v PDF na stiahnutie
│   └── favicon.svg             # Moderná SVG ikona (monogram RB)
└── README.md                   # Návod a dokumentácia
```

---

## 🌐 Ako Publikovať na GitHub Pages (GitHub Student Pack)

Vďaka **GitHub Student Developer Pack** máš:
1. **GitHub Pages zadarmo** s neobmedzeným SSL certifikátom a globálnym CDN.
2. **Možnosť bezplatnej vlastnej domény** (napr. cez Namecheap `.me` zadarmo na 1 rok).

### Možnosť A: Ako tvoja hlavná stránka používateľa (`rusbuin.github.io`)
Ak chceš, aby tvoj web bežal priamo na adrese `https://rusbuin.github.io`:

1. Na GitHube vytvor **nový repozitár** s presným názvom:
   ```text
   RusBuin.github.io
   ```
   *(Uisti sa, že je nastavený ako **Public**)*

2. V termináli v tomto priečinku spusti:
   ```bash
   git remote add origin https://github.com/RusBuin/RusBuin.github.io.git
   git branch -M main
   git push -u origin main
   ```

3. Web bude automaticky dostupný na: **`https://rusbuin.github.io`**!

---

### Možnosť B: Ako projektový repozitár (napr. `portfolio` alebo `cv`)
Ak chceš repozitár nazvať napríklad `portfolio` alebo `cv`:

1. Vytvor repozitár na GitHube (napr. `cv`):
   ```bash
   git remote add origin https://github.com/RusBuin/cv.git
   git branch -M main
   git push -u origin main
   ```
2. V repozitári na GitHube klikni na:
   **Settings** ➔ **Pages** ➔ v sekcii **Build and deployment** vyber **Deploy from a branch** ➔ Branch: `main` / `root` ➔ Klikni **Save**.
3. Po 1 minúte bude web live na: **`https://rusbuin.github.io/cv/`**

---

### Možnosť C: Vlastná doména zo Student Packu (napr. `ruslana.me`)
1. V balíku **GitHub Student Developer Pack** (education.github.com/pack) aktivuj Namecheap ponuku (doména `.me` zadarmo na 1 rok).
2. V GitHube v nastaveniach Pages (Settings ➔ Pages ➔ Custom domain) zadaj svoju doménu a zaškrtni **Enforce HTTPS**.
