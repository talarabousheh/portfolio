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
      const telefoonnumeer = document.getElementById('messageInput').value.trim();
      if(!email || !message || !telefoonnumeer){
        e.preventDefault();
        alert('Vul alstublieft uw e-mail, telefoonnummer, en bericht in.');
      } else {
        alert('Bedankt voor uw bericht! We nemen contact met u op.');
      }
    });
  }

});
document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("project-content");
  const infoBox = document.getElementById("info-box");

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  const projects = {
    1: {
      title: "SlimmeWoningSimulatie",
      description: "Een simulatie van een slimme woning die verschillende apparaten automatisch aanstuurt.",
      image: "./assets/images/SlimmeWoningSimulatie.png"
    },
    2: {
      title: "StemBusSysteem",
      description: "Een systeem voor het efficiënt beheren van stemrondes en resultaten.",
      image: "./assets/images/StemBusSysteem.png"
    },
    3: {
      title: "Hart Python",
      description: "Een Python-project dat hartslagmetingen analyseert en visualiseert.",
      image: "./assets/images/hart.png"
    },
    4: {
      title: "Business Project",
      description: "Een businessproject gericht op het optimaliseren van workflows.",
      image: "./assets/images/Business.png"
    },
    5: {
      title: "Linux Server Portfolio",
      description: "Een portfolio van Linux-servers met diverse configuraties en toepassingen.",
      image: "./assets/images/LinuxServer.png"
    },
    6: {
      title: "DataCom & Netwerken",
      description: "Werken met Cisco Packet tracer.",
      image: "./assets/images/Datacom.png"
    }
  };
  if (!id || !projects[id]) {
    infoBox.style.display = "block";
    container.innerHTML = "";
    return; 
  }
  infoBox.style.display = "none";
  const project = projects[id];
  container.innerHTML = `
    <div class="project-details">
      <h1>${project.title}</h1>
      <p class="project-description">${project.description}</p>
      <img src="${project.image}" alt="${project.title}" class="project-image">
    </div>
  `;
});
