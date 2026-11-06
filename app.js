/* ============================================================
   Omar Ahmed — Portfolio behaviour
   No dependencies. Everything is data-driven from this file.
   ============================================================ */
(() => {
  "use strict";

  /* ---------------- Helpers ---------------- */
  const $ = (selector, context = document) => context.querySelector(selector);
  const $$ = (selector, context = document) => [...context.querySelectorAll(selector)];
  const EMAIL = "omarahameds2010@gmail.com";
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isFinePointer = window.matchMedia("(pointer: fine)").matches;
  const isMobileViewport = () => window.innerWidth <= 960;

  const esc = (value) =>
    String(value).replace(/[&<>"']/g, (character) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    }[character]));

  const escXml = (value) =>
    String(value).replace(/[<>&"']/g, (character) => ({
      "<": "&lt;",
      ">": "&gt;",
      "&": "&amp;",
      '"': "&quot;",
      "'": "&apos;",
    }[character]));

  /* ---------------- Categories ---------------- */
  const CATEGORIES = {
    web: { en: "Web", ar: "ويب", color: "#d8b56a" },
    ai: { en: "AI & ML", ar: "ذكاء اصطناعي", color: "#5ce1e6" },
    education: { en: "Education", ar: "تعليم", color: "#6ee7a8" },
    security: { en: "Security", ar: "أمان", color: "#fb7185" },
    tools: { en: "Tools", ar: "أدوات", color: "#b69cff" },
    ecommerce: { en: "E-commerce", ar: "تجارة إلكترونية", color: "#f7a35c" },
    data: { en: "Data", ar: "بيانات", color: "#7dd3fc" },
  };

  /* ---------------- Projects ---------------- */
  const PROJECTS = [
    {
      id: "omar-os",
      name: { en: "OmarOS v2.0", ar: "OmarOS v2.0" },
      desc: {
        en: "A browser-based operating-system portfolio with draggable windows, a terminal emulator, Snake, a music player, and a skills radar.",
        ar: "بورتفوليو على شكل نظام تشغيل داخل المتصفح: نوافذ قابلة للسحب، طرفية، لعبة Snake، مشغل موسيقى، ومخطط مهارات راداري.",
      },
      tags: ["HTML", "CSS", "JavaScript", "Canvas"],
      cats: ["web", "tools"],
      category: "web",
      mark: "OS",
      repo: "https://github.com/omarahameds2010-lab/omar-os",
      live: "https://omarahameds2010-lab.github.io/omar-os/",
      image: "https://lh3.googleusercontent.com/d/1owy7xOOvQRI-UAUadaUdKuzwiAd6wWlS=w1200",
      featured: true,
    },
    {
      id: "linguastory",
      name: { en: "LinguaStory", ar: "LinguaStory" },
      desc: {
        en: "A React English-learning app built around collaborative AI storytelling, with XP, streaks, and daily challenges.",
        ar: "تطبيق React لتعلم الإنجليزية عبر سرد قصصي تعاوني بالذكاء الاصطناعي، مع نظام XP وstreaks وتحديات يومية.",
      },
      tags: ["React", "AI", "Education"],
      cats: ["web", "ai", "education"],
      category: "ai",
      mark: "LS",
      repo: "https://github.com/omarahameds2010-lab/LinguaStory",
      image: "https://lh3.googleusercontent.com/d/1ifSQqNkt3vZ131jb5Ucg14iI_-owFStL=w1200",
      featured: true,
    },
    {
      id: "arabic-platform",
      name: { en: "Arabic Learning Platform", ar: "منصة تعلم العربية" },
      desc: {
        en: "A complete RTL Arabic learning platform gifted to a teacher: authentication, admin and student dashboards, an exam engine, and protected video.",
        ar: "منصة تعلم عربية RTL كاملة أُهديت لمعلم: تسجيل دخول، لوحات إدارة وطالب، محرك امتحانات، وفيديو محمي.",
      },
      tags: ["HTML", "CSS", "JavaScript", "RTL", "Auth"],
      cats: ["web", "education"],
      category: "education",
      mark: "AR",
      repo: "https://github.com/omarahameds2010-lab/Saleh-Arabic-Platform",
      image: "https://lh3.googleusercontent.com/d/1kPP8XAvzeJIplkeCJzC0aE1NZ9Kah2sU=w1200",
      featured: true,
    },
    {
      id: "semantic-ai",
      name: { en: "Semantic Communication AI", ar: "الذكاء الاصطناعي للاتصال الدلالي" },
      desc: {
        en: "A VQ-VAE system in PyTorch that compresses IoT data semantically, with training scripts and clear visualizations.",
        ar: "نظام VQ-VAE بـ PyTorch يضغط بيانات إنترنت الأشياء دلاليًا، مع سكريبتات تدريب ورسومات توضيحية.",
      },
      tags: ["Python", "PyTorch", "VQ-VAE", "IoT"],
      cats: ["ai"],
      category: "ai",
      mark: "SC",
      repo: "https://github.com/omarahameds2010-lab/Ultra-Efficient-Semantic-Communication",
      image: "https://lh3.googleusercontent.com/d/1thhpKGo88xI1lNlF6CGYdeWKjDjxyvIr=w1200",
      featured: true,
    },
    {
      id: "wave-store",
      name: { en: "Wave Streetwear Platform", ar: "منصة Wave للملابس" },
      desc: {
        en: "A full-stack e-commerce platform for the Wave streetwear brand, powered by a Node.js and MongoDB Atlas API.",
        ar: "منصة تجارة إلكترونية كاملة لماركة Wave، مبنية على واجهة Node.js وMongoDB Atlas.",
      },
      tags: ["Node.js", "MongoDB", "Express", "E-commerce"],
      cats: ["web", "ecommerce"],
      category: "ecommerce",
      mark: "WV",
      repo: "https://github.com/omarahameds2010-lab/wave-store",
      live: "https://omarahameds2010-lab.github.io/wave-store/",
      image: "https://lh3.googleusercontent.com/d/1iEf73IqPPy4TIyzpQG4mnAcmJanwoe1n=w1200",
      featured: true,
    },
    {
      id: "omar-pizza",
      name: { en: "OmarPizza Ultimate", ar: "OmarPizza Ultimate" },
      desc: {
        en: "A restaurant app with a live cart, order tracking, and an admin dashboard hardened against XSS, SQL injection, and brute force.",
        ar: "تطبيق مطعم بعربة شراء مباشرة وتتبع طلبات، ولوحة إدارة محصّنة ضد XSS وحقن SQL وهجمات القوة الغاشمة.",
      },
      tags: ["Node.js", "Security", "Full-stack"],
      cats: ["web", "security"],
      category: "security",
      mark: "OP",
      repo: "https://github.com/omarahameds2010-lab/OmarPizza",
      image: "https://lh3.googleusercontent.com/d/1hogmMH4-1GdmEROxb9kC3yLrp8qSptXe=w1200",
      featured: true,
    },
    {
      id: "medical-clinic",
      name: { en: "Medical Clinic Website", ar: "موقع عيادة طبية" },
      desc: {
        en: "A live medical clinic website and my first paid client project — designed, built, and delivered end to end.",
        ar: "موقع عيادة طبية مباشر وأول مشروع عميل مدفوع — صُمم وبُني وسُلّم من البداية للنهاية.",
      },
      tags: ["HTML", "CSS", "JavaScript", "Client work"],
      cats: ["web"],
      category: "web",
      mark: "MC",
      repo: "https://github.com/omarahameds2010-lab/dr-ahmed-website",
      image: "https://lh3.googleusercontent.com/d/1Knou5MvacYli2dYOOCaOORr_NLo0_H9Q=w1200",
      featured: true,
    },
    {
      id: "python-basics",
      name: { en: "Python Basics Course", ar: "دورة أساسيات Python" },
      desc: {
        en: "A beginner Python course covering variables, strings, data types, conditionals, loops, and functions.",
        ar: "دورة Python للمبتدئين تغطي المتغيرات والنصوص وأنواع البيانات والشروط والحلقات والدوال.",
      },
      tags: ["Python", "Education"],
      cats: ["education", "tools"],
      category: "education",
      mark: "PY",
      repo: "https://github.com/omarahameds2010-lab/python-Basics",
      image: "https://lh3.googleusercontent.com/d/1Hg_fxVoj7AkUXjXQhh6tVN9U3AZtQ6sE=w1200",
      featured: true,
    },
    {
      id: "smart-home",
      name: { en: "Secure Smart Home Eco-System", ar: "منظومة المنزل الذكي الآمن" },
      desc: {
        en: "A Digital Egypt Cubs graduation project: Flask API, ESP32 biometric access, an energy calculator, and a CIA-triad safety circuit.",
        ar: "مشروع تخرج Digital Egypt Cubs: خادم Flask، دخول بيومتري بـ ESP32، حاسبة طاقة، ودائرة أمان مبنية على CIA Triad.",
      },
      tags: ["Flask", "ESP32", "IoT Security", "Python"],
      cats: ["ai", "security", "tools"],
      category: "security",
      mark: "SH",
      repo: "https://github.com/omarahameds2010-lab/-smart-home-ecosystem",
      image: "https://lh3.googleusercontent.com/d/1QbsMB92pOwZIGmTfq01Ceu5Gr3ZR-h1z=w1200",
      featured: true,
    },
    {
      id: "sanad",
      name: { en: "SANAD — Arabic RAG Evaluation Platform", ar: "SANAD — منصة تقييم RAG العربية" },
      desc: {
        en: "An Arabic-first RAG evaluation platform with Arabic-aware chunking, embedding comparison, and a golden dataset that measures precision, recall, groundedness, and hallucination.",
        ar: "منصة تقييم RAG عربية أولًا، بتقطيع واعٍ بالعربية، ومقارنة نماذج تضمين، ومجموعة بيانات ذهبية تقيس الدقة والاستدعاء والارتكاز والهلوسة.",
      },
      tags: ["Python", "RAG", "Embeddings", "Docker"],
      cats: ["ai"],
      category: "ai",
      mark: "SN",
      repo: "https://github.com/omarahameds2010-lab/sanad-rag",
      image: "https://lh3.googleusercontent.com/d/1N342r5h1KN-enYdOZB-Ga9LeOV3RaPjQ=w1200",
      featured: true,
    },
    {
      id: "meridian",
      name: { en: "Meridian — Market Terminal", ar: "Meridian — طرفية الأسواق" },
      desc: {
        en: "A collaborative market terminal that turns live indicators into structured, boundary-aware decision surfaces.",
        ar: "طرفية أسواق تعاونية تحوّل المؤشرات الحية إلى أسطح قرار منظمة بحدود واضحة.",
      },
      tags: ["Product engineering", "Market analytics", "Live data"],
      cats: ["web", "ai", "tools"],
      category: "ai",
      mark: "MR",
      live: "https://omarahameds2010-lab.github.io/MERIDIAN/",
      image: "https://lh3.googleusercontent.com/d/1gEI6441WfAdRe5eu7Ar6d41rQtKqhPeX=w1200",
      featured: true,
    },
    {
      id: "cv-studio",
      name: { en: "CV Studio", ar: "CV Studio" },
      desc: {
        en: "A SaaS-style CV builder with a multi-step wizard, live preview, six templates, AI writing help, and a multi-CV dashboard.",
        ar: "منشئ سير ذاتية بأسلوب SaaS: معالج متعدد الخطوات، معاينة حية، ستة قوالب، مساعدة كتابة بالذكاء الاصطناعي، ولوحة لإدارة أكثر من سيرة.",
      },
      tags: ["Next.js", "React", "TypeScript", "Tailwind"],
      cats: ["web", "ai", "tools"],
      category: "web",
      mark: "CV",
      live: "https://cv-studio-woad-beta.vercel.app/",
      image: "cv_studio_cover.jpg",
      featured: true,
    },
    {
      id: "arabic-platform-v2",
      name: { en: "Arabic Learning Platform v2", ar: "منصة تعلم العربية v2" },
      desc: {
        en: "A refined second version with an updated design system, cleaner navigation, and smoother student flows.",
        ar: "نسخة ثانية محسّنة بنظام تصميم محدّث وتنقل أوضح وتجربة طالب أكثر سلاسة.",
      },
      tags: ["HTML", "CSS", "JavaScript", "RTL"],
      cats: ["web", "education"],
      category: "education",
      mark: "AR2",
      repo: "https://github.com/omarahameds2010-lab/Saleh--Arabic--Platform",
      featured: false,
    },
    {
      id: "portfolio-extreme",
      name: { en: "Portfolio Extreme V.3", ar: "Portfolio Extreme V.3" },
      desc: {
        en: "An earlier experimental portfolio exploring bold motion, dramatic UI effects, and creative front-end techniques.",
        ar: "بورتفوليو تجريبي سابق يستكشف الحركة الجريئة وتأثيرات الواجهة الدرامية وتقنيات front-end الإبداعية.",
      },
      tags: ["HTML", "CSS", "JavaScript", "Creative UI"],
      cats: ["web"],
      category: "web",
      mark: "EX",
      repo: "https://github.com/omarahameds2010-lab/OMAR--Portofolio-Extreme-V.3",
      featured: false,
    },
    {
      id: "portfolio-cv",
      name: { en: "Portfolio CV", ar: "بورتفوليو السيرة الذاتية" },
      desc: {
        en: "The bilingual CV-style portfolio that preceded this one, with skills, projects, certificates, and EN/AR support.",
        ar: "البورتفوليو السابق بأسلوب السيرة الذاتية، ثنائي اللغة، مع مهارات ومشاريع وشهادات ودعم EN/AR.",
      },
      tags: ["HTML", "CSS", "JavaScript", "Bilingual"],
      cats: ["web"],
      category: "web",
      mark: "CV",
      repo: "https://github.com/omarahameds2010-lab/portfolio-",
      featured: false,
    },
    {
      id: "gh-bags",
      name: { en: "GH Bags", ar: "GH Bags" },
      desc: {
        en: "An e-commerce storefront for a bags brand with a clean product showcase and a simple shopping flow.",
        ar: "متجر إلكتروني لماركة حقائب، بعرض منتجات نظيف وتجربة شراء بسيطة.",
      },
      tags: ["E-commerce", "HTML", "CSS", "JavaScript"],
      cats: ["web", "ecommerce"],
      category: "ecommerce",
      mark: "GH",
      repo: "https://github.com/omarahameds2010-lab/GH-Bags",
      featured: false,
    },
    {
      id: "dokan-lbs",
      name: { en: "DOKAN LBS", ar: "DOKAN LBS" },
      desc: {
        en: "A location-based storefront concept that connects local businesses with dynamic product listings.",
        ar: "فكرة متجر قائم على الموقع يربط الأعمال المحلية بقوائم منتجات ديناميكية.",
      },
      tags: ["Web app", "Location-based", "JavaScript"],
      cats: ["web", "ecommerce"],
      category: "ecommerce",
      mark: "DK",
      repo: "https://github.com/omarahameds2010-lab/DOKAN---LBS",
      featured: false,
    },
    {
      id: "dokan-lbs-v2",
      name: { en: "DOKAN LBS v2", ar: "DOKAN LBS v2" },
      desc: {
        en: "A refined DOKAN build with a stronger UI and more complete product-management features.",
        ar: "نسخة محسّنة من DOKAN بواجهة أقوى وميزات إدارة منتجات أكمل.",
      },
      tags: ["Web app", "JavaScript", "UI"],
      cats: ["web", "ecommerce"],
      category: "ecommerce",
      mark: "DK2",
      repo: "https://github.com/omarahameds2010-lab/DOKAN-LBS",
      featured: false,
    },
    {
      id: "cinematic-bike",
      name: { en: "Cinematic Bike Race", ar: "سباق الدراجات السينمائي" },
      desc: {
        en: "A cinematic web experience built around bold visual storytelling and motion.",
        ar: "تجربة ويب سينمائية مبنية على سرد بصري جريء وحركة.",
      },
      tags: ["Creative UI", "Motion", "JavaScript"],
      cats: ["web"],
      category: "web",
      mark: "BR",
      repo: "https://github.com/omarahameds2010-lab/Cinematic-bike-race-",
      featured: false,
    },
    {
      id: "temperature-converter",
      name: { en: "Temperature Converter", ar: "محوّل درجات الحرارة" },
      desc: {
        en: "A fast, focused utility for converting between temperature units without friction.",
        ar: "أداة سريعة ومركّزة لتحويل وحدات الحرارة بلا تعقيد.",
      },
      tags: ["JavaScript", "Utility", "Tool"],
      cats: ["tools"],
      category: "tools",
      mark: "TC",
      repo: "https://github.com/omarahameds2010-lab/temperature-converte-web",
      featured: false,
    },
    {
      id: "expenses-tracker",
      name: { en: "Expenses Tracker", ar: "متتبع المصروفات" },
      desc: {
        en: "A personal finance tool for logging, categorizing, and summarizing everyday expenses.",
        ar: "أداة مالية شخصية لتسجيل المصروفات اليومية وتصنيفها وتلخيصها.",
      },
      tags: ["JavaScript", "Finance", "Data"],
      cats: ["tools", "data"],
      category: "data",
      mark: "ET",
      repo: "https://github.com/omarahameds2010-lab/cuddly-octo-system-Expanses-",
      featured: false,
    },
    {
      id: "codewars-live",
      name: { en: "Codewars Live", ar: "Codewars Live" },
      desc: {
        en: "A running log of algorithm challenges and Codewars solutions — practice made visible.",
        ar: "سجل مستمر لتحديات الخوارزميات وحلول Codewars — التدريب بشكل مرئي.",
      },
      tags: ["Python", "Algorithms", "Problem solving"],
      cats: ["education", "tools"],
      category: "tools",
      mark: "CW",
      repo: "https://github.com/omarahameds2010-lab/Codewars-live",
      featured: false,
    },
  ];

  /* ---------------- Copy ---------------- */
  const I18N = {
    en: {
      "meta.title": "Omar Ahmed — Builder, Engineer, Systems Thinker",
      "meta.description": "Omar Ahmed is a full-stack developer and AI systems builder from Cairo. Explore selected work in secure SaaS, Arabic RAG, web products, and IoT security.",
      "logo.role": "Builder · Engineer",
      "nav.home": "Home",
      "nav.story": "Story",
      "nav.work": "Work",
      "nav.projects": "Projects",
      "nav.skills": "Skills",
      "nav.credentials": "Credentials",
      "nav.contact": "Contact",
      "nav.archive": "Archive",
      "nav.cta": "Let's talk",
      "nav.menu": "Open menu",
      "nav.close": "Close menu",
      "mobile.note": "Cairo, Egypt · Open to internships & freelance",
      "hero.eyebrow": "Cairo, Egypt · Open to internships & freelance",
      "hero.name": "Omar<br /><em>Ahmed</em>",
      "hero.tagline": 'I turn ambitious ideas into <span class="gold">systems that ship</span>.',
      "hero.sub": "From Arabic-first RAG platforms to secure multi-tenant SaaS, I care about the details that make a product real: architecture, security, performance, and the people using it.",
      "hero.ctaWork": "Explore selected work",
      "hero.ctaContact": "Start a conversation",
      "hero.chip1": "AI systems",
      "hero.chip2": "Full-stack",
      "hero.chip3": "Security",
      "hero.chip4": "Product & leadership",
      "hero.available": "Available for select projects",
      "hero.location": "Cairo, Egypt",
      "hero.stat1Label": "Public repositories",
      "hero.stat2Label": "Certificates",
      "hero.stat3Label": "Languages",
      "hero.stat4Value": "Final 5",
      "hero.stat4Label": "National competition",
      "hero.cardKicker": "Currently building",
      "hero.cardTitle": "Secure multi-tenant e-learning",
      "story.label": "The story",
      "story.title": "Built in public.<br /><em>Learned by doing.</em>",
      "story.desc": "I didn't start with a perfect plan. I started by building, shipping, and asking better questions.",
      "story.p1": "My first projects were small experiments. Then came real clients, a national competition, and AI systems that had to prove they worked. Each step made one thing clear: I want to build technology that holds up outside the demo.",
      "story.p2": "Today I work across the stack — from database-level security and APIs to the interface people actually touch. I lead when the team needs direction, document what I learn, and keep shipping.",
      "story.pull": "The goal is not to look busy. It is to make things that work.",
      "timeline.2024.title": "The first build",
      "timeline.2024.desc": "Started with code, small experiments, and the habit of finishing things.",
      "timeline.2025.title": "From exercises to products",
      "timeline.2025.desc": "Moved into AI experiments, client work, and projects with real users.",
      "timeline.2026.title": "Lead, ship, go deeper",
      "timeline.2026.desc": "Led a national Final 5 team, built secure systems, and started working with real clients.",
      "timeline.next.year": "NEXT",
      "timeline.next.title": "Scale the systems",
      "timeline.next.desc": "Moving from standalone apps to secure, multi-tenant platforms built for real load.",
      "proof.kicker": "Proof",
      "proof.title": "Proof, not promises.",
      "proof.reposLabel": "Public repositories",
      "proof.finalValue": "Final 5",
      "proof.finalLabel": "National competition",
      "proof.clientValue": "1st",
      "proof.clientLabel": "Paid client delivered",
      "proof.certsLabel": "Certificates earned",
      "proof.note": "Every number here is tied to something I actually built, joined, or shipped.",
      "work.label": "Selected work",
      "work.title": "Two systems I'm <em>proud of</em>.",
      "work.desc": "One is about secure architecture at scale. The other is about making AI measurable instead of magical.",
      "work.f1.kicker": "01 — Flagship platform",
      "work.f1.title": "Secure Multi-Tenant E-Learning Platform",
      "work.f1.desc": "A SaaS learning platform designed around strict tenant isolation and defense in depth: PostgreSQL Row-Level Security with FORCE RLS, a non-superuser app user, host-based tenant routing, and a seven-layer authorization engine covering tenant checks, RBAC, ownership, entitlements, feature flags, tenant policies, and plan limits.",
      "work.f1.link": "Open live architecture",
      "work.f2.kicker": "02 — Flagship AI",
      "work.f2.title": "SANAD — Arabic RAG Evaluation Platform",
      "work.f2.desc": "An evaluation-first Arabic RAG system built around Arabic-aware chunking, embedding comparison, and a golden dataset that measures precision, recall, groundedness, and hallucination. No invented benchmarks.",
      "work.f2.link": "Explore SANAD on GitHub",
      "work.metricKicker": "Measured, not guessed",
      "work.metric": "EVALUATION<br />FIRST",
      "work.metric.precision": "Precision",
      "work.metric.recall": "Recall",
      "work.metric.groundedness": "Groundedness",
      "work.metric.hallucination": "Hallucination",
      "work.metric.measured": "Measured",
      "arch.request": "Request",
      "arch.layer1": "Host-based tenant routing",
      "arch.layer2": "PostgreSQL FORCE RLS",
      "arch.layer3": "RBAC + ownership",
      "arch.layer4": "Entitlements & feature flags",
      "arch.layer5": "Tenant policies & plan limits",
      "arch.foot": "7-layer authorization · Zero trust · Non-superuser app role",
      "projects.label": "Project archive",
      "projects.title": "A body of work, not a <em>highlight reel</em>.",
      "projects.desc": "Twelve selected builds across web, AI, education, security, and tools. The full archive holds every public project.",
      "projects.all": "All",
      "projects.web": "Web",
      "projects.ai": "AI & ML",
      "projects.education": "Education",
      "projects.security": "Security",
      "projects.tools": "Tools",
      "projects.ecommerce": "E-commerce",
      "projects.openArchive": "Open the full archive",
      "projects.viewLive": "Live",
      "projects.viewCode": "Code",
      "projects.preview": "Preview",
      "skills.label": "Toolbox",
      "skills.title": "The stack behind <em>the work</em>.",
      "skills.desc": "I choose tools based on the problem, not the trend. These are the ones I reach for most.",
      "skills.frontend": "Frontend",
      "skills.backend": "Backend",
      "skills.security": "Cybersecurity",
      "skills.ai": "AI & data",
      "skills.tools": "Tools & platforms",
      "skills.other": "Beyond code",
      "skills.focusTitle": "Current technical focus",
      "skills.focusDesc": "Going deeper into secure, scalable systems — and the architecture that keeps them honest.",
      "skills.focus1": "AI systems",
      "skills.focus2": "Full-stack applications",
      "skills.focus3": "Backend / API architecture",
      "skills.focus4": "Security-aware development",
      "skills.focus5": "Data & ML experimentation",
      "skills.focus6": "Multi-tenant architecture",
      "skills.focus7": "SaaS infrastructure",
      "skills.focus8": "Distributed systems",
      "credentials.label": "Credentials",
      "credentials.title": "The paper <em>trail</em>.",
      "credentials.desc": "Education, certifications, and rooms I've been in. Each one added a tool or a perspective.",
      "credentials.education": "Education",
      "credentials.certificates": "Certificates",
      "credentials.verify": "Verify ↗",
      "credentials.events": "Events & conferences",
      "credentials.eventsDesc": "I show up, listen, ask questions, and bring the useful parts back into the work.",
      "edu.1.school": "Secondary School",
      "edu.1.degree": "Baccalauréat — Second Year — Cairo, Egypt",
      "edu.1.year": "2024 – Present",
      "edu.2.school": "DECI Level One — Udacity × MCIT Egypt",
      "edu.2.degree": "Excel · Statistics · Web Design",
      "edu.2.year": "Completed · Nov 2025",
      "edu.3.school": "iSchool — Advanced AI & Web Dev Tracks",
      "edu.3.degree": "Coding Course — AI Tools & Web Development",
      "edu.3.year": "2025 – Present",
      "cert.1.name": "Digital Egypt Cubs Initiative — Level One",
      "cert.1.issuer": "Udacity × MCIT Egypt",
      "cert.1.date": "Nov 2025",
      "cert.2.name": "1 Million Prompters — AI Prompt Engineering",
      "cert.2.issuer": "Dubai Centre for AI",
      "cert.2.date": "2025",
      "cert.3.name": "Cash Flow Management",
      "cert.3.issuer": "HP LIFE Foundation",
      "cert.3.date": "Apr 2026",
      "cert.4.name": "AI for Business Professionals",
      "cert.4.issuer": "HP LIFE Foundation",
      "cert.4.date": "Feb 2026",
      "cert.5.name": "Business Analysis & Process Management",
      "cert.5.issuer": "Coursera",
      "cert.5.date": "Feb 2026",
      "cert.6.name": "Build a Free Website with WordPress",
      "cert.6.issuer": "Coursera",
      "cert.6.date": "Feb 2026",
      "cert.7.name": "Getting Started with Microsoft Excel",
      "cert.7.issuer": "Coursera",
      "cert.7.date": "Feb 2026",
      "event.1.name": "Fi Africa 2026",
      "event.1.meta": "2–4 June 2026 · Egypt International Exhibition Center, Cairo",
      "event.1.role": "Visitor — Full-stack developer & student",
      "event.1.desc": "Met industry professionals, explored modern full-stack practices, and joined technical conversations on architecture and product.",
      "event.2.name": "Future of Digital Countries Summit",
      "event.2.meta": "22–23 September 2024 · Cairo, Egypt",
      "event.2.role": "Guest",
      "event.2.desc": "Explored conversations around digital countries, technology, and innovation.",
      "languages.title": "Languages",
      "lang.ar": "Arabic",
      "lang.arLevel": "Native",
      "lang.en": "English",
      "lang.enLevel": "B2+ proficient",
      "lang.de": "German",
      "lang.deLevel": "Beginner (A1)",
      "contact.label": "Contact",
      "contact.title": "Have an idea?<br /><em>Let's build it.</em>",
      "contact.desc": "I'm open to internships, freelance projects, and collaborations where I can learn fast and contribute real work.",
      "contact.emailCta": "Send an email",
      "contact.copy": "Copy email",
      "contact.copied": "Email copied",
      "contact.location": "Cairo, Egypt",
      "contact.availability": "Available for select projects",
      "footer.tagline": "Builder, engineer, and lifelong student.",
      "footer.email": "Email",
      "footer.print": "Print CV",
      "footer.rights": "All rights reserved.",
      "archive.back": "Back to portfolio",
      "archive.label": "The archive",
      "archive.title": "Every <em>build</em>.",
      "archive.desc": "The full record: public repositories, client work, experiments, and shipped ideas. Search by name, stack, or problem.",
      "archive.search": "Search projects, stacks, or keywords...",
      "archive.searchLabel": "Search projects",
      "archive.filterLabel": "Filter archive",
      "archive.results": "{n} projects",
      "archive.emptyTitle": "Nothing matched that search.",
      "archive.emptyDesc": "Try a different keyword or clear the filters.",
      "archive.clear": "Clear filters",
      "archive.open": "Open",
      "archive.note": "Some cards open a live product; others open the source. Everything listed here is real work.",
      "common.close": "Close preview",
      "common.skip": "Skip to content",
      "common.backToTop": "Back to top",
    },
    ar: {
      "meta.title": "عمر أحمد — مطوّر يبني أنظمة تعمل",
      "meta.description": "عمر أحمد مطوّر Full-stack وباني أنظمة ذكاء اصطناعي من القاهرة. استكشف أعماله في SaaS الآمن، وRAG العربي، ومنتجات الويب، وأمن إنترنت الأشياء.",
      "logo.role": "مطوّر · مهندس",
      "nav.home": "الرئيسية",
      "nav.story": "القصة",
      "nav.work": "الأعمال",
      "nav.projects": "المشاريع",
      "nav.skills": "المهارات",
      "nav.credentials": "الاعتمادات",
      "nav.contact": "تواصل",
      "nav.archive": "الأرشيف",
      "nav.cta": "لنتحدث",
      "nav.menu": "افتح القائمة",
      "nav.close": "أغلق القائمة",
      "mobile.note": "القاهرة، مصر · متاح للتدريب والعمل الحر",
      "hero.eyebrow": "القاهرة، مصر · متاح للتدريب والعمل الحر",
      "hero.name": "عمر<br /><em>أحمد</em>",
      "hero.tagline": 'أحوّل الأفكار الطموحة إلى <span class="gold">أنظمة تعمل فعلًا</span>.',
      "hero.sub": "من منصات RAG العربية إلى SaaS الآمن متعدد العملاء، أهتم بالتفاصيل التي تجعل المنتج حقيقيًا: المعمارية، والأمان، والأداء، والأشخاص الذين يستخدمونه.",
      "hero.ctaWork": "استكشف أعمالي",
      "hero.ctaContact": "ابدأ حديثًا",
      "hero.chip1": "أنظمة AI",
      "hero.chip2": "Full-stack",
      "hero.chip3": "الأمان",
      "hero.chip4": "المنتج والقيادة",
      "hero.available": "متاح لمشاريع مختارة",
      "hero.location": "القاهرة، مصر",
      "hero.stat1Label": "مستودعًا عامًا",
      "hero.stat2Label": "شهادات",
      "hero.stat3Label": "لغات",
      "hero.stat4Value": "أفضل 5",
      "hero.stat4Label": "في مسابقة وطنية",
      "hero.cardKicker": "أعمل حاليًا على",
      "hero.cardTitle": "منصة تعليمية آمنة متعددة العملاء",
      "story.label": "القصة",
      "story.title": "بُني علنًا.<br /><em>وتعلّمت بالممارسة.</em>",
      "story.desc": "لم أبدأ بخطة مثالية. بدأت بالبناء، والتسليم، وطرح أسئلة أفضل.",
      "story.p1": "كانت مشاريعي الأولى تجارب صغيرة. ثم جاء عملاء حقيقيون، ومسابقة وطنية، وأنظمة ذكاء اصطناعي كان عليها أن تُثبت أنها تعمل. كل خطوة جعلت شيئًا واحدًا واضحًا: أريد بناء تقنية تصمد خارج العرض التجريبي.",
      "story.p2": "اليوم أعمل عبر الطبقات — من أمان قاعدة البيانات وواجهات API إلى الواجهة التي يلمسها الناس. أقود عندما يحتاج الفريق اتجاهًا، وأوثّق ما أتعلمه، وأستمر في التسليم.",
      "story.pull": "الهدف ليس أن أبدو مشغولًا، بل أن أصنع أشياء تعمل.",
      "timeline.2024.title": "أول بناء",
      "timeline.2024.desc": "بدأت بالكود، وتجارب صغيرة، وعادة إنهاء ما أبدأه.",
      "timeline.2025.title": "من التمارين إلى المنتجات",
      "timeline.2025.desc": "انتقلت إلى تجارب AI، وعملاء، ومشاريع لها مستخدمون حقيقيون.",
      "timeline.2026.title": "قُد، سلّم، وتعمّق",
      "timeline.2026.desc": "قدت فريقًا وصل إلى أفضل 5 وطنيًا، وبنيت أنظمة آمنة، وبدأت العمل مع عملاء حقيقيين.",
      "timeline.next.year": "التالي",
      "timeline.next.title": "توسيع الأنظمة",
      "timeline.next.desc": "الانتقال من التطبيقات المنفردة إلى منصات آمنة متعددة العملاء مصممة لتحمل حقيقي.",
      "proof.kicker": "الدليل",
      "proof.title": "دليل، لا وعود.",
      "proof.reposLabel": "مستودعًا عامًا",
      "proof.finalValue": "أفضل 5",
      "proof.finalLabel": "في مسابقة وطنية",
      "proof.clientValue": "الأول",
      "proof.clientLabel": "عميل مدفوع تم تسليمه",
      "proof.certsLabel": "شهادات",
      "proof.note": "كل رقم هنا مرتبط بشيء بنيته أو شاركت فيه أو سلّمته فعلًا.",
      "work.label": "أعمال مختارة",
      "work.title": "نظامان أفتخر <em>بهما</em>.",
      "work.desc": "أحدهما عن المعمارية الآمنة على نطاق واسع، والآخر عن جعل الذكاء الاصطناعي قابلًا للقياس بدلًا من السحر.",
      "work.f1.kicker": "01 — منصة رئيسية",
      "work.f1.title": "منصة تعليم إلكتروني آمنة متعددة العملاء",
      "work.f1.desc": "منصة SaaS تعليمية مبنية على عزل صارم لبيانات العملاء ودفاع متعدد الطبقات: PostgreSQL Row-Level Security مع FORCE RLS، وحساب تطبيق غير متفوق، وتوجيه العملاء عبر النطاق، ومحرك صلاحيات من سبع طبقات يغطي عزل العميل، وRBAC، والملكية، والاستحقاقات، ومفاتيح الميزات، وسياسات العميل، وحدود الخطة.",
      "work.f1.link": "افتح المعمارية الحية",
      "work.f2.kicker": "02 — مشروع AI رئيسي",
      "work.f2.title": "SANAD — منصة تقييم RAG العربية",
      "work.f2.desc": "نظام RAG عربي يبدأ من التقييم: تقطيع واعٍ بالعربية، ومقارنة نماذج التضمين، ومجموعة بيانات ذهبية تقيس الدقة والاستدعاء والارتكاز والهلوسة. بلا أرقام مخترعة.",
      "work.f2.link": "استكشف SANAD على GitHub",
      "work.metricKicker": "مقيس، لا مُخمَّن",
      "work.metric": "التقييم<br />أولًا",
      "work.metric.precision": "الدقة",
      "work.metric.recall": "الاستدعاء",
      "work.metric.groundedness": "الارتكاز",
      "work.metric.hallucination": "الهلوسة",
      "work.metric.measured": "مقيس",
      "arch.request": "الطلب",
      "arch.layer1": "توجيه العملاء عبر النطاق",
      "arch.layer2": "PostgreSQL FORCE RLS",
      "arch.layer3": "RBAC + الملكية",
      "arch.layer4": "الاستحقاقات ومفاتيح الميزات",
      "arch.layer5": "سياسات العميل وحدود الخطة",
      "arch.foot": "صلاحيات 7 طبقات · ثقة صفرية · دور تطبيق غير متفوق",
      "projects.label": "أرشيف المشاريع",
      "projects.title": "جسد من العمل، لا <em>فيديو تشويقي</em>.",
      "projects.desc": "اثنا عشر مشروعًا مختارًا في الويب والذكاء الاصطناعي والتعليم والأمان والأدوات. الأرشيف الكامل يضم كل المشاريع العامة.",
      "projects.all": "الكل",
      "projects.web": "ويب",
      "projects.ai": "ذكاء اصطناعي",
      "projects.education": "تعليم",
      "projects.security": "أمان",
      "projects.tools": "أدوات",
      "projects.ecommerce": "تجارة إلكترونية",
      "projects.openArchive": "افتح الأرشيف الكامل",
      "projects.viewLive": "مباشر",
      "projects.viewCode": "الكود",
      "projects.preview": "معاينة",
      "skills.label": "صندوق الأدوات",
      "skills.title": "التقنيات خلف <em>العمل</em>.",
      "skills.desc": "أختار الأدوات حسب المشكلة، لا حسب الترند. هذه أكثر ما أستخدمه.",
      "skills.frontend": "الواجهة الأمامية",
      "skills.backend": "الخادم",
      "skills.security": "الأمن السيبراني",
      "skills.ai": "الذكاء الاصطناعي والبيانات",
      "skills.tools": "الأدوات والمنصات",
      "skills.other": "ما وراء الكود",
      "skills.focusTitle": "التركيز التقني الحالي",
      "skills.focusDesc": "التعمق في الأنظمة الآمنة والقابلة للتوسع — والمعمارية التي تُبقيها صادقة.",
      "skills.focus1": "أنظمة AI",
      "skills.focus2": "تطبيقات Full-stack",
      "skills.focus3": "معمارية الخادم وAPI",
      "skills.focus4": "تطوير واعٍ بالأمان",
      "skills.focus5": "تجارب البيانات والتعلم الآلي",
      "skills.focus6": "معمارية متعددة العملاء",
      "skills.focus7": "بنية SaaS",
      "skills.focus8": "الأنظمة الموزعة",
      "credentials.label": "الاعتمادات",
      "credentials.title": "الأثر <em>الموثّق</em>.",
      "credentials.desc": "التعليم، والشهادات، والغرف التي حضرتها. كل واحدة أضافت أداة أو منظورًا.",
      "credentials.education": "التعليم",
      "credentials.certificates": "الشهادات",
      "credentials.verify": "تحقق ↗",
      "credentials.events": "الفعاليات والمؤتمرات",
      "credentials.eventsDesc": "أحضر، وأستمع، وأسأل، وأعيد الأجزاء المفيدة إلى العمل.",
      "edu.1.school": "المرحلة الثانوية",
      "edu.1.degree": "باكالوريا — السنة الثانية — القاهرة، مصر",
      "edu.1.year": "2024 – الآن",
      "edu.2.school": "DECI المستوى الأول — Udacity × MCIT مصر",
      "edu.2.degree": "Excel · الإحصاء · تصميم الويب",
      "edu.2.year": "مكتمل · نوفمبر 2025",
      "edu.3.school": "iSchool — مسارات AI والويب المتقدمة",
      "edu.3.degree": "دورة برمجة — أدوات AI وتطوير الويب",
      "edu.3.year": "2025 – الآن",
      "cert.1.name": "مبادرة رواد مصر الرقمية — المستوى الأول",
      "cert.1.issuer": "Udacity × MCIT مصر",
      "cert.1.date": "نوفمبر 2025",
      "cert.2.name": "1 Million Prompters — هندسة الأوامر بالذكاء الاصطناعي",
      "cert.2.issuer": "مركز دبي للذكاء الاصطناعي",
      "cert.2.date": "2025",
      "cert.3.name": "إدارة التدفق النقدي",
      "cert.3.issuer": "مؤسسة HP LIFE",
      "cert.3.date": "أبريل 2026",
      "cert.4.name": "الذكاء الاصطناعي لمحترفي الأعمال",
      "cert.4.issuer": "مؤسسة HP LIFE",
      "cert.4.date": "فبراير 2026",
      "cert.5.name": "تحليل الأعمال وإدارة العمليات",
      "cert.5.issuer": "Coursera",
      "cert.5.date": "فبراير 2026",
      "cert.6.name": "بناء موقع مجاني باستخدام WordPress",
      "cert.6.issuer": "Coursera",
      "cert.6.date": "فبراير 2026",
      "cert.7.name": "البدء مع Microsoft Excel",
      "cert.7.issuer": "Coursera",
      "cert.7.date": "فبراير 2026",
      "event.1.name": "Fi Africa 2026",
      "event.1.meta": "2–4 يونيو 2026 · مركز مصر الدولي للمعارض، القاهرة",
      "event.1.role": "زائر — مطوّر Full-stack وطالب",
      "event.1.desc": "قابلت محترفين في المجال، واستكشفت ممارسات Full-stack حديثة، وشاركت في نقاشات تقنية عن المعمارية والمنتج.",
      "event.2.name": "قمة مستقبل الدول الرقمية",
      "event.2.meta": "22–23 سبتمبر 2024 · القاهرة، مصر",
      "event.2.role": "ضيف",
      "event.2.desc": "استكشفت نقاشات حول الدول الرقمية والتكنولوجيا والابتكار.",
      "languages.title": "اللغات",
      "lang.ar": "العربية",
      "lang.arLevel": "اللغة الأم",
      "lang.en": "الإنجليزية",
      "lang.enLevel": "متقدم B2+",
      "lang.de": "الألمانية",
      "lang.deLevel": "مبتدئ A1",
      "contact.label": "تواصل",
      "contact.title": "لديك فكرة؟<br /><em>لنبنِها.</em>",
      "contact.desc": "أنا متاح للتدريب، والمشاريع الحرة، والتعاون حيث أتعلم بسرعة وأساهم بعمل حقيقي.",
      "contact.emailCta": "أرسل بريدًا",
      "contact.copy": "انسخ البريد",
      "contact.copied": "تم نسخ البريد",
      "contact.location": "القاهرة، مصر",
      "contact.availability": "متاح لمشاريع مختارة",
      "footer.tagline": "مطوّر، وباني أنظمة، وطالب دائم.",
      "footer.email": "البريد",
      "footer.print": "طباعة السيرة",
      "footer.rights": "جميع الحقوق محفوظة.",
      "archive.back": "العودة للبورتفوليو",
      "archive.label": "الأرشيف",
      "archive.title": "كل <em>بناء</em>.",
      "archive.desc": "السجل الكامل: مستودعات عامة، وعملاء، وتجارب، وأفكار تم تسليمها. ابحث بالاسم أو التقنية أو المشكلة.",
      "archive.search": "ابحث في المشاريع أو التقنيات...",
      "archive.searchLabel": "ابحث في المشاريع",
      "archive.filterLabel": "فلترة الأرشيف",
      "archive.results": "{n} مشروعًا",
      "archive.emptyTitle": "لا شيء يطابق بحثك.",
      "archive.emptyDesc": "جرّب كلمة أخرى أو امسح الفلاتر.",
      "archive.clear": "امسح الفلاتر",
      "archive.open": "افتح",
      "archive.note": "بعض البطاقات تفتح منتجًا مباشرًا، وبعضها يفتح الكود. كل ما هنا عمل حقيقي.",
      "common.close": "أغلق المعاينة",
      "common.skip": "انتقل إلى المحتوى",
      "common.backToTop": "العودة إلى الأعلى",
    },
  };

  /* ---------------- State and refs ---------------- */
  const state = {
    lang: "en",
    page: "home",
    featuredFilter: "all",
    archiveFilter: "all",
    query: "",
    modalProject: null,
    lastFocus: null,
    section: "home",
  };

  const pages = {
    home: $("#page-home"),
    archive: $("#page-archive"),
  };
  const header = $("#siteHeader");
  const progress = $("#scrollProgress");
  const menuBtn = $("#menuBtn");
  const mobileMenu = $("#mobileMenu");
  const modal = $("#posterModal");
  const modalClose = $("#modalClose");
  const modalImg = $("#modalImg");
  const toast = $("#toast");
  const toTop = $("#toTop");
  const archiveSearch = $("#archiveSearch");

  const t = (key) => {
    const dict = I18N[state.lang] || I18N.en;
    return dict[key] !== undefined ? dict[key] : I18N.en[key] !== undefined ? I18N.en[key] : key;
  };

  /* ---------------- Reveal animations ---------------- */
  let revealObserver = null;
  if ("IntersectionObserver" in window && !prefersReduced) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
  }

  function observeReveals(root = document) {
    $$("[data-reveal]", root).forEach((element) => {
      if (element.dataset.revealObserved) return;
      element.dataset.revealObserved = "1";
      if (!revealObserver) {
        element.classList.add("in-view");
        return;
      }
      revealObserver.observe(element);
    });
  }

  /* ---------------- Cover artwork ---------------- */
  function coverLines(name) {
    if (name.length <= 24) return [name];
    const words = name.split(" ");
    let best = 1;
    let bestDifference = Infinity;
    for (let index = 1; index < words.length; index += 1) {
      const first = words.slice(0, index).join(" ");
      const second = words.slice(index).join(" ");
      const difference = Math.abs(first.length - second.length);
      if (difference < bestDifference) {
        bestDifference = difference;
        best = index;
      }
    }
    return [words.slice(0, best).join(" "), words.slice(best).join(" ")];
  }

  function coverFor(project) {
    const category = CATEGORIES[project.category] || CATEGORIES.web;
    const lines = coverLines(project.name.en);
    const fontSize = lines.some((line) => line.length > 26) ? 60 : 74;
    const tags = project.tags.slice(0, 3).join(" · ");
    const nameMarkup = lines
      .map(
        (line, index) =>
          `<text x="70" y="${260 + index * fontSize * 0.94}" font-family="Georgia, 'Times New Roman', serif" font-size="${fontSize}" fill="#f2efe9">${escXml(line)}</text>`
      )
      .join("");
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="750" viewBox="0 0 1200 750">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#08080d"/>
          <stop offset="1" stop-color="${category.color}" stop-opacity="0.2"/>
        </linearGradient>
        <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
          <path d="M48 0H0V48" fill="none" stroke="rgba(255,255,255,0.045)" stroke-width="1"/>
        </pattern>
      </defs>
      <rect width="1200" height="750" fill="#08080d"/>
      <rect width="1200" height="750" fill="url(#g)"/>
      <rect width="1200" height="750" fill="url(#grid)"/>
      <circle cx="1010" cy="120" r="260" fill="${category.color}" opacity="0.07"/>
      <text x="70" y="92" font-family="Arial, Helvetica, sans-serif" font-size="18" fill="${category.color}" letter-spacing="6">${escXml(category.en.toUpperCase())}</text>
      <text x="1120" y="700" text-anchor="end" font-family="Georgia, serif" font-size="230" fill="${category.color}" opacity="0.09">${escXml(project.mark)}</text>
      ${nameMarkup}
      <line x1="70" y1="610" x2="240" y2="610" stroke="${category.color}" stroke-width="2" opacity="0.7"/>
      <text x="70" y="655" font-family="Arial, Helvetica, sans-serif" font-size="20" fill="#9b98a7" letter-spacing="1">${escXml(tags)}</text>
    </svg>`;
    return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
  }

  /* ---------------- Renderers ---------------- */
  function projectCardHTML(project, order) {
    const category = CATEGORIES[project.category] || CATEGORIES.web;
    const name = project.name[state.lang] || project.name.en;
    const desc = project.desc[state.lang] || project.desc.en;
    const image = project.image || coverFor(project);
    const fallback = project.image ? coverFor(project) : "";
    const number = String(PROJECTS.indexOf(project) + 1).padStart(2, "0");
    const tags = project.tags
      .slice(0, 4)
      .map((tag) => `<span class="project-tag">${esc(tag)}</span>`)
      .join("");
    const primary = project.repo || project.live || "#";
    const liveLink = project.live
      ? `<a class="project-link" href="${esc(project.live)}" target="_blank" rel="noopener">${esc(t("projects.viewLive"))} <span aria-hidden="true">↗</span></a>`
      : "";
    const codeLink = project.repo
      ? `<a class="project-link" href="${esc(project.repo)}" target="_blank" rel="noopener">${esc(t("projects.viewCode"))} <span aria-hidden="true">↗</span></a>`
      : "";

    return `<article class="project-card" style="--c:${category.color};--delay:${Math.min(order * 35, 210)}ms" data-reveal>
      <button class="project-poster" type="button" data-poster="${esc(project.id)}" aria-label="${esc(t("projects.preview"))}: ${esc(name)}">
        <img src="${esc(image)}" alt="${esc(name)} — ${esc(category[state.lang] || category.en)}" loading="lazy" decoding="async"${fallback ? ` data-fallback="${esc(fallback)}"` : ""} />
        <span class="poster-top"><span class="poster-cat">${esc(category[state.lang] || category.en)}</span><span class="poster-num">${number}</span></span>
        <span class="poster-open" aria-hidden="true">↗</span>
      </button>
      <div class="project-body">
        <div class="project-kicker">${esc(category[state.lang] || category.en)}</div>
        <h3 class="project-title"><a href="${esc(primary)}" target="_blank" rel="noopener">${esc(name)}</a></h3>
        <p class="project-desc">${esc(desc)}</p>
        <div class="project-tags">${tags}</div>
        <div class="project-links">${liveLink}${codeLink}</div>
      </div>
    </article>`;
  }

  function archiveCardHTML(project, order) {
    const category = CATEGORIES[project.category] || CATEGORIES.web;
    const name = project.name[state.lang] || project.name.en;
    const desc = project.desc[state.lang] || project.desc.en;
    const url = project.repo || project.live || "#";
    const tags = project.tags
      .slice(0, 3)
      .map((tag) => `<span class="repo-tag">${esc(tag)}</span>`)
      .join("");

    return `<a class="repo-card" href="${esc(url)}" target="_blank" rel="noopener" style="--c:${category.color};--delay:${Math.min(order * 28, 224)}ms" data-reveal>
      <div class="repo-top">
        <span class="repo-mark">${esc(project.mark)}</span>
        <span class="repo-arrow" aria-hidden="true">↗</span>
      </div>
      <h3 class="repo-name">${esc(name)}</h3>
      <p class="repo-desc">${esc(desc)}</p>
      <div class="repo-tags">${tags}</div>
      <div class="repo-foot">
        <span class="repo-cat">${esc(category[state.lang] || category.en)}</span>
        <span class="repo-cta">${esc(t("archive.open"))} ↗</span>
      </div>
    </a>`;
  }

  function renderFeatured() {
    const grid = $("#featuredGrid");
    if (!grid) return;
    const items = PROJECTS.filter((project) => project.featured).filter(
      (project) => state.featuredFilter === "all" || project.cats.includes(state.featuredFilter)
    );
    grid.innerHTML = items.map((project, index) => projectCardHTML(project, index)).join("");
    updateFilterButtons("featured");
    observeReveals(grid);
  }

  function matchesQuery(project, query) {
    if (!query) return true;
    const category = CATEGORIES[project.category] || CATEGORIES.web;
    const haystack = [
      project.name.en,
      project.name.ar,
      project.desc.en,
      project.desc.ar,
      ...project.tags,
      category.en,
      category.ar,
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(query);
  }

  function renderArchive() {
    const grid = $("#archiveGrid");
    if (!grid) return;
    const query = state.query.trim().toLowerCase();
    const items = PROJECTS.filter(
      (project) => state.archiveFilter === "all" || project.cats.includes(state.archiveFilter)
    ).filter((project) => matchesQuery(project, query));

    grid.innerHTML = items.map((project, index) => archiveCardHTML(project, index)).join("");

    const empty = $("#archiveEmpty");
    if (empty) empty.hidden = items.length > 0;

    const count = $("#archiveCount");
    if (count) count.textContent = t("archive.results").replace("{n}", String(items.length));

    updateFilterButtons("archive");
    observeReveals(grid);
  }

  function updateFilterButtons(scope) {
    $$(`.filter-btn[data-scope="${scope}"]`).forEach((button) => {
      const active =
        button.getAttribute("data-filter") ===
        (scope === "featured" ? state.featuredFilter : state.archiveFilter);
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", active ? "true" : "false");
    });
  }

  /* ---------------- Language ---------------- */
  function applyLanguage() {
    const dict = I18N[state.lang] || I18N.en;
    document.documentElement.lang = state.lang;
    document.documentElement.dir = state.lang === "ar" ? "rtl" : "ltr";
    document.body.classList.toggle("lang-ar", state.lang === "ar");
    document.title = dict["meta.title"];

    const description = $('meta[name="description"]');
    if (description) description.setAttribute("content", dict["meta.description"]);
    const ogTitle = $('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", dict["meta.title"]);
    const ogDescription = $('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute("content", dict["meta.description"]);
    const twitterTitle = $('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute("content", dict["meta.title"]);
    const twitterDescription = $('meta[name="twitter:description"]');
    if (twitterDescription) twitterDescription.setAttribute("content", dict["meta.description"]);

    $$("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n");
      const value = dict[key];
      if (typeof value === "string") element.innerHTML = value;
    });

    $$("[data-i18n-placeholder]").forEach((element) => {
      const key = element.getAttribute("data-i18n-placeholder");
      const value = dict[key];
      if (typeof value === "string") element.setAttribute("placeholder", value);
    });

    $$("[data-i18n-aria]").forEach((element) => {
      const key = element.getAttribute("data-i18n-aria");
      const value = dict[key];
      if (typeof value === "string") element.setAttribute("aria-label", value);
    });

    $$(".lang-btn").forEach((button) => {
      const active = button.getAttribute("data-lang") === state.lang;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", active ? "true" : "false");
    });

    if (menuBtn) {
      menuBtn.setAttribute(
        "aria-label",
        dict[document.body.classList.contains("menu-open") ? "nav.close" : "nav.menu"]
      );
    }
    if (modalClose) modalClose.setAttribute("aria-label", dict["common.close"]);
    if (toTop) toTop.setAttribute("aria-label", dict["common.backToTop"]);

    const skipLink = $(".skip-link");
    if (skipLink) skipLink.textContent = dict["common.skip"];

    if (state.modalProject) updateModalCopy(state.modalProject);
  }

  function setLanguage(lang) {
    if (lang !== "en" && lang !== "ar") return;
    if (lang === state.lang) return;
    state.lang = lang;
    try {
      localStorage.setItem("omar-lang", lang);
    } catch (error) {
      /* Ignore storage restrictions. */
    }
    applyLanguage();
    renderFeatured();
    renderArchive();
  }

  function getStoredLanguage() {
    try {
      const value = localStorage.getItem("omar-lang");
      return value === "ar" || value === "en" ? value : null;
    } catch (error) {
      return null;
    }
  }

  function detectLanguage() {
    const language = (navigator.language || navigator.userLanguage || "en").toLowerCase();
    return language.startsWith("ar") ? "ar" : "en";
  }

  /* ---------------- Routing ---------------- */
  function setPage(page, options = {}) {
    if (!pages[page]) page = "home";
    state.page = page;
    Object.keys(pages).forEach((name) => {
      pages[name].classList.toggle("active", name === page);
    });
    document.body.dataset.page = page;
    if (page === "archive") renderArchive();
    if (options.scroll) window.scrollTo({ top: 0, behavior: "auto" });
  }

  function setActiveNav(target) {
    $$("[data-nav-link]").forEach((link) => {
      const active = link.getAttribute("data-nav-link") === target;
      if (
        link.classList.contains("nav-link") ||
        link.classList.contains("mobile-link") ||
        link.classList.contains("logo")
      ) {
        link.classList.toggle("active", active);
        if (active) link.setAttribute("aria-current", "page");
        else link.removeAttribute("aria-current");
      }
    });
  }

  function route(initial = false) {
    const raw = location.hash ? decodeURIComponent(location.hash.slice(1)) : "home";
    const targetId = raw || "home";
    const previousPage = state.page;

    if (targetId === "archive") {
      setPage("archive", { scroll: false });
      setActiveNav("archive");
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }

    setPage("home", { scroll: false });

    if (targetId === "home" || targetId === "main") {
      setActiveNav("home");
      window.scrollTo({
        top: 0,
        behavior: initial || previousPage === "archive" ? "auto" : "smooth",
      });
      return;
    }

    const target = document.getElementById(targetId);
    if (!target) {
      setActiveNav("home");
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }

    setActiveNav(targetId);
    if (previousPage === "archive") window.scrollTo({ top: 0, behavior: "auto" });
    const behavior = initial || previousPage === "archive" ? "auto" : "smooth";
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        target.scrollIntoView({ behavior, block: "start" });
      });
    });
  }

  function goTo(hash) {
    const targetId = String(hash || "").replace(/^#/, "") || "home";
    if (location.hash !== "#" + targetId) {
      try {
        history.pushState(null, "", "#" + targetId);
      } catch (error) {
        location.hash = targetId;
        return;
      }
    }
    route(false);
    closeMenu(false);
  }

  /* ---------------- Modal ---------------- */
  function updateModalCopy(project) {
    const category = CATEGORIES[project.category] || CATEGORIES.web;
    const name = project.name[state.lang] || project.name.en;
    if (modalImg) modalImg.alt = `${name} — ${category[state.lang] || category.en}`;
    const title = $("#modalTitle");
    const meta = $("#modalMeta");
    if (title) title.textContent = name;
    if (meta) meta.textContent = category[state.lang] || category.en;
  }

  function openModal(projectId) {
    const project = PROJECTS.find((item) => item.id === projectId);
    if (!project || !modal) return;
    state.modalProject = project;
    state.lastFocus = document.activeElement;
    if (modalImg) {
      modalImg.onerror = () => {
        modalImg.onerror = null;
        modalImg.src = coverFor(project);
      };
      modalImg.src = project.image || coverFor(project);
    }
    updateModalCopy(project);
    modal.classList.add("open");
    document.body.classList.add("modal-open");
    window.setTimeout(() => {
      if (modalClose) modalClose.focus({ preventScroll: true });
    }, 60);
  }

  function closeModal() {
    if (!modal || !modal.classList.contains("open")) return;
    modal.classList.remove("open");
    document.body.classList.remove("modal-open");
    state.modalProject = null;
    const focusTarget = state.lastFocus;
    state.lastFocus = null;
    if (focusTarget && typeof focusTarget.focus === "function") {
      focusTarget.focus({ preventScroll: true });
    }
  }

  /* ---------------- Mobile menu ---------------- */
  function openMenu() {
    if (!mobileMenu || !menuBtn) return;
    document.body.classList.add("menu-open");
    menuBtn.setAttribute("aria-expanded", "true");
    menuBtn.setAttribute("aria-label", t("nav.close"));
    mobileMenu.setAttribute("aria-hidden", "false");
    mobileMenu.inert = false;
    window.setTimeout(() => {
      const firstLink = $(".mobile-link", mobileMenu);
      if (firstLink) firstLink.focus({ preventScroll: true });
    }, 180);
  }

  function closeMenu(restoreFocus = false) {
    if (!mobileMenu || !menuBtn || !document.body.classList.contains("menu-open")) return;
    const focusWasInside = mobileMenu.contains(document.activeElement);
    document.body.classList.remove("menu-open");
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.setAttribute("aria-label", t("nav.menu"));
    mobileMenu.setAttribute("aria-hidden", "true");
    mobileMenu.inert = true;
    if (restoreFocus || focusWasInside) menuBtn.focus({ preventScroll: true });
  }

  function toggleMenu() {
    if (document.body.classList.contains("menu-open")) closeMenu(true);
    else openMenu();
  }

  /* ---------------- Filters, search, copy ---------------- */
  function clearFilters() {
    state.archiveFilter = "all";
    state.query = "";
    if (archiveSearch) archiveSearch.value = "";
    updateFilterButtons("archive");
    renderArchive();
  }

  function copyEmail() {
    const done = () => showToast(t("contact.copied"));
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(EMAIL).then(done).catch(() => fallbackCopy(done));
    } else {
      fallbackCopy(done);
    }
  }

  function fallbackCopy(done) {
    const textarea = document.createElement("textarea");
    textarea.value = EMAIL;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.top = "-9999px";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand("copy");
      done();
    } catch (error) {
      showToast(EMAIL);
    }
    textarea.remove();
  }

  let toastTimer = 0;
  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove("show"), 2400);
  }

  /* ---------------- Scroll ---------------- */
  let scrollTicking = false;
  function requestScrollUpdate() {
    if (scrollTicking) return;
    scrollTicking = true;
    requestAnimationFrame(() => {
      updateScrollUI();
      scrollTicking = false;
    });
  }

  function updateScrollUI() {
    const y = window.scrollY || window.pageYOffset || 0;
    if (header) header.classList.toggle("scrolled", y > 18);
    if (progress) {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? Math.min(y / max, 1) : 0;
      progress.style.transform = `scaleX(${ratio})`;
    }
    if (toTop) toTop.classList.toggle("show", y > 620);
  }

  /* ---------------- Cursor ---------------- */
  function initCursor() {
    if (!isFinePointer || prefersReduced) return;
    const dot = $("#cursorDot");
    const ring = $("#cursorRing");
    if (!dot || !ring) return;

    document.body.classList.add("cursor-enabled");
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;

    document.addEventListener(
      "pointermove",
      (event) => {
        mouseX = event.clientX;
        mouseY = event.clientY;
        dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
        document.body.classList.add("cursor-visible");
      },
      { passive: true }
    );

    document.addEventListener(
      "pointerover",
      (event) => {
        const interactive = event.target.closest("a, button, input, [data-cursor]");
        document.body.classList.toggle("cursor-hover", Boolean(interactive));
      },
      { passive: true }
    );

    document.addEventListener("mouseleave", () => document.body.classList.remove("cursor-visible"));
    document.addEventListener("mouseenter", () => document.body.classList.add("cursor-visible"));

    function animateRing() {
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      requestAnimationFrame(animateRing);
    }
    animateRing();
  }

  /* ---------------- Neural background ---------------- */
  function initNeuralBackground() {
    if (prefersReduced) return;
    const canvas = $("#neural-bg");
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    let width = 0;
    let height = 0;
    let particles = [];
    let animationId = 0;
    let running = false;
    let resizeTimer = 0;
    const mouse = { x: null, y: null, radius: 145 };

    function resize() {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      context.setTransform(ratio, 0, 0, ratio, 0, 0);

      const amount = width < 700 ? 28 : Math.min(82, Math.floor((width * height) / 20000));
      particles = Array.from({ length: amount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        size: Math.random() * 1.6 + 0.4,
        color: Math.random() > 0.78 ? "92, 225, 230" : "216, 181, 106",
      }));
    }

    function draw() {
      context.clearRect(0, 0, width, height);

      for (const particle of particles) {
        particle.x += particle.vx;
        particle.y += particle.vy;
        if (particle.x < 0 || particle.x > width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > height) particle.vy *= -1;

        if (mouse.x !== null) {
          const dx = mouse.x - particle.x;
          const dy = mouse.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < mouse.radius && distance > 0) {
            particle.x -= dx * 0.0008;
            particle.y -= dy * 0.0008;
          }
        }

        context.beginPath();
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        context.fillStyle = `rgba(${particle.color}, 0.68)`;
        context.fill();
      }

      for (let first = 0; first < particles.length; first += 1) {
        for (let second = first + 1; second < particles.length; second += 1) {
          const a = particles[first];
          const b = particles[second];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distanceSquared = dx * dx + dy * dy;
          if (distanceSquared < 12100) {
            const opacity = (1 - Math.sqrt(distanceSquared) / 110) * 0.2;
            context.beginPath();
            context.moveTo(a.x, a.y);
            context.lineTo(b.x, b.y);
            context.strokeStyle = `rgba(216, 181, 106, ${opacity})`;
            context.lineWidth = 0.55;
            context.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(draw);
    }

    function start() {
      if (running) return;
      running = true;
      animationId = requestAnimationFrame(draw);
    }

    function stop() {
      running = false;
      cancelAnimationFrame(animationId);
    }

    resize();
    start();

    window.addEventListener("resize", () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(resize, 200);
    });

    if (isFinePointer) {
      window.addEventListener(
        "pointermove",
        (event) => {
          mouse.x = event.clientX;
          mouse.y = event.clientY;
        },
        { passive: true }
      );
      window.addEventListener("pointerleave", () => {
        mouse.x = null;
        mouse.y = null;
      });
    }

    document.addEventListener("visibilitychange", () => {
      if (document.hidden) stop();
      else start();
    });
  }

  /* ---------------- Event handlers ---------------- */
  function handleDocumentClick(event) {
    const filterButton = event.target.closest(".filter-btn");
    if (filterButton) {
      const scope = filterButton.getAttribute("data-scope");
      const value = filterButton.getAttribute("data-filter");
      if (scope === "featured") {
        state.featuredFilter = value;
        renderFeatured();
      } else if (scope === "archive") {
        state.archiveFilter = value;
        renderArchive();
      }
      return;
    }

    const poster = event.target.closest("[data-poster]");
    if (poster) {
      event.preventDefault();
      openModal(poster.getAttribute("data-poster"));
      return;
    }

    const copyButton = event.target.closest("[data-copy-email]");
    if (copyButton) {
      event.preventDefault();
      copyEmail();
      return;
    }

    const printButton = event.target.closest("[data-print]");
    if (printButton) {
      event.preventDefault();
      window.print();
      return;
    }

    const anchor = event.target.closest('a[href^="#"]');
    if (anchor && !anchor.classList.contains("skip-link")) {
      const href = anchor.getAttribute("href");
      if (href && href.length > 1) {
        event.preventDefault();
        goTo(href);
      }
    }
  }

  function handleKeydown(event) {
    if (event.key === "Escape") {
      if (modal && modal.classList.contains("open")) {
        closeModal();
        return;
      }
      if (document.body.classList.contains("menu-open")) {
        closeMenu(true);
        return;
      }
    }

    if (event.key === "Tab" && modal && modal.classList.contains("open")) {
      const focusable = $$("button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])", modal);
      if (focusable.length) {
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
      return;
    }

    if (event.key === "Tab" && document.body.classList.contains("menu-open") && mobileMenu) {
      const focusable = $$("a, button", mobileMenu);
      if (focusable.length) {
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    }
  }

  function handleImageError(event) {
    const image = event.target;
    if (!image || image.tagName !== "IMG") return;
    const fallback = image.getAttribute("data-fallback");
    if (!fallback) return;
    image.removeAttribute("data-fallback");
    image.src = fallback;
  }

  function bindEvents() {
    $$(".lang-btn").forEach((button) => {
      button.addEventListener("click", () => setLanguage(button.getAttribute("data-lang")));
    });

    if (menuBtn) menuBtn.addEventListener("click", toggleMenu);
    if (modalClose) modalClose.addEventListener("click", closeModal);
    if (modal) {
      modal.addEventListener("click", (event) => {
        if (event.target === modal) closeModal();
      });
    }
    if (toTop) {
      toTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: prefersReduced ? "auto" : "smooth" });
      });
    }
    if (archiveSearch) {
      archiveSearch.addEventListener("input", () => {
        state.query = archiveSearch.value;
        renderArchive();
      });
    }
    const clearButton = $("#clearFilters");
    if (clearButton) clearButton.addEventListener("click", clearFilters);

    document.addEventListener("click", handleDocumentClick);
    document.addEventListener("keydown", handleKeydown);
    window.addEventListener("scroll", requestScrollUpdate, { passive: true });
    window.addEventListener("resize", () => {
      if (!isMobileViewport()) closeMenu(false);
    });
    window.addEventListener("popstate", () => route(false));
    window.addEventListener("hashchange", () => route(false));
  }

  /* ---------------- Scroll spy ---------------- */
  function initScrollSpy() {
    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (state.page !== "home") return;
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveNav(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );
    $$("#page-home [data-section]").forEach((section) => observer.observe(section));
  }

  /* ---------------- Init ---------------- */
  function init() {
    const year = $("#year");
    if (year) year.textContent = String(new Date().getFullYear());

    document.addEventListener("error", handleImageError, true);

    state.lang = getStoredLanguage() || detectLanguage();
    applyLanguage();

    if (mobileMenu) {
      mobileMenu.setAttribute("aria-hidden", "true");
      mobileMenu.inert = true;
    }

    renderFeatured();
    renderArchive();
    observeReveals();
    bindEvents();
    route(true);
    updateScrollUI();
    initCursor();
    initNeuralBackground();
    initScrollSpy();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
