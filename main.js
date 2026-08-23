(function () {
  const year = new Date().getFullYear();
  const t = {
    en: {
      subtitle:             "DevOps, Web & Mobile Engineer · Vienna",
      tagline:              "I build the software people use and the infrastructure it runs on. From mobile apps to automated server pipelines, I work across the full stack.",
      "section.areas":      "Areas of work",
      "card.apps.title":    "Web & mobile apps",
      "card.apps.desc":     "Building interfaces that run in the browser or on your phone, connected to solid backend services.",
      "card.deploy.title":  "Deployment & automation",
      "card.deploy.desc":   "Setting up the systems that test and ship software automatically, so teams focus on building instead of releasing.",
      "card.data.title":    "Data engineering",
      "card.data.desc":     "Designing pipelines that collect, clean and organise raw data into something teams can actually use.",
      "card.infra.title":   "Infrastructure & security",
      "card.infra.desc":    "Running servers and networks, keeping traffic routed correctly and systems protected from the outside.",
      "section.skills":     "Skills & expertise",
      "skill.web.title":    "Web & Mobile Development",
      "skill.web.desc":     "Full-stack applications from database to user interface, including cross-platform mobile development with React Native.",
      "skill.devops.title": "DevOps & Infrastructure",
      "skill.devops.desc":  "Containers, orchestration and CI/CD pipelines that take code from a developer's machine into production reliably.",
      "skill.data.title":   "Data Engineering & AI",
      "skill.data.desc":    "Building pipelines that move and transform data, modelling databases, and applying machine learning to text and structured data.",
      "skill.sec.title":    "Infrastructure Security",
      "skill.sec.desc":     "Protecting services at every layer: network perimeter, runtime behaviour, secrets management and continuous security auditing.",
      "tg.languages":       "Languages",
      "tg.frontend":        "Frontend & mobile",
      "tg.backend":         "Backend & API",
      "tg.quality":         "Quality",
      "tg.containers":      "Containers & orchestration",
      "tg.cicd":            "CI/CD & dependency management",
      "tg.observability":   "Observability",
      "tg.networking":      "Networking",
      "tg.storage":         "Storage & secrets",
      "tg.servers":         "Servers",
      "tg.databases":       "Databases & warehousing",
      "tg.ml":              "Machine learning & NLP",
      "tg.threats":         "Threat detection & response",
      "tg.auditing":        "Auditing & hardening",
      "tg.perimeter":       "Network perimeter",
      "tg.secrets":         "Secrets & access",
      "details.summary":    "Technologies",
      "contact.title":      "Get in touch",
      "contact.desc":       "Whether it's a project, a question, or just a conversation, feel free to reach out.",
      footer:               `Florian Klement · Vienna · ${year}`,
    },
    de: {
      subtitle:             "DevOps, Web & Mobile Engineer · Wien",
      tagline:              "Ich entwickle Software und die Infrastruktur, auf der sie läuft. Von mobilen Apps bis zu automatisierten Server-Pipelines arbeite ich über den gesamten Stack.",
      "section.areas":      "Tätigkeitsfelder",
      "card.apps.title":    "Web- & Mobile-Apps",
      "card.apps.desc":     "Oberflächen, die im Browser oder auf dem Smartphone laufen, verbunden mit stabilen Backend-Diensten.",
      "card.deploy.title":  "Deployment & Automatisierung",
      "card.deploy.desc":   "Systeme, die Software automatisch testen und ausliefern, damit Teams sich auf die Entwicklung konzentrieren können.",
      "card.data.title":    "Data Engineering",
      "card.data.desc":     "Pipelines, die Rohdaten sammeln, bereinigen und so aufbereiten, dass Teams damit arbeiten können.",
      "card.infra.title":   "Infrastruktur & Sicherheit",
      "card.infra.desc":    "Server und Netzwerke betreiben, Traffic korrekt routen und Systeme gegen externe Bedrohungen schützen.",
      "section.skills":     "Skills & Kenntnisse",
      "skill.web.title":    "Web- & Mobile-Entwicklung",
      "skill.web.desc":     "Full-Stack-Anwendungen von der Datenbank bis zur Oberfläche, einschließlich plattformübergreifender mobiler Apps mit React Native.",
      "skill.devops.title": "DevOps & Infrastruktur",
      "skill.devops.desc":  "Container, Orchestrierung und CI/CD-Pipelines, die Code zuverlässig vom Entwickler-Rechner in die Produktion bringen.",
      "skill.data.title":   "Data Engineering & AI",
      "skill.data.desc":    "Pipelines zum Transformieren von Daten, Datenbankmodellierung und Anwendung von maschinellem Lernen auf Text und strukturierte Daten.",
      "skill.sec.title":    "Infrastruktursicherheit",
      "skill.sec.desc":     "Dienste auf allen Ebenen schützen: Netzwerkperimeter, Laufzeitverhalten, Secrets-Management und kontinuierliche Sicherheitsprüfung.",
      "tg.languages":       "Sprachen",
      "tg.frontend":        "Frontend & Mobil",
      "tg.backend":         "Backend & API",
      "tg.quality":         "Qualitätssicherung",
      "tg.containers":      "Container & Orchestrierung",
      "tg.cicd":            "CI/CD & Abhängigkeitsverwaltung",
      "tg.observability":   "Observability",
      "tg.networking":      "Netzwerk",
      "tg.storage":         "Storage & Secrets",
      "tg.servers":         "Server",
      "tg.databases":       "Datenbanken & Warehousing",
      "tg.ml":              "Maschinelles Lernen & NLP",
      "tg.threats":         "Bedrohungserkennung",
      "tg.auditing":        "Auditing & Härtung",
      "tg.perimeter":       "Netzwerkperimeter",
      "tg.secrets":         "Secrets & Zugriff",
      "details.summary":    "Technologien",
      "contact.title":      "Kontakt",
      "contact.desc":       "Ob Projekt, Frage oder einfach ein Gespräch, gerne melden.",
      footer:               `Florian Klement · Wien · ${year}`,
    }
  };

  const systemLang = navigator.language.startsWith('de') ? 'de' : 'en';
  let lang = localStorage.getItem('lang') || systemLang;

  function applyLang(l) {
    lang = l;
    localStorage.setItem('lang', l);
    document.documentElement.lang = l;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[l][key] !== undefined) el.textContent = t[l][key];
    });
    document.getElementById('lang-btn').textContent = l === 'en' ? 'DE' : 'EN';
  }

  document.getElementById('lang-btn').addEventListener('click', () => {
    applyLang(lang === 'en' ? 'de' : 'en');
  });

  const moon = document.getElementById('icon-moon');
  const sun  = document.getElementById('icon-sun');

  function isDark() {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  function applyTheme(dark) {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    localStorage.setItem('theme', dark ? 'dark' : 'light');
    moon.style.display = dark ? 'none' : '';
    sun.style.display  = dark ? ''     : 'none';
  }

  document.getElementById('theme-btn').addEventListener('click', () => {
    applyTheme(!isDark());
  });

  applyLang(lang);
  applyTheme(isDark());

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!localStorage.getItem('theme')) applyTheme(e.matches);
  });
})();
