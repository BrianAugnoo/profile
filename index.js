document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollSmoother)
  let smoother = ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 2,
    smoothTouch: 0.1,
    effects: true
  });

  const home = document.querySelector("#home");
  const about = document.querySelector("#about");
  const contact = document.querySelector("#contact")

  home.addEventListener("click", (e) => {
    e.preventDefault()
    smoother.scrollTo("#intro", true, "center center");
  })

  about.addEventListener("click", (e) => {
    e.preventDefault()
    smoother.scrollTo("#education", true, "center center")
  })

  gsap.to(".show-cv", {
    rotate: 45,
    scrollTrigger: {
      trigger: ".show-cv",
      start: "top center",
      markers: true,
      scrub: true
    }
  })
});
