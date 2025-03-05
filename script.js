document.addEventListener("DOMContentLoaded", function() {
    console.log("%cWelcome to Vikas Chauhan's Portfolio!", "color: lime; font-size: 16px;");
});

// Smooth scrolling for navigation
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

