class WaterRipple {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.ripples = [];
    this.init();
  }

  init() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    this.canvas.addEventListener("click", (event) => {
      this.createRipple(event.clientX, event.clientY);
    });

    this.animate();
  }

  createRipple(x, y) {
    this.ripples.push({ x, y, radius: 1, opacity: 1 });
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ripples.forEach((ripple, index) => {
      ripple.radius += 2;
      ripple.opacity -= 0.02;

      this.ctx.strokeStyle = `rgba(0, 150, 255, ${ripple.opacity})`;
      this.ctx.lineWidth = 2;
      this.ctx.beginPath();
      this.ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
      this.ctx.stroke();

      if (ripple.opacity <= 0) {
        this.ripples.splice(index, 1);
      }
    });

    requestAnimationFrame(() => this.animate());
  }
}

const canvas = document.getElementById("animationCanvas");
new WaterRipple(canvas);
