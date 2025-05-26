// Confetti JS on load for celebration effect
window.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("confetti");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let W = window.innerWidth,
    H = window.innerHeight;
  canvas.width = W;
  canvas.height = H;

  const confettiColors = [
    "#fda085",
    "#f6d365",
    "#f08442",
    "#ffe4cc",
    "#30cfd0",
    "#a3a1ff",
  ];
  const emojis = ["🎉", "✨", "🥳", "🌈"];
  const confettis = Array.from({ length: 34 }, () => ({
    x: Math.random() * W,
    y: Math.random() * -H,
    r: 9 + Math.random() * 11,
    d: Math.random() * 90,
    color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
    emoji: emojis[Math.floor(Math.random() * emojis.length)],
    tilt: Math.random() * 8 - 4,
    tiltAngle: 0,
  }));

  function draw() {
    ctx.clearRect(0, 0, W, H);
    // Draw paper confetti
    confettis.forEach((c) => {
      ctx.beginPath();
      ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
      ctx.fillStyle = c.color;
      ctx.fill();
      ctx.font = `${c.r * 1.6}px serif`;
      ctx.save();
      ctx.translate(c.x, c.y);
      ctx.rotate(c.tilt);
      ctx.fillText(c.emoji, 0, 0);
      ctx.restore();
    });
    update();
  }
  function update() {
    confettis.forEach((c) => {
      c.y += 2 + Math.sin(c.d);
      c.x += Math.sin(c.d) * 1.3;
      c.tilt += 0.03 * Math.sin(c.d);
      c.d += 0.02;
      if (c.y > H + 30) {
        c.x = Math.random() * W;
        c.y = -20;
      }
    });
  }
  function animate() {
    draw();
    requestAnimationFrame(animate);
  }
  animate();

  window.addEventListener("resize", () => {
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;
  });
});
