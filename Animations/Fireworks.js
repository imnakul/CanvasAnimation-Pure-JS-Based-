class Fireworks {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.fireworks = [];
    this.init();
  }

  init() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    setInterval(() => this.createFirework(), 1000);
    this.animate();
  }

  createFirework() {
    let firework = {
      x: Math.random() * this.canvas.width,
      y: Math.random() * this.canvas.height / 2,
      particles: []
    };
    for (let i = 0; i < 50; i++) {
      firework.particles.push({
        x: firework.x,
        y: firework.y,
        angle: Math.random() * Math.PI * 2,
        speed: Math.random() * 4 + 1,
        life: 50,
        color: `hsl(${Math.random() * 360}, 100%, 50%)`
      });
    }
    this.fireworks.push(firework);
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.fireworks.forEach((fw, index) => {
      fw.particles.forEach((p, i) => {
        p.x += Math.cos(p.angle) * p.speed;
        p.y += Math.sin(p.angle) * p.speed;
        p.life -= 1;
        this.ctx.fillStyle = p.color;
        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        this.ctx.fill();
        if (p.life <= 0) fw.particles.splice(i, 1);
      });
      if (fw.particles.length === 0) this.fireworks.splice(index, 1);
    });

    requestAnimationFrame(() => this.animate());
  }
}

const canvas = document.getElementById("animationCanvas");
new Fireworks(canvas);
