let isPainting = false;
let lineWidth = 3;
let startX;
let startY;

for (i = 0; i < 11; i++) {
  const canvas = document.querySelector("#drawing-board" + i.toString());
  const toolbar = document.querySelector("#toolbar" + i.toString());
  const ctx = canvas.getContext("2d");
  canvas.width = 300;
  canvas.height = 600;
  ctx.strokeStyle = "hsl(265, 98%, 47%)";

  toolbar.style.display = "none";

  toolbar.addEventListener("click", (e) => {
    if (e.target.id === "clear") {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  });

  const draw = (e) => {
    if (!isPainting) {
      return;
    }
    ctx.lineWidth = lineWidth;
    ctx.lineCap = "round";
    ctx.lineTo(e.clientX - canvas.getBoundingClientRect().left, e.clientY - canvas.getBoundingClientRect().top);
    ctx.stroke();
  };

  canvas.addEventListener("mousedown", (e) => {
    isPainting = true;
  });

  canvas.addEventListener("mouseup", (e) => {
    isPainting = false;
    ctx.stroke();
    ctx.beginPath();
  });

  canvas.addEventListener("click", (e) => {
    toolbar.style.display = "block";
  });

  canvas.addEventListener("mousemove", draw);
}
