// Tema (light/dark/auto) dengan localStorage
(function(){
  const root = document.documentElement;
  const themeBtn = document.getElementById('themeBtn');
  const THEME_KEY = 'sw-theme';

  function applyTheme(t){
    if(t === 'light' || t === 'dark'){ root.setAttribute('data-theme', t); }
    else{ root.setAttribute('data-theme', 'auto'); }
    try{ localStorage.setItem(THEME_KEY, t); }catch(_) {}
  }

  (function initTheme(){
    try{
      const saved = localStorage.getItem(THEME_KEY);
      if(saved) applyTheme(saved);
    }catch(_){}
  })();

  themeBtn?.addEventListener('click', () => {
    const curr = root.getAttribute('data-theme');
    const next = curr === 'light' ? 'dark' : curr === 'dark' ? 'auto' : 'light';
    applyTheme(next);
    themeBtn.title = 'Tema: ' + next;
  });
})();
