
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".scroll-fade");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  elements.forEach((el) => observer.observe(el));
});


const canvas = document.getElementById("matrix");

if (canvas) {
  const ctx = canvas.getContext("2d");

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = document.querySelector("header").offsetHeight;
  }

  resizeCanvas();
  const letters = "アカサタナハマヤラワ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const matrix = letters.split("");
  const fontSize = 16;
  let columns = canvas.width / fontSize;
  const drops = [];
  function resetDrops() {
    columns = Math.floor(canvas.width / fontSize);
    for (let x = 0; x < columns; x++) {
      drops[x] = 1;
    }
  }

  resetDrops();

  function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#ff7e00";
    ctx.font = fontSize + "px monospace";
    for (let i = 0; i < drops.length; i++) {
      const text = matrix[Math.floor(Math.random() * matrix.length)];
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }
  setInterval(draw, 33);
  window.addEventListener("resize", () => {
    resizeCanvas();
    resetDrops();
  });
}
