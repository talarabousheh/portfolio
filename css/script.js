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



/* voor portfolio en project paginas zo wanneer u op een project
klikt, gaat u naar het gewenste project en ziet u de informatie over project.
Dit gebeurt dankzij JavaScript */

document.addEventListener("DOMContentLoaded", function () {

  const container = document.getElementById("project-content");

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

const projects = {
  1: {
    title: "Project 1",
    description: "Een zip bestand met daarin: logo, 3 horizantale sfeerbeelden, en een professionele foto van mijzelf"
  },
  2: {
    title: "Project 2",
    description: "Wireframes voor desktop en mobile devices 4 paginas"
  },
  3: {
    title: "Project 3",
    description: "Werken met Project 1 en 2, en eigen website maken met css, html codes"
  },
  4: {
    title: "Project 4",
    description: "Info over Project 4 bestaat niet"
  },
  5: {
    title: "Project 5",
    description: "Info over Project 5 bestaat niet"
  },
  6: {
    title: "Project 6",
    description: "Info over Project 6 bestaat niet"
  }
};



 if (projects[id]) {
    const p = projects[id];
    container.innerHTML = `
      <h1>${p.title}</h1>
      ${p.image ? `<img src="${p.image}" alt="${p.title}" class="project-img">` : ""}
      <p>${p.description}</p>

      <a href="portfolio.html">← Terug naar portfolio</a>
    `;
    // deze stukje was niet nodig maar ik heb het zelf toegevoegd
  } else {
    container.innerHTML = `
      <h1>Project niet gevonden</h1>
      <a href="portfolio.html">← Terug naar portfolio</a>
    `;
  }

});
