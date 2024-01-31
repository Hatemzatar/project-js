// Responsive Mobile Navigation
const navigation = document.querySelector('.navigation');
document.querySelector('.logo').addEventListener('click', () => {
    navigation.classList.toggle('active');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Service Section Animation
const serviceBoxes = document.querySelectorAll('.service-box');
serviceBoxes.forEach(box => {
    box.addEventListener('mouseover', () => {
        box.style.transform = 'scale(1.05)';
    });
    box.addEventListener('mouseout', () => {
        box.style.transform = 'scale(1)';
    });
});


const aboutBoxes = document.querySelectorAll('.about-section');
aboutBoxes.forEach(box => {
    box.addEventListener('mouseover', () => {
        box.style.transform = 'scale(1.05)';
    });
    box.addEventListener('mouseout', () => {
        box.style.transform = 'scale(1)';
    });
});


document.addEventListener('scroll', function() {
    const parallaxElements = document.querySelectorAll('.parallax');
    for (const element of parallaxElements) {
      const position = window.pageYOffset * element.dataset.speed;
      element.style.backgroundPosition = `50% ${position}px`;
    }
  });
  


  