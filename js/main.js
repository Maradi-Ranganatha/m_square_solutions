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
                name: 'Ardex Endura',
                description: 'leading solution providers of high-performance speciality building materials',
                website: 'www.ardexendura.com',
                location:'Yeshwanth pur ,HMT complex ,Bengaluru',
                image: 'https://tse3.mm.bing.net/th?id=OIP.jzOOTr9b-2lBXk-Mus2HRAAAAA&pid=Api&P=0&h=180',
                
            },
            {
                name: 'Frimsin Chemato India PVT LTD',
                description: 'leading flooring company specializing in a diverse range of high-quality flooring solutions',
                website: 'www.frimsinchematoindia.com',
                location: 'Near BM Valley School Road,Pantharapalya,Mysore Road Bengaluru-560 039',
                image: 'https://frimsinchematoindia.com/assets/logo-big.png'
            },
            {
                name: 'MYK ARMET',
                description: 'Excellent water proofing Solution for wet areas',
                website: 'www.mykarmet.com',
                location: 'Hyderabad,India',
                image: 'https://tse3.mm.bing.net/th?id=OIP._vWVNNavrQFfLidTh8eI8wAAAA&pid=Api&P=0&h=180'
            },
            {
                name: 'Dr Fixit',
                description: 'Water proofing solutions',
                website: 'www.drfixit.co.in',
                location: 'Mumbai,India',
                image: 'https://tse4.mm.bing.net/th?id=OIP.KZr-Fu215n7iFKwKrcVmeQHaEA&pid=Api&P=0&h=180'
            },

           { name: 'Fosroc',
            description: 'Concrete mix and design support',
            website: 'www.fosroc.com',
            location: 'All over India',
            image: 'https://s.yimg.com/fz/api/res/1.2/_Qx.1XKWqcvzX4Ypnl_l_Q--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI0MDtxPTgwO3c9MjIw/https://s.yimg.com/zb/imgv1/23bd0f1a-7059-39e6-ae86-e32b1002da62/t_500x300'
            },

            {
                name: 'Asian Paints',
                description: 'Expert painting with on-time site completion guaranteed',
                website: 'www.asianpaints.com',
                location: 'India',
                image: 'https://tse4.mm.bing.net/th?id=OIP.0ExAWLML-qu7Sh959Gm3dgHaEK&pid=Api&P=0&h=180'
                
            },

            {
                name: 'Floor Care Technologies PVT LTD',
                description: 'Leading manufacturers and exporters',
                website: 'www.floorcareindia.com',
                location: 'Floor Care technologies Pvt Ltd,Survey no 50/2, Ganakallu Village,Tavarekere hobli, Magadi Road,Bangalore south Taluk - 562130',
                image: 'https://www.floorcareindia.com/pics/logo.png'
            },

            {
                name: 'ACE BOND',
                description: 'To Innovate continuously and provide unique solutions in Construction Technology',
                website: 'www.acebond.in',
                location: 'D.No.1-27/B, ACEBOND Road,Vakwadi Village and Post,Kundapura Taluk, Udupi District,Karnataka - 576 257',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSHlFLSkbZF2Zwzxq6NiSrryALLNY5jJZYsQ&s'
            },
            {
                name: 'SIKA',
                description: 'Global leader in specialty chemicals for construction and industry sectors',
                website: 'www.sika.com',
                location: 'Zugerstrasse 50CH-6340 Baar (ZG)Switzerland',
                image: 'https://sika.scene7.com/is/content/sika/Sika_ClaimU_pos_rgb'
            },
            
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
    function openImage(src) {
        let popup = window.open(src, "_blank", "width=800,height=600");
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
