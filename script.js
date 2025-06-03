// === SMOOTH SCROLL ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// === SCROLL REVEAL ===
const revealElements = document.querySelectorAll('.glass-section, .feature-item');
const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;
  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < triggerBottom) {
      el.classList.add('show');
    } else {
      el.classList.remove('show');
    }
  });
};
window.addEventListener('scroll', revealOnScroll);

// === CTA BUTTON SCROLL ===
const ctaButton = document.getElementById('cta-button');
if (ctaButton) {
  ctaButton.addEventListener('click', () => {
    const target = document.querySelector('#beta-form-section');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

// === DARK MODE TOGGLE BUTTON ===
const toggleBtn = document.createElement('button');
toggleBtn.innerText = "☀ / 🌙";
toggleBtn.className = "toggle-btn";
document.body.appendChild(toggleBtn);

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  // Optional: Simpan preferensi mode ke localStorage supaya remembered
  if (document.body.classList.contains('light-mode')) {
    localStorage.setItem('theme', 'light');
  } else {
    localStorage.setItem('theme', 'dark');
  }
});

// === Menerapkan theme dari localStorage saat load ===
window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-mode');
  }
});

// === FORM SUBMISSION HANDLING ===
const betaForm = document.getElementById("beta-form");
if (betaForm) {
  betaForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Terima kasih! Akan kami hubungi segera.");
    e.target.reset();
  });
}

// === CLICK SOUND ===
const soundClick = new Audio("https://freesound.org/data/previews/422/422953_5121236-lq.mp3");
soundClick.volume = 0.3;

document.querySelectorAll("a, button").forEach(el => {
  el.addEventListener('click', () => {
    try {
      soundClick.currentTime = 0;
      soundClick.play();
    } catch (err) {
      console.warn("Gagal memutar suara klik:", err);
    }
  });
});

// === LOADER FADE OUT & FIRST REVEAL ===
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if (loader) {
    loader.classList.add('hidden'); // gunakan class hidden yang sudah di CSS
    setTimeout(() => {
      loader.style.display = "none";
    }, 600); // delay sedikit lebih kecil untuk sinkron dengan CSS
  }
  revealOnScroll(); // panggil agar elemen muncul langsung setelah load
});
