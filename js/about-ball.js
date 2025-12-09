const yellowBall = document.getElementById("yellowBall");
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let ballX = mouseX;
let ballY = mouseY;
let lastMouseX = mouseX;
let lastMouseY = mouseY;
let currentScale = 1;
let targetScale = 1;

document.addEventListener("mousemove", (e) => {
  const dx = e.clientX - lastMouseX;
  const dy = e.clientY - lastMouseY;
  const distance = Math.sqrt(dx * dx + dy * dy);
  targetScale = distance > 2 ? 1 + Math.min(distance * 0.01, 0.5) : 1;
  mouseX = e.clientX;
  mouseY = e.clientY;
  lastMouseX = e.clientX;
  lastMouseY = e.clientY;
});

function animateBall() {
  const easing = 0.08;
  const dx = mouseX - ballX;
  const dy = mouseY - ballY;
  ballX += dx * easing;
  ballY += dy * easing;
  const scaleDiff = targetScale - currentScale;
  currentScale += scaleDiff * 0.1;
  yellowBall.style.transform = `translate(${ballX - 300}px, ${
    ballY - 300
  }px) scale(${currentScale})`;
  requestAnimationFrame(animateBall);
}
animateBall();
yellowBall.style.transform = `translate(${mouseX - 300}px, ${
  mouseY - 300
}px) scale(1)`;
