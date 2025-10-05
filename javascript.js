// Mobile Menu Toggle
        const menuToggle = document.querySelector('.menu-toggle');
        const navLinks = document.querySelector('.nav-links');

        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });

        // Sticky header on scroll
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            header.classList.toggle('sticky', window.scrollY > 0);
        });

        // Form submission
        const contactForm = document.getElementById('contactForm');
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Simple form validation
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');
            
            if (nameInput.value.trim() === '') {
                alert('Please enter your name');
                nameInput.focus();
                return;
            }
            
            if (emailInput.value.trim() === '') {
                alert('Please enter your email');
                emailInput.focus();
                return;
            }
            
            if (messageInput.value.trim() === '') {
                alert('Please enter your message');
                messageInput.focus();
                return;
            }
            
            // Simulate form submission
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                alert('Thank you for your message! I will get back to you soon.');
                contactForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });

        // Animate elements on scroll
        const animateOnScroll = () => {
            const elements = document.querySelectorAll('.skill-item, .project-item');
            
            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.3;
                
                if (elementPosition < screenPosition) {
                    element.style.opacity = 1;
                    element.style.transform = 'translateY(0)';
                }
            });
        };

        // Set initial state for animation
        document.querySelectorAll('.skill-item, .project-item').forEach(element => {
            element.style.opacity = 0;
            element.style.transform = 'translateY(50px)';
            element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        });

        window.addEventListener('scroll', animateOnScroll);
        // Trigger once on load
        window.addEventListener('load', animateOnScroll);
        
        // Project data
        const projects = {
            1: {
                title: "Blogging Platform Website",
                image: "images/download.png",
                description: "While developing this website, I faced common challenges and errors like every web developer. To ensure quality and satisfaction, I even rebuilt the website once especially improving the navigation bar. This project helped me learn a lot and I'm continuously improving my skills.",
                tags: ["HTML", "CSS", "JavaScript"],
                links: [
                    { type: "live", url: "https://blogers-nine.vercel.app/#create-post", text: "View Live" },
                    { type: "github", url: "https://blogers-nine.vercel.app/#create-post", text: "GitHub" }
                ]
            },
            2: {
                title: "Clone Copy of Onepage Bootstrap Template",
                image: "images/MASA.webp",
                description: "Like any professional developer, I faced common challenges especially in the hero section which required extra effort to perfect. Through problem-solving and testing, I successfully overcame these issues and completed a fully responsive, high-quality website.",
                tags: ["JavaScript", "HTML5", "CSS3", "Bootstrap"],
                links: [
                    { type: "live", url: "https://mahnoor-doveloper-alt.github.io/onepsge/", text: "View Live" },
                    { type: "github", url: "https://mahnoor-doveloper-alt.github.io/onepsge/", text: "GitHub" }
                ]
            },
            3: {
                title: "Business Website for a Client",
                image: "images/G.jpg",
                description: "Built a responsive client website. Faced several real-world challenges, especially with layout and functionality but resolved them through testing and problem solving. This project enhanced my skills and taught me valuable lessons about building client-focused websites and also learned new techniques, and user-friendly result.",
                tags: ["JavaScript", "HTML", "CSS"],
                links: [
                    { type: "live", url: "https://mahnoor-doveloper-alt.github.io/mmm/", text: "View Live" },
                    { type: "github", url: "https://mahnoor-doveloper-alt.github.io/mmm/", text: "GitHub" }
                ]
            },
            4: {
                title: "Islamic Education Website",
                image: "images/87.webp",
                description: " While building the Rah-e-Noor Islamic education website using HTML, CSS, and JavaScript, I faced challenges in making the site fully responsive, maintaining a clean religious design, and fixing layout issues. These problems helped me improve my CSS skills and focus more on user-friendly design.",
                tags: ["HTML", "CSS", "JAVASCRIPT"],
                links: [
                    { type: "live", url: "https://mahnoor-doveloper-alt.github.io/rah-e-noor-quran-site/", text: "View Live" },
                    { type: "github", url: "https://mahnoor-doveloper-alt.github.io/rah-e-noor-quran-site/", text: "GitHub" }
                ]
            },
            5: {
                title: "Collaboration Project – Overview Website",
                image: "images/7.jpg",
                description: "While building this website, I faced challenges in managing responsive layouts, adjusting CSS for different screen sizes, and keeping the design consistent. These challenges helped me improve my problem-solving and responsive design skills.",
                tags: ["HTML", "CSS", "JavaScript"],
                links: [
                    { type: "live", url: "https://mahnoor-doveloper-alt.github.io/rah-e-noor-quran-site/", text: "View Live" },
                    { type: "github", url: "https://mahnoor-doveloper-alt.github.io/rah-e-noor-quran-site/", text: "GitHub" }
                ]
            }
        };

        // Get modal elements
        const modal = document.getElementById('projectModal');
        const modalImage = document.getElementById('modalImage');
        const modalTitle = document.getElementById('modalTitle');
        const modalDescription = document.getElementById('modalDescription');
        const modalTags = document.getElementById('modalTags');
        const modalLinks = document.getElementById('modalLinks');
        const closeModal = document.querySelector('.close-modal');

        // Add click event to project items
        document.querySelectorAll('.project-item').forEach(item => {
            item.addEventListener('click', function() {
                const projectId = this.getAttribute('data-project');
                openModal(projectId);
            });
        });

        // Close modal when clicking the X
        closeModal.addEventListener('click', function() {
            closeModalFunc();
        });

        // Close modal when clicking outside the modal content
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModalFunc();
            }
        });

        // Close modal with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modal.style.display === 'block') {
                closeModalFunc();
            }
        });

        // Function to open modal with project details
        function openModal(projectId) {
            const project = projects[projectId];
            
            if (project) {
                modalImage.src = project.image;
                modalImage.alt = project.title;
                modalTitle.textContent = project.title;
                modalDescription.textContent = project.description;
                
                // Clear and add tags
                modalTags.innerHTML = '';
                project.tags.forEach(tag => {
                    const tagElement = document.createElement('span');
                    tagElement.className = 'modal-tag';
                    tagElement.textContent = tag;
                    modalTags.appendChild(tagElement);
                });
                
                // Clear and add links
                modalLinks.innerHTML = '';
                project.links.forEach(link => {
                    const linkElement = document.createElement('a');
                    linkElement.href = link.url;
                    linkElement.className = 'modal-link';
                    linkElement.target = '_blank';
                    
                    const iconClass = link.type === 'live' ? 'fas fa-external-link-alt' : 'fab fa-github';
                    linkElement.innerHTML = `<i class="${iconClass}"></i> ${link.text}`;
                    
                    modalLinks.appendChild(linkElement);
                });
                
                // Show modal
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden'; // Prevent scrolling
            }
        }

        // Function to close modal
        function closeModalFunc() {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Re-enable scrolling
        }





        // Video Play Functionality
const videoContainer = document.querySelector('.video-container');
const video = document.querySelector('.custom-video');
const videoOverlay = document.querySelector('.video-overlay');

if (videoOverlay) {
    videoOverlay.addEventListener('click', function() {
        video.play();
        videoContainer.classList.add('playing');
    });
}

if (video) {
    video.addEventListener('click', function() {
        if (video.paused) {
            video.play();
            videoContainer.classList.add('playing');
        } else {
            video.pause();
            videoContainer.classList.remove('playing');
        }
    });
    
    video.addEventListener('ended', function() {
        videoContainer.classList.remove('playing');
    });
}