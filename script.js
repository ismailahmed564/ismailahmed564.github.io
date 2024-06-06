window.addEventListener("DOMContentLoaded", function () {
    function _0x46832a() {
      if (innerWidth <= 0x1a4 && innerHeight <= 0x31f) {
        document.getElementById("messageOverlay").style.display = "block";
        document.getElementById("messageContainer").style.display = "block";
      } else {
        document.getElementById("messageOverlay").style.display = 'none';
        document.getElementById("messageContainer").style.display = "none";
      }
    }
    _0x46832a();
    window.addEventListener("resize", _0x46832a);
  });
  const darkModeToggle = document.getElementById("darkModeToggle");
  const body = document.body;
  function toggleDarkMode() {
    body.classList.toggle("dark-mode");
    darkModeToggle.innerHTML = body.classList.contains("dark-mode") ? "<i class=\"fas fa-moon\"></i>" : "<i class=\"fas fa-sun\"></i>";
  }
  const heroSection = document.querySelector(".hero");
  const featuresSection = document.querySelector(".features");
  const coursesSection = document.querySelector(".courses");
  setInterval(() => {
    const _0x514cf7 = Math.floor(Math.random() * 0xffffff).toString(0x10);
    const _0x1138f4 = '#' + _0x514cf7;
    body.style.setProperty('--primary-color', _0x1138f4);
    heroSection.style.setProperty("--primary-color", _0x1138f4);
    featuresSection.style.setProperty("--primary-color", _0x1138f4);
    coursesSection.style.setProperty('--primary-color', _0x1138f4);
  }, 0x1388);
  const toggleDarkModeButton = document.getElementById("toggle-dark-mode");
  const contactFormContainer = document.querySelector(".contact-form-container");
  toggleDarkModeButton.addEventListener('click', () => {
    contactFormContainer.classList.toggle("dark-mode");
  });
  var typed = new Typed(".auto-type", {
    'strings': ["Student", "Gamer", "Frendly", "Good-Boy", "Quick-Learner"],
    'typeSpeed': 0x50,
    'backSpeed': 0x46,
    'loop': true
  });
  const scrollUpButton = document.getElementById('scroll-up-button');
  scrollUpButton.addEventListener("click", () => {
    window.scrollTo({
      'top': 0x0,
      'behavior': "smooth"
    });
  });
  window.addEventListener("scroll", () => {
    if (window.scrollY > 0x12c) {
      scrollUpButton.style.display = "block";
    } else {
      scrollUpButton.style.display = "none";
    }
  });