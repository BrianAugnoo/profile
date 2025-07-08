console.log("hire me and the code god will bless you🥀");


let targetScrollY = window.scrollY;
let isAnimating = false;

const smoothScroll = () => {
  const currentY = window.scrollY;
  const delta = targetScrollY - currentY;
  window.scrollTo(0, currentY + delta * 0.1);

  if (Math.abs(delta) > 0.5) {
    requestAnimationFrame(smoothScroll);
  } else {
    isAnimating = false;
    console.log("stop")
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


let descriptionSpacing = false;
let handmadeFeed = true;
let carbnbFeed = false;

const project = () => {
  const description = document.querySelector(".project-description");
  const descriptionPosition = description.getBoundingClientRect();
  const handmadePosition = document.querySelector("#handmade").getBoundingClientRect();
  const carbnbPosition = document.querySelector("#carbnb").getBoundingClientRect();
  const title = description.querySelector("h3");
  const text = description.querySelector("p");

  if (descriptionPosition.top <= 100 && !descriptionSpacing ) {
    description.classList.add("description-spacing");
    descriptionSpacing = true;

  } else if (descriptionPosition.top >= 100 && descriptionSpacing) {
    descriptionSpacing = false;
    description.classList.remove("description-spacing");
  }

  if (descriptionPosition.top >= carbnbPosition.top && !carbnbFeed) {
    description.classList.add("relative-position")
    title.textContent = "Carbnb";
    text.textContent = "good car aPP";
    carbnbFeed = true
  } else if (carbnbFeed && carbnbPosition < 200) {
    title.textContent = "Handmade"
    text.textContent = "Best App"
    description.classList.remove("relative-position")
    description.classList.add("sticky-position")
    carbnbFeed = false
  }
}
