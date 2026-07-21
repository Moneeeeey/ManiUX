// Project card spotlight.
// On hover, a soft light tracks the pointer position within each card.
// Skipped entirely on touch devices, where hover has no meaning.

(function () {
  const cards = document.querySelectorAll('.project-card');
  if (cards.length === 0) return;

  const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (!isFinePointer) return;

  cards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty('--x', x + '%');
      card.style.setProperty('--y', y + '%');
    });
  });
})();
