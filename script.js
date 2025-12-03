// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Remove loading screen
    setTimeout(() => {
        const loadingScreen = document.querySelector('.loading-screen');
        loadingScreen.style.opacity = '0';
        loadingScreen.style.visibility = 'hidden';
    }, 2000);

    // Initialize Particles.js with enhanced configuration
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: { 
                    value: 100, 
                    density: { 
                        enable: true, 
                        value_area: 800 
                    }
                },
                color: { 
                    value: ["#00b4ff", "#ff5e00", "#00ff9d"] 
                },
                shape: { 
                    type: "circle" 
                },
                opacity: { 
                    value: 0.5, 
                    random: true,
                    anim: { 
                        enable: true, 
                        speed: 1, 
                        opacity_min: 0.1, 
                        sync: false 
                    }
                },
                size: { 
                    value: 3, 
                    random: true,
                    anim: { 
                        enable: true, 
                        speed: 2, 
                        size_min: 0.1, 
                        sync: false 
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#00b4ff",
                    opacity: 0.2,
                    width: 1
                },
                move: { 
                    enable: true, 
                    speed: 2,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: { 
                        enable: true, 
                        rotateX: 600, 
                        rotateY: 1200 
                    }
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: { 
                        enable: true, 
                        mode: "grab" 
                    },
                    onclick: { 
                        enable: true, 
                        mode: "push" 
                    },
                    resize: true
                }
            },
            retina_detect: true
        });
    }

    // Logo hover effects
    const logos = document.querySelectorAll('.logo-img, .hero-logo-img');
    logos.forEach(logo => {
        logo.addEventListener('mouseenter', function() {
            this.style.filter = 'drop-shadow(0 0 15px rgba(0, 180, 255, 0.8))';
        });
        
        logo.addEventListener('mouseleave', function() {
            this.style.filter = 'drop-shadow(0 0 10px rgba(0, 180, 255, 0.5))';
        });
    });

    // Add more script from previous version...
    // (Keep all the other JavaScript functionality from the previous script.js)
});
