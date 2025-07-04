console.log("hire me and the code god will bless you🥀");


let targetScrollY = window.scrollY;
let isAnimating = false;

function smoothScroll() {
  const currentY = window.scrollY;
  const delta = targetScrollY - currentY;
  window.scrollTo(0, currentY + delta * 0.1);

  if (Math.abs(delta) > 0.5) {
    requestAnimationFrame(smoothScroll);
  } else {
    isAnimating = false;
  }
}

window.addEventListener('wheel', function(e) {
  e.preventDefault();
  targetScrollY = Math.max(
    0,
    Math.min(
      document.body.scrollHeight - window.innerHeight,
      targetScrollY + e.deltaY
    )
  );
  if (!isAnimating) {
    isAnimating = true;
    requestAnimationFrame(smoothScroll);
  }
}, { passive: false });