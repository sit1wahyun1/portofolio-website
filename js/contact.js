// Form mailto + tombol salin email
(function(){
  const form = document.getElementById('contactForm');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = encodeURIComponent(document.getElementById('name').value.trim());
    const email = encodeURIComponent(document.getElementById('email').value.trim());
    const msg = encodeURIComponent(document.getElementById('message').value.trim());
    const subject = `Pesan dari ${decodeURIComponent(name)}`;
    // TODO: ganti email tujuan berikut
    const to = 'siti.wahyuni@email.com';
    const body = `Nama: ${decodeURIComponent(name)}%0D%0AEmail: ${decodeURIComponent(email)}%0D%0A%0D%0APesan:%0D%0A${decodeURIComponent(msg)}`;
    window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${body}`;
  });

  document.getElementById('copyMail')?.addEventListener('click', async () => {
    try{
      await navigator.clipboard.writeText('siti.wahyuni@email.com'); // TODO: ganti email
      alert('Email disalin!');
    }catch(_){ alert('Gagal menyalin, silakan tekan lama lalu salin.') }
  });
})();
