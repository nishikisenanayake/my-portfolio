// ===========================
// SCROLL FADE-IN ANIMATION
// ===========================


// Select everything we want to animate
//const faders = document.querySelectorAll('.about, .skills, .projects, .connect, .contact, .project-card, .stat-card, .skill-item, .connect-card, .connect-grid');
// IntersectionObserver watches when elements enter the viewport
//const observer = new IntersectionObserver((entries) => {
//  entries.forEach(entry => {
  //  if (entry.isIntersecting) {
   //   entry.target.classList.add('visible');
    //  observer.unobserve(entry.target); // Stop watching once it's appeared
    //}
  //});
//}, { threshold: 0.1 }); // Trigger when 10% of the element is visible

// faders.forEach(el => observer.observe(el));

// ===========================




// ===========================
// ACTIVE NAV LINK HIGHLIGHT
// ===========================

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// ===========================
// NAVBAR SCROLL EFFECT
// ===========================
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});


document.addEventListener('DOMContentLoaded', () => {

  // ===========================
  // NAVBAR SCROLL EFFECT
  // ===========================
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // ===========================
  // ACTIVE NAV LINK HIGHLIGHT
  // ===========================
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // ===========================
  // CONTACT MODAL
  // ===========================
  const modal = document.getElementById('contactModal');
  const closeModal = document.getElementById('closeModal');
  const sayHelloBtn = document.querySelector('.btn-white');

  sayHelloBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.add('active');
  });

  closeModal.addEventListener('click', () => {
    modal.classList.remove('active');
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });

}); // End of DOMContentLoaded