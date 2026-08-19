(function () {
  "use strict";

  // ========================================
  // Translations
  // ========================================
  var translations = {
    fi: {
      // Nav
      "nav.about": "Minusta",
      "nav.skills": "Osaaminen",
      "nav.projects": "Projektit",
      "nav.cta": "Tee yhteistyötä",
      "lang.switch": "عربي",

      // Hero
      "hero.title": "Visuaalinen<br>journalismi.<br>Sosiaalinen media.<br>Yhteisö.",
      "hero.subtitle": "Freelance visuaalinen journalisti ja aktiivinen sosiaalisen median viestinnän ammattilainen Suomessa.",
      "hero.cta1": "Katso työni",
      "hero.cta2": "Tee yhteistyötä",

      // About
      "about.title": "Minusta",
      "about.p1": "Olen Suomessa asuva syyrialainen visuaalinen journalisti ja sosiaalisen median viestinnän ammattilainen, joka on asunut lähes vuosikymmenen Pohjoismaissa. Työni keskittyy yhteisöihin, ajankohtaisiin tapahtumiin ja visuaaliseen tarinankerrontaan.",
      "about.p2": "Seuraan ja dokumentoin aktiivisesti yhteiskunnallisia liikkeitä, kulttuuritapahtumia ja ihmisten elämää sekä suomalaisessa että syyrialaisessa yhteisössä. Työni takana on uteliaisuus, sitoutuminen ihmisoikeuksiin ja vakaumus siitä, että tarinoita pitää näyttää — ei vain kertoa.",
      "about.p3": "Käytän tekoälytyökaluja tutkimuksen, ideoiden luonnin ja sisällöntuotannon tehostamiseen — aina autenttisten, ihmiskeskeisten tarinoiden palveluksessa.",
      "about.kw1": "Suomi",
      "about.kw2": "Syyria",
      "about.kw3": "Yhteisö",
      "about.kw4": "Journalismi",

      // Skills
      "skills.title": "Osaaminen",
      "skills.sm.title": "Sosiaalinen media",
      "skills.sm.desc": "Aktiivinen sosiaalisen median käyttö, sisällöntuotanto ja yhteisöjen tavoittaminen eri alustoilla.",
      "skills.vj.title": "Visuaalinen journalismi",
      "skills.vj.desc": "Tapahtumien, yhteiskunnallisten ilmiöiden ja ihmisten visuaalinen dokumentointi valokuvalla ja videolla.",
      "skills.news.title": "Uutiset &amp; ajankohtaiset asiat",
      "skills.news.desc": "Ajankohtaisten uutisten ja yhteiskunnallisten kehitysten aktiivinen seuranta ja analysointi.",
      "skills.ai.title": "Tekoälyavusteinen sisältö",
      "skills.ai.desc": "Tekoälytyökalujen käyttö tutkimuksen, ideoiden luonnin ja sisällöntuotannon viritysten tehostamiseen.",
      "skills.cc.title": "Yhteisöviestintä",
      "skills.cc.desc": "Yhteydenpito ja viestintä suomalaisissa ja syyrialaisissa yhteisöissä yhteisistä aiheista.",

      // Projects
      "projects.title": "Projektit",
      "projects.p1.title": "Mielenosoitukset Suomessa",
      "projects.p1.desc": "Visuaalinen dokumentointi Suomessa järjestetyistä mielenosoituksista ja yhteiskunnallisista tapahtumista — hetkien, äänien ja julkisten tapaamisten energian tallentaminen.",
      "projects.p1.tag1": "Valokuvaus",
      "projects.p1.tag2": "Video",
      "projects.p1.tag3": "Sosiaalinen media",
      "projects.p2.title": "Syyrialainen yhteisö",
      "projects.p2.desc": "Aktiivinen osallistuminen ja viestintä Suomessa toimivan syyrialaisen yhteisön parissa — kulttuurin, tarinojen ja jaettujen kokemusten dokumentointi.",
      "projects.p2.tag1": "Yhteisö",
      "projects.p2.tag2": "Kulttuuri",
      "projects.p2.tag3": "Viestintä",
      "projects.p3.title": "Jablah, Syyria",
      "projects.p3.desc": "Henkilökohtainen yhteys kotikaupunkiin Jablahiin — sen ihmisten, tapahtumien ja yhteisön dokumentointi paikallisen näkökulman kautta.",
      "projects.p3.tag1": "Paikallinen näkökulma",
      "projects.p3.tag2": "Yhteisö",
      "projects.p3.tag3": "Syyria",

      // Journalism
      "journalism.title": "Journalismi &amp; Yhteisö",
      "journalism.headline": "Kaksi näkökulmaa. Yksi tarina.",
      "journalism.fi.title": "Suomi",
      "journalism.fi.desc": "Asuminen, työskentely ja yhteiskunnallisten liikkeiden sekä yhteisöelämän dokumentointi suomalaisessa yhteiskunnassa.",
      "journalism.sy.title": "Syyria",
      "journalism.sy.desc": "Yhteydenpito juuriini — tapahtumien, tarinoiden ja syyrialaisten yhteisöjen kestävyyden seuraaminen.",
      "journalism.text": "Erilaisten yhteisöjen ymmärtäminen. Tapahtumien seuraaminen niiden tapahtuessa. Ihmisten tarinoiden dokumentointi visuaalisella autenttisuudella ja yhteiskunnallisella tietoisuudella.",

      // Who I Work With
      "workwith.title": "Kenelle työskentelen",
      "workwith.media.title": "Media",
      "workwith.media.desc": "Visuaalinen journalismi, tapahtumien kattaus ja sosiaalinen sisältö uutismedian toimistoille.",
      "workwith.assoc.title": "Yhdistykset",
      "workwith.assoc.desc": "Yhteisöviestintä ja kampanjasisältö voittoa tavoittelemattomille organisaatioille.",
      "workwith.company.title": "Yritykset",
      "workwith.company.desc": "Sosiaalisen median viestintä ja visuaalinen tarinankerronta yrityksille ja brändeille.",
      "workwith.org.title": "Organisaatiot",
      "workwith.org.desc": "Ihmiskeskeinen visuaalinen viestintä ja ajankohtaisia aiheita koskeva sisältö institutioneille.",

      // CTA
      "cta.title": "Onko sinulla tarina kerrottavana?",
      "cta.subtitle": "Luodaan sisältöä, jota ihmiset huomaavat.",
      "cta.btn": "Tee yhteistyötä",

      // Contact
      "contact.title": "Yhteystiedot",
      "contact.text": "Tee yhteistyötä kanssani — Visuaalinen journalismi, sosiaalinen media ja yhteisöviestintä.",
      "contact.btn": "Ota yhteyttä",

      // Footer
      "footer.tagline": "Visuaalinen journalismi &middot; Sosiaalinen media &middot; Yhteisö",

      // Meta
      "meta.title": "Mohammad Saad — Visuaalinen journalismi &amp; sosiaalinen media",
      "meta.description": "Freelance visuaalinen journalisti ja aktiivinen sosiaalisen median viestinnän ammattilainen Suomessa.",
      "html.lang": "fi",
      "html.dir": "ltr"
    },
    ar: {
      // Nav
      "nav.about": "من أنا",
      "nav.skills": "المهارات",
      "nav.projects": "المشاريع",
      "nav.cta": "WORK",
      "lang.switch": "FI",

      // Hero
      "hero.title": "صحافة بصرية.<br>وسائل التواصل الاجتماعي.<br>المجتمع.",
      "hero.subtitle": "صحفي بصرية مستقل ومتواصل نشط في وسائل التواصل الاجتماعي مقيم في فنلندا.",
      "hero.cta1": "شاهد أعمالي",
      "hero.cta2": "لنعمل معاً",

      // About
      "about.title": "من أنا",
      "about.p1": "أنا صحفي بصرية سوري أعيش في فنلندا ومتخصص في التواصل عبر وسائل التواصل الاجتماعي، عشت في الشمال الأوروبي لأكثر من عقد. يركّز عملي على المجتمعات والأحداث الجارية والسرد البصري.",
      "about.p2": "أتتبع وأوثّق بنشاط الحركات الاجتماعية والأحداث الثقافية وحياة الناس في المجتمعين الفنلدي والسوري. يدفعني الفضول والالتزام بحقوق الإنسان والقناعة بأن القصص يجب أن تُرى — لا فقط تُروى.",
      "about.p3": "أستخدم أدوات الذكاء الاصطناعي في البحث والتأمل وإنتاج المحتوى — دائمًا في خدمة القصص الأصيلة المتمحورة حول الإنسان.",
      "about.kw1": "فنلندا",
      "about.kw2": "سوريا",
      "about.kw3": "المجتمع",
      "about.kw4": "الصحافة",

      // Skills
      "skills.title": "المهارات",
      "skills.sm.title": "وسائل التواصل الاجتماعي",
      "skills.sm.desc": "الاستخدام النشط لوسائل التواصل الاجتماعي وإنتاج المحتوى والتواصل مع المجتمعات عبر المنصات المختلفة.",
      "skills.vj.title": "الصحافة البصرية",
      "skills.vj.desc": "توثيق الأحداث والظواهر الاجتماعية والأشخاص عبر التصوير الفوتوغرافي والفيديو.",
      "skills.news.title": "الأخبار والشؤون الجارية",
      "skills.news.desc": "المتابعة النشطة والتحليل للأخبار العاجلة والتطورات الاجتماعية.",
      "skills.ai.title": "محتوى مدعوم بالذكاء الاصطناعي",
      "skills.ai.desc": "استخدام أدوات الذكاء الاصطناعي في البحث والتأمل وتبسيط سير عمل إنتاج المحتوى.",
      "skills.cc.title": "التواصل المجتمعي",
      "skills.cc.desc": "التواصل والتفاعل داخل المجتمعات الفنلدية والسورية حول القضايا المشتركة.",

      // Projects
      "projects.title": "المشاريع",
      "projects.p1.title": "المظاهرات في فنلندا",
      "projects.p1.desc": "توثيق بصري للمظاهرات والأحداث الاجتماعية التي نُظمت في فنلندا — تجسيد اللحظات والأصوات وطاقة التجمعات العامة.",
      "projects.p1.tag1": "تصوير",
      "projects.p1.tag2": "فيديو",
      "projects.p1.tag3": "وسائل التواصل الاجتماعي",
      "projects.p2.title": "المجتمع السوري",
      "projects.p2.desc": "المشاركة النشطة والتواصل داخل المجتمع السوري في فنلندا — توثيق الثقافة والقصص والتجارب المشتركة.",
      "projects.p2.tag1": "المجتمع",
      "projects.p2.tag2": "الثقافة",
      "projects.p2.tag3": "التواصل",
      "projects.p3.title": "جبلة، سوريا",
      "projects.p3.desc": "صلة شخصية بمدينتي الأصل جبلة — توثيق شعبها والأحداث والمجتمع من منظور محلي.",
      "projects.p3.tag1": "منظور محلي",
      "projects.p3.tag2": "المجتمع",
      "projects.p3.tag3": "سوريا",

      // Journalism
      "journalism.title": "الصحافة والمجتمع",
      "journalism.headline": "منظوران. قصة واحدة.",
      "journalism.fi.title": "فنلندا",
      "journalism.fi.desc": "العيش والعمل وتوثيق الحركات الاجتماعية والحياة المجتمعية في المجتمع الفنلندي.",
      "journalism.sy.title": "سوريا",
      "journalism.sy.desc": "الحفاظ على الارتباط بجذوري — متابعة الأحداث والقصص ومرونة المجتمعات السورية.",
      "journalism.text": "فهم المجتمعات المختلفة. متابعة الأحداث كما تحدث. توثيق قصص الناس بأصالة بصرية ووعي اجتماعي.",

      // Who I Work With
      "workwith.title": "مع من أعمل",
      "workwith.media.title": "الإعلام",
      "workwith.media.desc": "الصحافة البصرية وتغطية الأحداث والمحتوى الاجتماعي لغرف الأخبار ووسائل الإعلام.",
      "workwith.assoc.title": "الجمعيات",
      "workwith.assoc.desc": "التواصل المجتمعي ومحتوى الحملات للمنظمات غير الربحية.",
      "workwith.company.title": "الشركات",
      "workwith.company.desc": "التواصل عبر وسائل التواصل الاجتماعي والسرد البصري للشركات والعلامات التجارية.",
      "workwith.org.title": "المنظمات",
      "workwith.org.desc": "التواصل البصري المتمحور حول الإنسان ومحتوى الشؤون الجارية للمؤسسات.",

      // CTA
      "cta.title": "هل لديك قصة لترويها؟",
      "cta.subtitle": "لنصنع محتوى بصري يلفت الانتباه.",
      "cta.btn": "لنعمل معاً",

      // Contact
      "contact.title": "تواصل معي",
      "contact.text": "لنعمل معاً — صحافة بصرية ووسائل التواصل الاجتماعي والتواصل المجتمعي.",
      "contact.btn": "تواصل معي",

      // Footer
      "footer.tagline": "صحافة بصرية &middot; وسائل التواصل الاجتماعي &middot; المجتمع",

      // Meta
      "meta.title": "محمد سعد — صحافة بصرية ووسائل التواصل الاجتماعي",
      "meta.description": "صحفي بصرية مستقل ومتواصل نشط في وسائل التواصل الاجتماعي مقيم في فنلندا.",
      "html.lang": "ar",
      "html.dir": "rtl"
    }
  };

  // ========================================
  // State
  // ========================================
  var currentLang = localStorage.getItem("portfolio-lang") || "fi";

  // ========================================
  // DOM Elements
  // ========================================
  var html = document.documentElement;
  var header = document.getElementById("header");
  var navToggle = document.getElementById("nav-toggle");
  var navLinks = document.getElementById("nav-links");
  var navLinkItems = document.querySelectorAll(".nav__link");
  var sections = document.querySelectorAll("section[id]");
  var langSwitch = document.getElementById("lang-switch");
  var langLabel = langSwitch.querySelector(".lang-switch__label");
  var metaTitle = document.querySelector("title");
  var metaDesc = document.querySelector('meta[name="description"]');

  // ========================================
  // Language Switching
  // ========================================
  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("portfolio-lang", lang);

    // Set html lang and dir
    html.setAttribute("lang", translations[lang]["html.lang"]);
    html.setAttribute("dir", translations[lang]["html.dir"]);

    // Update switcher label
    langLabel.textContent = translations[lang]["lang.switch"];

    // Update all elements with data-i18n
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });

    // Update meta
    if (metaTitle) metaTitle.textContent = translations[lang]["meta.title"];
    if (metaDesc) metaDesc.setAttribute("content", translations[lang]["meta.description"]);
  }

  function toggleLanguage() {
    var newLang = currentLang === "fi" ? "ar" : "fi";
    setLanguage(newLang);
  }

  // Initialize language
  setLanguage(currentLang);

  // Language switch click
  langSwitch.addEventListener("click", toggleLanguage);

  // ========================================
  // Mobile Navigation Toggle
  // ========================================
  function openNav() {
    navToggle.setAttribute("aria-expanded", "true");
    navLinks.classList.add("nav__links--open");
    document.body.style.overflow = "hidden";
  }

  function closeNav() {
    navToggle.setAttribute("aria-expanded", "false");
    navLinks.classList.remove("nav__links--open");
    document.body.style.overflow = "";
  }

  function toggleNav() {
    var isOpen = navToggle.getAttribute("aria-expanded") === "true";
    if (isOpen) {
      closeNav();
    } else {
      openNav();
    }
  }

  navToggle.addEventListener("click", toggleNav);

  // Close nav when a link is clicked
  navLinkItems.forEach(function (link) {
    link.addEventListener("click", function () {
      closeNav();
    });
  });

  // Close nav on Escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && navToggle.getAttribute("aria-expanded") === "true") {
      closeNav();
      navToggle.focus();
    }
  });

  // Close nav on outside click
  document.addEventListener("click", function (e) {
    if (
      navToggle.getAttribute("aria-expanded") === "true" &&
      !navLinks.contains(e.target) &&
      !navToggle.contains(e.target)
    ) {
      closeNav();
    }
  });

  // ========================================
  // Header Scroll Shadow
  // ========================================
  function handleHeaderScroll() {
    if (window.scrollY > 20) {
      header.classList.add("header--scrolled");
    } else {
      header.classList.remove("header--scrolled");
    }
  }

  window.addEventListener("scroll", handleHeaderScroll, { passive: true });

  // ========================================
  // Active Navigation Link on Scroll
  // ========================================
  function updateActiveLink() {
    var scrollPos = window.scrollY + 100;

    sections.forEach(function (section) {
      var top = section.offsetTop;
      var height = section.offsetHeight;
      var id = section.getAttribute("id");

      if (scrollPos >= top && scrollPos < top + height) {
        navLinkItems.forEach(function (link) {
          link.classList.remove("nav__link--active");
          if (link.getAttribute("href") === "#" + id) {
            link.classList.add("nav__link--active");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", updateActiveLink, { passive: true });

  // ========================================
  // Scroll Reveal with Intersection Observer
  // ========================================
  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!prefersReducedMotion && "IntersectionObserver" in window) {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal--visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    document.querySelectorAll(".reveal").forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    document.querySelectorAll(".reveal").forEach(function (el) {
      el.classList.add("reveal--visible");
    });
  }

  // ========================================
  // Smooth Scroll for Anchor Links (fallback)
  // ========================================
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      var targetId = this.getAttribute("href");
      if (targetId === "#") return;

      var targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        var headerOffset = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--header-height")) || 72;
        var elementPosition = targetEl.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementPosition - headerOffset,
          behavior: prefersReducedMotion ? "auto" : "smooth",
        });
      }
    });
  });
})();
