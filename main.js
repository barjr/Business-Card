const wrap = document.getElementById('cardWrap');
const card = document.getElementById('card');
const turn = document.getElementById('turn');
const whisper = document.querySelector('.whisper');
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

const lines = {
  bone: 'Look at that subtle off-white coloring.',
  eggshell: 'Eggshell, with Romalian type.',
  nimbus: 'Raised lettering. Pale nimbus white.',
  watermark: 'Oh my God. It even has a watermark.',
};

// Show the monogram wherever the logo file isn't available yet
document.querySelectorAll('.logo').forEach((img) => {
  const fallback = () => img.parentElement.classList.add('no-logo');
  if (img.complete && img.naturalWidth === 0) fallback();
  img.addEventListener('error', fallback);
});

// Flip
const flip = () => {
  const flipped = card.classList.toggle('flipped');
  turn.setAttribute('aria-pressed', flipped);
  turn.textContent = flipped ? 'Turn it back' : 'Turn it over';
};
turn.addEventListener('click', flip);
card.addEventListener('click', (e) => {
  if (!e.target.closest('a')) flip();
});

// Stock picker
document.querySelectorAll('input[name="stock"]').forEach((input) => {
  input.addEventListener('change', () => {
    document.body.dataset.stock = input.value;
    whisper.classList.remove('show');
    void whisper.offsetWidth;
    whisper.textContent = lines[input.value];
    whisper.classList.add('show');
  });
});

// Tilt + light sheen following the pointer
if (!reduceMotion) {
  wrap.addEventListener('pointermove', (e) => {
    const r = wrap.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    card.style.setProperty('--ry', `${(x - 0.5) * 14}deg`);
    card.style.setProperty('--rx', `${(0.5 - y) * 10}deg`);
    card.style.setProperty('--mx', `${x * 100}%`);
    card.style.setProperty('--my', `${y * 100}%`);
  });
  wrap.addEventListener('pointerleave', () => {
    card.style.setProperty('--ry', '0deg');
    card.style.setProperty('--rx', '0deg');
  });
}
