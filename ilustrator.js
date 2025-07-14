// const follower = document.querySelector('.cursor-follower');
// const project = document.querySelector('.project-list');

//   let mouse = { x: 0, y: 0 };     // position réelle de la souris
//   let pos = { x: 0, y: 0 };       // position du follower

//   let isHovering = false;

//   // boucle d'animation lissée
//   gsap.ticker.add(() => {
//     if (!isHovering) return;

//     // interpolation fluide vers la position de la souris
//     pos.x += (mouse.x - pos.x) * 0.1;
//     pos.y += (mouse.y - pos.y) * 0.1;

//     gsap.set(follower, {
//       x: pos.x,
//       y: pos.y
//     });
//   });

//   project.addEventListener('mouseenter', () => {
//     isHovering = true;
//     follower.style.opacity = 1;
//   });

//   project.addEventListener('mouseleave', () => {
//     isHovering = false;
//     follower.style.opacity = 0;
//   });

//   project.addEventListener('mousemove', (e) => {
//     mouse.x = e.clientX;
//     mouse.y = e.clientY;
//   });