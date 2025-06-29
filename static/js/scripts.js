// Create starry background
function createStars() {
  const starsContainer = document.getElementById('stars');
  if (!starsContainer) return;
  
  // Clear existing stars
  starsContainer.innerHTML = '';
  
  const starsCount = 200;
  
  for (let i = 0; i < starsCount; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    
    // Random position
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    
    // Random size
    const size = Math.random() * 3;
    
    // Random animation duration
    const duration = 2 + Math.random() * 8;
    
    // Random delay
    const delay = Math.random() * 5;
    
    star.style.left = `${posX}%`;
    star.style.top = `${posY}%`;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.animationDuration = `${duration}s`;
    star.style.animationDelay = `${delay}s`;
    star.style.setProperty('--duration', `${duration}s`);
    
    starsContainer.appendChild(star);
  }
}

// Scroll animation for fade-in elements
function setupScrollAnimation() {
  const fadeElements = document.querySelectorAll('.fade-in');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('appear');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });
  
  fadeElements.forEach(element => {
    observer.observe(element);
  });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  createStars();
  setupScrollAnimation();
  
  // Recreate stars on resize to avoid gaps
  window.addEventListener('resize', createStars);
});
