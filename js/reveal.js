// Animasi reveal on scroll (hormati prefers-reduced-motion)
(function(){
  const els = document.querySelectorAll('.reveal');
  if(!('IntersectionObserver' in window)){ // fallback
    els.forEach(el=> el.classList.add('visible'));
    return;
  }
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(en=>{
      if(en.isIntersecting){ en.target.classList.add('visible'); io.unobserve(en.target); }
    });
  }, { threshold:.12 });
  els.forEach(el=> io.observe(el));
})();
