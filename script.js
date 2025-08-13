// Simple enhancements: mobile nav, active link, year, smooth scroll
const navToggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('menu');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    const open = menu.style.display === 'block';
    menu.style.display = open ? 'none' : 'block';
    navToggle.setAttribute('aria-expanded', String(!open));
  });
}

document.getElementById('year').textContent = new Date().getFullYear();

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({behavior:'smooth', block:'start'});
      history.pushState(null, '', '#' + id);
    }
  });
});

// Active link on scroll
const sections = [...document.querySelectorAll('main section[id]')];
const navLinks = [...document.querySelectorAll('.nav a')];
const onScroll = () => {
  const y = window.scrollY + 100;
  let current = null;
  for (const s of sections) {
    if (y >= s.offsetTop && y < s.offsetTop + s.offsetHeight) current = s.id;
  }
  navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current));
};
document.addEventListener('scroll', onScroll);
onScroll();
