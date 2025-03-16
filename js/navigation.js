document.addEventListener('DOMContentLoaded', function() {
    // Select all navigation links
    const navLinks = document.querySelectorAll('nav a');
    
    // Add click event listener to each navigation link
    navLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        // Prevent default navigation
        event.preventDefault();
        
        // Get the target URL
        const targetUrl = this.getAttribute('href');
        
        // Store the target URL in sessionStorage
        sessionStorage.setItem('redirectUrl', targetUrl);
        
        // Navigate to loading page
        window.location.href = '/loading.html';
      });
    });
  });