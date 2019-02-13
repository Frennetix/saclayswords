window.onload = function () {

  const canvas = document.getElementById("bottom"),
    ctx = canvas.getContext("2d"),
    stack = [],
    w = window.innerWidth,
    h = window.innerHeight;

  const drawer = function () {
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, w, h);
    stack.forEach(function (el) {
      el();
    });
    requestAnimationFrame(drawer);
  };

  const anim = function () {
    let x = 0;
    const speed = Math.random() * 2;
    const position = Math.random() * w - w / 2;
    const maxTall = Math.random() * 60;
    const maxSize = Math.random() * 10;
    const c = function (l, u) {
      return Math.round(Math.random() * (u || 255) + l || 0);
    };
    const color = "rgb(" + c(30, 10) + "," + c(80, 50) + "," + c(40, 50) + ")";

    return function () {
      const deviation = Math.cos(x / 30) * Math.min(x / 40, 20),
        tall = Math.min(x / 5, maxTall),
        size = Math.min(x / 50, maxSize);

      x += speed;
      ctx.save();

      ctx.strokeWidth = 1;
      ctx.translate(w / 2 + position, h);
      ctx.fillStyle = color;

      ctx.beginPath();
      ctx.lineTo(-size, 0);
      ctx.quadraticCurveTo(-size, -tall / 2, deviation, -tall);
      ctx.quadraticCurveTo(size, -tall / 2, size, 0);
      //ctx.closePath();
      ctx.fill();

      ctx.restore();
    };
  };

  for (var x = 0; x < 300; x++) {
    stack.push(anim());
  }

  canvas.width = w;
  canvas.height = h;

  drawer();


};
