// Tema (light/dark/auto) dengan efek transisi ringan
(function(){
  const root = document.documentElement;
  const themeBtn = document.getElementById('themeBtn');
  const THEME_KEY = 'sw-theme';
  const ORDER = ['light', 'dark', 'auto'];
  const LABEL = {
    light: 'Tema terang',
    dark: 'Tema gelap',
    auto: 'Ikuti sistem'
  };
  let current = root.getAttribute('data-theme') || 'auto';

  function applyTheme(state, animate){
    const mode = state === 'light' || state === 'dark' ? state : 'auto';
    root.setAttribute('data-theme', mode);
    current = mode;
    if(themeBtn){
      themeBtn.dataset.themeState = mode;
      themeBtn.setAttribute('data-theme-state', mode);
      themeBtn.title = 'Tema: ' + mode;
      themeBtn.setAttribute('aria-label', LABEL[mode] + ' - klik untuk ubah');
      if(animate){
        themeBtn.classList.remove('theme-animate');
        // Force reflow agar animasi dapat diulang
        void themeBtn.offsetWidth;
        themeBtn.classList.add('theme-animate');
      }
    }
    try {
      localStorage.setItem(THEME_KEY, state);
    } catch(_) {}
  }

  function nextTheme(){
    const idx = ORDER.indexOf(current);
    if(idx === -1){
      return 'light';
    }
    return ORDER[(idx + 1) % ORDER.length];
  }

  (function init(){
    let saved;
    try {
      saved = localStorage.getItem(THEME_KEY);
    } catch(_) {}
    applyTheme(saved || current, false);
  })();

  themeBtn?.addEventListener('click', () => {
    const next = nextTheme();
    applyTheme(next, true);
  });
})();
