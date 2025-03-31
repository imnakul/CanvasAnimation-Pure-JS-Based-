class LightningStrikes {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.init();
  }

  init() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    setInterval(() => this.drawLightning(), 1000);
  }

  drawLightning() {
    const x = Math.random() * this.canvas.width;
    const y = Math.random() * this.canvas.height;
    this.ctx.strokeStyle = "rgba(255, 255, 255, 0.8)";
    this.ctx.lineWidth = 3;
    this.ctx.beginPath();
    this.ctx.moveTo(x, 0);
    for (let i = 0; i < 10; i++) {
      this.ctx.lineTo(
        x + Math.random() * 50 - 25,
        (this.canvas.height / 10) * (i + 1)
      );
    }
    this.ctx.stroke();
    setTimeout(() => this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height), 300);
  }
}

const canvas = document.getElementById("animationCanvas");
new LightningStrikes(canvas);
