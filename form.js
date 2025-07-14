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

console.log("form connected")