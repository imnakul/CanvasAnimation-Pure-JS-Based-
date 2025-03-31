class MistyGlowParticles {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.particles = [];
    this.init();
  }

  init() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    for (let i = 0; i < 50; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        size: Math.random() * 8 + 2,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
        opacity: Math.random() * 0.5 + 0.5
      });
    }

    this.animate();
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.particles.forEach(p => {
      p.x += p.speedX;
      p.y += p.speedY;
      if (p.x > this.canvas.width || p.x < 0) p.speedX *= -1;
      if (p.y > this.canvas.height || p.y < 0) p.speedY *= -1;

      this.ctx.fillStyle = `rgba(200, 200, 255, ${p.opacity})`;
      this.ctx.shadowBlur = 10;
      this.ctx.shadowColor = "rgba(200, 200, 255, 1)";

      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      this.ctx.fill();
    });

    requestAnimationFrame(() => this.animate());
  }
}

const canvas = document.getElementById("animationCanvas");
new MistyGlowParticles(canvas);
