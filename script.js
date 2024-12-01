// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor behavior
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth' // Smooth scroll effect
        });
    });
});

// Display current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Add slide-in animation to "About" section when it appears in the viewport
const aboutSection = document.getElementById("about-container");
const observer = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                aboutSection.classList.add("slide-in");
                observer.unobserve(aboutSection); // Stop observing once animation is applied
            }
        });
    },
    { threshold: 0.5 } // Trigger when 50% of the section is visible
);

observer.observe(aboutSection);
