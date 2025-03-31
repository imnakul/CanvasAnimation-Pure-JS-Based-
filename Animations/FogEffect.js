class FogEffect {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.particles = [];
    this.init();
  }

  init() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    for (let i = 0; i < 100; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        speedX: Math.random() * 1 - 0.5,
        speedY: Math.random() * 0.5 - 0.2,
        opacity: Math.random()
      });
    }
    this.animate();
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.particles.forEach(p => {
      p.x += p.speedX;
      p.y += p.speedY;
      if (p.y > this.canvas.height) p.y = 0;
      this.ctx.fillStyle = `rgba(200, 200, 200, ${p.opacity})`;
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, 10, 0, Math.PI * 2);
      this.ctx.fill();
    });
    requestAnimationFrame(() => this.animate());
  }
}

const canvas = document.getElementById("animationCanvas");
new FogEffect(canvas);
