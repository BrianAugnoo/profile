console.log("sculpture connected");
const canvas = document.querySelector("#planet");
const ctx = canvas.getContext("2d");

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    draw();
  }
  window.addEventListener('resize', resize);
  resize();

  function draw() {
    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    // Sky gradient
    const sky = ctx.createLinearGradient(0, 0, 0, h);
    sky.addColorStop(0, '#0a001a');
    sky.addColorStop(0.5, '#200032');
    sky.addColorStop(1, '#000');
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, w, h);

    // Stars
    for (let i = 0; i < 100; i++) {
      const x = Math.random() * w;
      const y = Math.random() * h * 0.4;
      const r = Math.random() * 1.5;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255,255,255,' + (0.2 + Math.random() * 0.5) + ')';
      ctx.fill();
    }

    // Glow horizon
    const glow = ctx.createRadialGradient(w/2, h*0.7, w*0.02, w/2, h*0.7, w*0.6);
    glow.addColorStop(0, 'rgba(255,255,255,0.4)');
    glow.addColorStop(0.2, 'rgba(128,0,255,0.2)');
    glow.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(w/2, h*0.7, w, Math.PI, 2*Math.PI);
    ctx.fill();

    // Planet silhouette
    ctx.beginPath();
    ctx.arc(w/2, h*0.7, w, Math.PI, 2*Math.PI);
    ctx.fillStyle = '#111';
    ctx.fill();

    // Bright rim
    ctx.beginPath();
    ctx.arc(w/2, h*0.7, w, Math.PI, 2*Math.PI);
    ctx.lineWidth = w * 0.002;
    ctx.strokeStyle = '#fff';
    ctx.stroke();
  }