// Initialize AOS
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });

    // Initialize Lightbox if available
    if (typeof lightbox !== "undefined") {
        lightbox.option({
            'resizeDuration': 200,
            'wrapAround': true,
            'showImageNumberLabel': false
        });
    }

    // Navbar scroll behavior
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.padding = '0.5rem 0';
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        } else {
            navbar.style.padding = '1rem 0';
            navbar.style.backgroundColor = 'white';
        }
    });

    // Contact form handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject')?.value || '',
                message: document.getElementById('message').value
            };

            // Store in localStorage for demo purposes
            let messages = JSON.parse(localStorage.getItem('contact_messages')) || [];
            messages.push({...formData, date: new Date().toISOString()});
            localStorage.setItem('contact_messages', JSON.stringify(messages));

            // Show success message
            alert('Thank you for your message. We will get back to you soon!');
            contactForm.reset();
        });
    }

    // Companies data handling
    const companiesContainer = document.getElementById('companies-container');
    if (companiesContainer) {
        // Company data that would normally come from a backend
        const companiesData = [
            {
                name: 'Luxury Hardwood Supplies',
                description: 'Premium hardwood flooring materials and accessories supplier.',
                website: 'luxuryhardwood.com',
                location: 'New York, USA',
                image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab'
            },
            {
                name: 'Modern Flooring Solutions',
                description: 'Innovative flooring technology and installation systems.',
                website: 'modernflooring.com',
                location: 'London, UK',
                image: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a'
            },
            {
                name: 'Eco Floor Systems',
                description: 'Sustainable and eco-friendly flooring solutions.',
                website: 'ecofloorsystems.com',
                location: 'Sydney, Australia',
                image: 'https://images.unsplash.com/photo-1497366412874-3415097a27e7'
            }
        ];

        // Render companies
        companiesContainer.innerHTML = companiesData.map(company => `
            <div class="col-md-4 mb-4" data-aos="fade-up">
                <div class="company-card">
                    <img src="${company.image}" alt="${company.name}" class="company-logo">
                    <h3>${company.name}</h3>
                    <p>${company.description}</p>
                    <div class="company-details">
                        <p><i class="fas fa-globe me-2"></i> ${company.website}</p>
                        <p><i class="fas fa-map-marker-alt me-2"></i> ${company.location}</p>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Projects Portfolio Filter
    const portfolioContainer = document.getElementById('portfolio-container');
    const filterButtons = document.querySelectorAll('.filter-btn');

    if (portfolioContainer && filterButtons.length > 0) {
        const portfolioItems = [
            {
                category: 'residential',
                image: 'https://images.unsplash.com/photo-1591484385394-f5083609ed6a',
                title: 'Modern Home Flooring',
                description: 'Hardwood installation in luxury residence'
            },
            {
                category: 'commercial',
                image: 'https://images.unsplash.com/photo-1640200330428-9fe2ab926de1',
                title: 'Office Complex',
                description: 'Commercial grade flooring solutions'
            },
            {
                category: 'residential',
                image: 'https://images.unsplash.com/photo-1534527489986-3e3394ca569c',
                title: 'Villa Renovation',
                description: 'Complete floor restoration'
            }
        ];

        // Initial render
        renderPortfolio('all');

        // Filter functionality
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const filter = button.getAttribute('data-filter');
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                renderPortfolio(filter);
            });
        });

        function renderPortfolio(filter) {
            const filteredItems = filter === 'all' 
                ? portfolioItems 
                : portfolioItems.filter(item => item.category === filter);

            portfolioContainer.innerHTML = filteredItems.map(item => `
                <div class="col-md-4" data-aos="zoom-in">
                    <a href="${item.image}" data-lightbox="portfolio">
                        <img src="${item.image}" class="img-fluid" alt="${item.title}">
                    </a>
                    <div class="portfolio-info mt-3">
                        <h4>${item.title}</h4>
                        <p>${item.description}</p>
                    </div>
                </div>
            `).join('');
        }
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});