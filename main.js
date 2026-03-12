const canvas = document.querySelector('#lava');
const ctx = canvas.getContext('2d');

const state = {
  width: 0,
  height: 0,
  dpr: Math.max(1, window.devicePixelRatio || 1),
};

function resizeCanvas() {
  const rect = canvas.getBoundingClientRect();
  state.width = Math.max(1, Math.floor(rect.width * state.dpr));
  state.height = Math.max(1, Math.floor(rect.height * state.dpr));

  canvas.width = state.width;
  canvas.height = state.height;

  ctx.setTransform(state.dpr, 0, 0, state.dpr, 0, 0);
  ctx.imageSmoothingEnabled = true;
}

function drawPlaceholder() {
  const w = canvas.width / state.dpr;
  const h = canvas.height / state.dpr;

  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = 'rgba(255, 255, 255, 0.35)';
  ctx.fillRect(0, 0, w, h);

  ctx.fillStyle = '#2f2a24';
  ctx.font = '18px Georgia, serif';
  ctx.textAlign = 'center';
  ctx.fillText('Core Canvas Ready', w / 2, h / 2);
}

function onResize() {
  resizeCanvas();
  drawPlaceholder();
}

window.addEventListener('resize', onResize);

onResize();
