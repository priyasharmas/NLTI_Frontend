// Mobile menu toggle
        function toggleMenu() {
            const navLinks = document.querySelector('.nav-links');
            navLinks.classList.toggle('active');
        }

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Auto-scroll testimonials
        let testimonialIndex = 0;
        const testimonialSlider = document.querySelector('.testimonial-slider');
        const testimonialCards = document.querySelectorAll('.testimonial-card');

        function autoScrollTestimonials() {
            if (testimonialCards.length > 0) {
                testimonialIndex = (testimonialIndex + 1) % testimonialCards.length;
                testimonialSlider.scrollTo({
                    left: testimonialCards[testimonialIndex].offsetLeft,
                    behavior: 'smooth'
                });
            }
        }

        // Auto-scroll every 5 seconds
        setInterval(autoScrollTestimonials, 5000);

        // Counter animation for stats
        function animateCounters() {
            const counters = document.querySelectorAll('.stat-number');
            counters.forEach(counter => {
                const target = parseInt(counter.textContent);
                const increment = target / 100;
                let current = 0;
                
                const updateCounter = () => {
                    if (current < target) {
                        current += increment;
                        counter.textContent = Math.floor(current) + (counter.textContent.includes('+') ? '+' : '');
                        setTimeout(updateCounter, 20);
                    } else {
                        counter.textContent = target + (counter.textContent.includes('+') ? '+' : '');
                    }
                };
                
                updateCounter();
            });
        }

        // Trigger counter animation when stats section is visible
        const statsSection = document.querySelector('.stats');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    observer.unobserve(entry.target);
                }
            });
        });

        observer.observe(statsSection);

        // Course enrollment buttons
        document.querySelectorAll('.course-button').forEach(button => {
            button.addEventListener('click', function() {
                alert('Thank you for your interest! Please contact us at info@clatnlti.com for enrollment.');
            });
        });

        // Add scroll effect to header
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.background = 'rgba(102, 126, 234, 0.95)';
                header.style.backdropFilter = 'blur(10px)';
            } else {
                header.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                header.style.backdropFilter = 'none';
            }
        });

        // Add entrance animations on scroll
        const animateOnScroll = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        };

        const scrollObserver = new IntersectionObserver(animateOnScroll, {
            threshold: 0.1
        });

        document.querySelectorAll('.feature-card, .course-card, .testimonial-card').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            scrollObserver.observe(el);

        
        });


        
        const loginBtn = document.getElementById("loginBtn");
        const loginModal = document.getElementById("loginModal");

        loginBtn.addEventListener("click", function (e) {
            e.preventDefault();
            loginModal.style.display = "flex";
        });

        function closeLogin() {
            loginModal.style.display = "none";
        }

        // Optional: Close when clicking outside modal
        window.addEventListener("click", function (e) {
            if (e.target == loginModal) {
            loginModal.style.display = "none";
            }
        });