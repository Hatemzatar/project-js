// Toggle dark mode
const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
  };
  
  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Lazy loading images
  if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
      img.src = img.dataset.src;
    });
  } else {
    // Fallback to a more compatible method here
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    // Script to initialize other features
  });
  