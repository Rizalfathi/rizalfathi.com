        // Create particles for background
        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            const particleCount = 50;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.classList.add('particle');
                
                // Random size
                const size = Math.random() * 5 + 2;
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                
                // Random position
                particle.style.left = `${Math.random() * 100}%`;
                particle.style.top = `${Math.random() * 100}%`;
                
                // Random animation duration
                const duration = Math.random() * 20 + 10;
                particle.style.animationDuration = `${duration}s`;
                
                // Random delay
                const delay = Math.random() * 5;
                particle.style.animationDelay = `${delay}s`;
                
                particlesContainer.appendChild(particle);
            }
        }

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Initialize when page loads
        window.addEventListener('load', () => {
            createParticles();
            
            // Add animation to elements when they come into view
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animated');
                    }
                });
            }, { threshold: 0.1 });
            
            document.querySelectorAll('.project-card, .interest-card, .about-image').forEach(el => {
                observer.observe(el);
            });

            // Chapter navigation toggle
            const chapterNavToggle = document.querySelector('.chapter-nav-toggle');
            const chapterNav = document.querySelector('.chapter-navigation');
            
            if (chapterNavToggle && chapterNav) {
                chapterNavToggle.addEventListener('click', () => {
                    chapterNav.classList.toggle('collapsed');
                    // Save preference to localStorage
                    const isCollapsed = chapterNav.classList.contains('collapsed');
                    localStorage.setItem('chapterNavCollapsed', isCollapsed);
                });

                // Restore previous state from localStorage
                const wasCollapsed = localStorage.getItem('chapterNavCollapsed') === 'true';
                if (wasCollapsed) {
                    chapterNav.classList.add('collapsed');
                }
            }
        });