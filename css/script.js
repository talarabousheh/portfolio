document.addEventListener('DOMContentLoaded', () => {

  // Fade-in effect
  const faders = document.querySelectorAll('.fade-in');
  const appearOptions = { threshold: 0, rootMargin: "0px 0px -100px 0px" };
  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('appear');
      observer.unobserve(entry.target);
    });
  }, appearOptions);
  faders.forEach(fader => appearOnScroll.observe(fader));

  // Project hover animation
  const projects = document.querySelectorAll('.project-link');
  projects.forEach(project => {
    project.addEventListener('mouseenter', () => project.style.transform = "scale(1.05)");
    project.addEventListener('mouseleave', () => project.style.transform = "scale(1)");
  });

  // Image hover
  const mainImages = document.querySelectorAll('.main-image, .center-image img, .portfolio-section img');
  mainImages.forEach(img => {
    img.addEventListener('mouseenter', () => img.style.transform = "scale(1.05)");
    img.addEventListener('mouseleave', () => img.style.transform = "scale(1)");
  });

  // Contactformulier validatie
  const contactForm = document.querySelector('.contact-form');
  if(contactForm){
    contactForm.addEventListener('submit', (e) => {
      const email = document.getElementById('emailInput').value.trim();
      const message = document.getElementById('messageInput').value.trim();
      if(!email || !message){
        e.preventDefault();
        alert('Vul alstublieft uw e-mail en bericht in.');
      } else {
        alert('Bedankt voor uw bericht! We nemen contact met u op.');
      }
    });
  }

});
