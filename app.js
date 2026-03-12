// ===========================
//  LA MAISON – RESTAURANT APP
//  app.js
// ===========================

// ── MENU DATA ──────────────────────────────────────
const menuData = {
  starters: [
    {
      name: "Foie Gras Torchon",
      desc: "Duck liver with brioche, Sauternes jelly and micro herbs.",
      price: "$34",
      tag: "Chef's Selection",
      isNew: false,
      img: "https://images.unsplash.com/photo-1547592180-85f173990554?w=400&q=80"
    },
    {
      name: "Burrata & Heirloom Tomato",
      desc: "Creamy burrata, slow-roasted heirlooms, aged balsamic, basil oil.",
      price: "$22",
      tag: "Seasonal",
      isNew: true,
      img: "https://images.unsplash.com/photo-1551248429-40975aa4de74?w=400&q=80"
    },
    {
      name: "Crab Bisque",
      desc: "Velvety blue crab bisque with a sherry cream and chive oil finish.",
      price: "$26",
      tag: "Signature",
      isNew: false,
      img: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400&q=80"
    },
    {
      name: "Truffle Arancini",
      desc: "Crisp risotto balls with black truffle, Parmesan and lemon aioli.",
      price: "$19",
      tag: "Vegetarian",
      isNew: false,
      img: "https://images.unsplash.com/photo-1565299715199-866c917206bb?w=400&q=80"
    }
  ],
  mains: [
    {
      name: "Dry-Aged Duck Breast",
      desc: "21-day aged duck, cherry reduction, dauphinoise potato, wilted spinach.",
      price: "$58",
      tag: "Chef's Favourite",
      isNew: false,
      img: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=400&q=80"
    },
    {
      name: "Seared Sea Bass",
      desc: "Line-caught bass with saffron velouté, samphire and caper butter.",
      price: "$52",
      tag: "Seasonal Catch",
      isNew: true,
      img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&q=80"
    },
    {
      name: "Filet de Bœuf",
      desc: "200g centre-cut fillet, bone marrow butter, pommes purée, red wine jus.",
      price: "$68",
      tag: "Signature",
      isNew: false,
      img: "https://images.unsplash.com/photo-1558030006-450675393462?w=400&q=80"
    },
    {
      name: "Wild Mushroom Risotto",
      desc: "Porcini, chanterelle and black truffle with Parmigiano-Reggiano.",
      price: "$38",
      tag: "Vegetarian",
      isNew: false,
      img: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400&q=80"
    }
  ],
  desserts: [
    {
      name: "Tarte Tatin",
      desc: "Classic caramelised apple tart with crème fraîche and calvados caramel.",
      price: "$16",
      tag: "Classic",
      isNew: false,
      img: "https://images.unsplash.com/photo-1562440499-64c9a111f713?w=400&q=80"
    },
    {
      name: "Chocolate Fondant",
      desc: "Warm Valrhona dark chocolate fondant with salted caramel ice cream.",
      price: "$18",
      tag: "Signature",
      isNew: false,
      img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&q=80"
    },
    {
      name: "Lemon Verbena Panna Cotta",
      desc: "Silky panna cotta with citrus curd, lavender tuile and berry compote.",
      price: "$15",
      tag: "Seasonal",
      isNew: true,
      img: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&q=80"
    },
    {
      name: "Cheese Board",
      desc: "Selection of five artisan cheeses with quince paste, walnuts and crackers.",
      price: "$24",
      tag: "Artisan",
      isNew: false,
      img: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=400&q=80"
    }
  ],
  drinks: [
    {
      name: "Champagne Selection",
      desc: "Curated by our sommelier — vintage and non-vintage available by glass or bottle.",
      price: "$22+",
      tag: "Curated",
      isNew: false,
      img: "https://images.unsplash.com/photo-1564419432573-a3b35e5e7038?w=400&q=80"
    },
    {
      name: "Sommelier's Wine Pairing",
      desc: "Five-course wine pairing tailored to your tasting menu by our Head Sommelier.",
      price: "$85",
      tag: "Experience",
      isNew: false,
      img: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&q=80"
    },
    {
      name: "Artisan Mocktails",
      desc: "House-made botanical mocktails using seasonal ingredients and rare shrubs.",
      price: "$14",
      tag: "Non-Alcoholic",
      isNew: true,
      img: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&q=80"
    },
    {
      name: "Digestif Collection",
      desc: "Armagnac, Cognac, aged whisky and liqueurs curated from our cellar.",
      price: "$18+",
      tag: "After Dinner",
      isNew: false,
      img: "https://images.unsplash.com/photo-1559181567-c3190ca9d233?w=400&q=80"
    }
  ]
};

// ── RENDER MENU ─────────────────────────────────────
function renderMenu(category) {
  const grid = document.getElementById('menuGrid');
  const items = menuData[category];
  grid.innerHTML = '';
  items.forEach((item, i) => {
    const card = document.createElement('div');
    card.className = 'menu-card';
    card.style.animationDelay = `${i * 0.08}s`;
    card.innerHTML = `
      ${item.isNew ? '<span class="badge-new">New</span>' : ''}
      <img class="menu-card-img" src="${item.img}" alt="${item.name}" loading="lazy"/>
      <div class="menu-card-tag">${item.tag}</div>
      <h3>${item.name}</h3>
      <p>${item.desc}</p>
      <div class="menu-card-price">${item.price}</div>
    `;
    grid.appendChild(card);
  });
}

// ── TABS ────────────────────────────────────────────
function initTabs() {
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderMenu(tab.dataset.tab);
    });
  });
  renderMenu('starters');
}

// ── NAVBAR SCROLL ───────────────────────────────────
function initNavbar() {
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  });
}

// ── HAMBURGER MENU ──────────────────────────────────
function initHamburger() {
  const btn   = document.getElementById('hamburger');
  const links = document.getElementById('navLinks');
  btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    links.classList.toggle('open');
  });
  // Close on link click
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      btn.classList.remove('open');
      links.classList.remove('open');
    });
  });
}

// ── RESERVATION FORM ────────────────────────────────
function initForm() {
  const form    = document.getElementById('reservationForm');
  const success = document.getElementById('formSuccess');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Simulate async submission
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Confirming…';
    btn.disabled = true;

    setTimeout(() => {
      form.style.display = 'none';
      success.classList.add('visible');
    }, 1200);
  });
}

// ── SCROLL REVEAL ───────────────────────────────────
function initScrollReveal() {
  const els = document.querySelectorAll(
    '.about-img, .about-text, .contact-card, .gallery-item'
  );
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  els.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(28px)';
    el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
    observer.observe(el);
  });
}

// ── SET MIN DATE ON RESERVATION INPUT ───────────────
function initDateInput() {
  const dateInput = document.querySelector('input[type="date"]');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
  }
}

// ── INIT ────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initHamburger();
  initTabs();
  initForm();
  initScrollReveal();
  initDateInput();
  console.log('🍽 La Maison – App Loaded');
});
