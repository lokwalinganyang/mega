// GSAP Animations
document.addEventListener('DOMContentLoaded', () => {
  // Hero Section Animation
  gsap.fromTo(
    '.hero-text',
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
  );

  // Service Cards Animation
  gsap.fromTo(
    '.service-card',
    { opacity: 0, scale: 0.8 },
    {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: 'elastic.out(1, 0.3)',
      scrollTrigger: {
        trigger: '#services',
        start: 'top 80%',
      },
    }
  );

  // Contact Section Animation
  gsap.fromTo(
    '#contact div',
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '#contact',
        start: 'top 80%',
      },
    }
  );
});

// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Smooth Scroll for All Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    if (window.innerWidth <= 1024) {
      mobileMenu.classList.add('hidden'); // Hide menu after clicking on mobile
    }
  });
});