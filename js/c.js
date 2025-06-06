// Add this to your main.js file or create a new script file
document.addEventListener('DOMContentLoaded', function() {
    // Form animation on focus
    const formControls = document.querySelectorAll('.contact-form-card .form-control');
    
    formControls.forEach(control => {
        // Add focus animation
        control.addEventListener('focus', function() {
            this.parentElement.classList.add('input-focused');
        });
        
        // Remove focus animation
        control.addEventListener('blur', function() {
            if (this.value === '') {
                this.parentElement.classList.remove('input-focused');
            }
        });
    });
    
    // Form submission animation
    const contactForm = document.querySelector('#contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Don't prevent the default if you want the form to submit normally
            // e.preventDefault();
            
            const formCard = document.querySelector('.contact-form-card');
            formCard.classList.add('form-success');
            
            // Remove animation class after it completes
            setTimeout(() => {
                formCard.classList.remove('form-success');
            }, 500);
            
            // If you want to handle form submission with AJAX, you can do it here
        });
    }
    
    // If you want to add a floating label effect or any other enhancements
    const formInputs = document.querySelectorAll('.contact-form-card input, .contact-form-card textarea');
    formInputs.forEach(input => {
        input.addEventListener('input', function() {
            if (this.value !== '') {
                this.classList.add('has-value');
            } else {
                this.classList.remove('has-value');
            }
        });
    });
});