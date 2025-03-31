class ExplosionEffect {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.explosions = [];
    this.init();
  }

  init() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    window.addEventListener("click", (e) => this.createExplosion(e.clientX, e.clientY));
    this.animate();
  }

  createExplosion(x, y) {
    let particles = [];
    for (let i = 0; i < 30; i++) {
      particles.push({
        x,
        y,
        angle: Math.random() * Math.PI * 2,
        speed: Math.random() * 5 + 1,
        life: 50,
        color: `hsl(${Math.random() * 360}, 100%, 50%)`
      });
    }
    this.explosions.push(particles);
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.explosions.forEach((particles, index) => {
      particles.forEach((p, i) => {
        p.x += Math.cos(p.angle) * p.speed;
        p.y += Math.sin(p.angle) * p.speed;
        p.life -= 1;
        this.ctx.fillStyle = p.color;
        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
        this.ctx.fill();
        if (p.life <= 0) particles.splice(i, 1);
      });
      if (particles.length === 0) this.explosions.splice(index, 1);
    });

    requestAnimationFrame(() => this.animate());
  }
}

const canvas = document.getElementById("animationCanvas");
new ExplosionEffect(canvas);
