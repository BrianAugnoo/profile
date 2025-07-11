document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollSmoother)
  let smoother = ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 3,
    smoothTouch: 0.1,
    effects: true
  });

  const home = document.querySelector("#home");
  const about = document.querySelector("#about");
  const contact = document.querySelector("#contact")

  home.addEventListener("click", (e) => {
    e.preventDefault();
    smoother.scrollTo("#intro", true, "center center");
  })

  about.addEventListener("click", (e) => {
    e.preventDefault();
    smoother.scrollTo("#education", true, "center center");
  })

  gsap.fromTo(".show-cv",
  { rotate: -5 },
  {
    rotate: 5,
    duration: 0.5,
    yoyo: true,
    repeat: -1,
    repeatDelay: 1,
    ease: "power1.inOut",
  });

  gsap.from(".cards #card", {
  scrollTrigger: {
    trigger: ".cards",
    toggleActions: "restart none none none",
    start: "top 80%",
  },
  y: 100,
  opacity: 0,
  scale: 0,
  ease: "elastic.out(0.4, 0.15)",
  duration: 1,
  stagger: 0.5
  });



  gsap.to(".project-description", {
  scrollTrigger: {
    trigger: ".project-description",
    start: "top",
    end: "bottom + 140vh",
    scrub: true,
    pin: true,
  },
  opacity: 1,
  y: "20vh",
  onUpdate: () => {
    const handmadePosition = document.querySelector("#handmade").getBoundingClientRect();
    const carbnbPosition = document.querySelector("#carbnb").getBoundingClientRect();
    const description = document.querySelector(".project-description");
    const descriptionPosition = description.getBoundingClientRect();

    if (description.dataset.project === "handmade" && (carbnbPosition.top === descriptionPosition.top || carbnbPosition.top < 150)) {
      console.log("change into carbnb");
      description.dataset.project = "carbnb";
      description.querySelector("h3").textContent = "-Carbnb";
      description.classList.add("carbnb-description");
      description.classList.remove("handmade-description");

    } else if (description.dataset.project === "carbnb" && handmadePosition.bottom >= window.innerHeight / 2) {
      console.log("change into handmade");
      description.dataset.project = "handmade";
      description.querySelector("h3").textContent = "-Handmade";
      description.classList.add("handmade-description");
      description.classList.remove("carbnb-description");

    }
  }
});

});

  var form = document.getElementById("my-form");

  async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("my-form-status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: {
          'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        status.innerHTML = "Thanks for your submission!";
        form.reset()
      } else {
        response.json().then(data => {
          if (Object.hasOwn(data, 'errors')) {
            status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
          } else {
            status.innerHTML = "Oops! There was a problem submitting your form"
          }
        })
      }
    }).catch(error => {
      status.innerHTML = "Oops! There was a problem submitting your form"
    });
  }
  form.addEventListener("submit", handleSubmit)

  // Animation GSAP sur le bouton du formulaire de contact
  const contactBtn = document.querySelector('#my-form-button');
  if (contactBtn) {
    contactBtn.addEventListener('mouseenter', () => {
      gsap.to(contactBtn, { scale: 1.08, boxShadow: '0 4px 24px #a4508b', duration: 0.25, ease: 'power2.out' });
    });
    contactBtn.addEventListener('mouseleave', () => {
      gsap.to(contactBtn, { scale: 1, boxShadow: '0 2px 12px rgba(70,2,95,0.13)', duration: 0.25, ease: 'power2.in' });
    });
  }
