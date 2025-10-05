const specializations = document.querySelectorAll(".specialization");

const video = document.getElementById('heroVideo');
const btn = document.getElementById('toggleBtn');



specializations.forEach(cat => {
  cat.addEventListener("click", function () {

    specializations.forEach(c => c.classList.remove("active"));


    this.classList.add("active");
  });
});


// ensure it starts paused
video.pause();

// click = toggle play/pause
btn.addEventListener('click', () => {
  if (video.paused || video.ended) {
    video.play().then(() => {
      btn.classList.remove('paused');
      btn.classList.add('playing');
      btn.setAttribute('aria-label', 'Pause video');
    }).catch(console.error);
  } else {
    video.pause();
    btn.classList.remove('playing');
    btn.classList.add('paused');
    btn.setAttribute('aria-label', 'Play video');
  }
});

// when video ends, show play icon again
video.addEventListener('ended', () => {
  btn.classList.remove('playing');
  btn.classList.add('paused');
  btn.setAttribute('aria-label', 'Play video');
});




document.addEventListener("DOMContentLoaded", () => {
  const dots = document.querySelectorAll(".dot");
  const cards = document.querySelectorAll(".testimonial-card");

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      // sabse pehle active class remove karo
      cards.forEach(c => c.classList.remove("active"));
      dots.forEach(d => d.classList.remove("active"));

      // jo click kiya hai use active karo
      cards[index].classList.add("active");
      dot.classList.add("active");
    });
  });
});



const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || subject === "" || message === "") {
    alert("⚠️ Please fill all fields.");
  } else {
    alert("✅ Your message has been sent successfully!");
    form.reset();
  }
});



  const backToTop = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      backToTop.style.display = "block";
    } else {
      backToTop.style.display = "none";
    }
  });


