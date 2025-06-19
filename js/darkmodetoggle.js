(() => {
  const body = document.body;

  document.getElementById('darkToggle')?.addEventListener('click', () => {
    body.classList.add('bg-dark', 'text-white');
  });

  document.getElementById('lightToggle')?.addEventListener('click', () => {
    body.classList.remove('bg-dark', 'text-white');
  });
})();
