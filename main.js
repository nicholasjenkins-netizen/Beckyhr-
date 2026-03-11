// Mobile navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks  = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open);
    navToggle.innerHTML = open ? '&times;' : '&#9776;';
  });

  // Close nav when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.innerHTML = '&#9776;';
      navToggle.setAttribute('aria-expanded', false);
    });
  });
}

// Smooth active nav highlight on scroll
const sections  = document.querySelectorAll('section[id]');
const navItems  = document.querySelectorAll('.nav-links a[href^="#"]');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navItems.forEach(a => a.classList.remove('active'));
      const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => observer.observe(s));

// Simple contact form feedback (no backend — just UI)
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Message sent — thank you!';
    btn.disabled = true;
    btn.style.background = '#2e7d32';
    btn.style.borderColor = '#2e7d32';
    btn.style.color = '#fff';
    setTimeout(() => {
      btn.textContent = 'Send Message';
      btn.disabled = false;
      btn.style.cssText = '';
      form.reset();
    }, 4000);
  });
}
