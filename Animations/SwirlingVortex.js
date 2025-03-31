class SwirlingVortex {
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
        angle: Math.random() * Math.PI * 2,
        radius: Math.random() * 200 + 50,
        speed: Math.random() * 0.02 + 0.01,
        color: `hsl(${Math.random() * 360}, 100%, 50%)`
      });
    }
    this.animate();
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.particles.forEach(p => {
      p.angle += p.speed;
      let x = this.canvas.width / 2 + Math.cos(p.angle) * p.radius;
      let y = this.canvas.height / 2 + Math.sin(p.angle) * p.radius;
      this.ctx.fillStyle = p.color;
      this.ctx.beginPath();
      this.ctx.arc(x, y, 3, 0, Math.PI * 2);
      this.ctx.fill();
    });
    requestAnimationFrame(() => this.animate());
  }
}

const canvas = document.getElementById("animationCanvas");
new SwirlingVortex(canvas);
