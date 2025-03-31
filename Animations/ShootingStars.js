class ShootingStars {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.stars = [];
    this.init();
  }

  init() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    setInterval(() => this.createStar(), 500);
    this.animate();
  }

  createStar() {
    this.stars.push({
      x: Math.random() * this.canvas.width,
      y: Math.random() * this.canvas.height * 0.5,
      speed: Math.random() * 5 + 2,
      length: Math.random() * 30 + 10
    });
  }

  animate() {
    this.ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.stars.forEach((s, i) => {
      this.ctx.strokeStyle = "white";
      this.ctx.lineWidth = 2;
      this.ctx.beginPath();
      this.ctx.moveTo(s.x, s.y);
      this.ctx.lineTo(s.x - s.length, s.y + s.length);
      this.ctx.stroke();
      s.x -= s.speed;
      s.y += s.speed;
      if (s.x < 0 || s.y > this.canvas.height) this.stars.splice(i, 1);
    });
    requestAnimationFrame(() => this.animate());
  }
}

const canvas = document.getElementById("animationCanvas");
new ShootingStars(canvas);
