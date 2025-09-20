// Mobile nav toggle
(function(){
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  navToggle?.addEventListener('click', () => {
    const open = navMenu.getAttribute('data-open') === 'true';
    navMenu.setAttribute('data-open', String(!open));
    navToggle.setAttribute('aria-expanded', String(!open));
  });

  // Tutup menu saat klik link (mobile UX)
  navMenu?.querySelectorAll('a')?.forEach(a=>{
    a.addEventListener('click', ()=>{
      navMenu.setAttribute('data-open', 'false');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
})();
