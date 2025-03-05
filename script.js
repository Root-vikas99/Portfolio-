document.addEventListener("DOMContentLoaded", function () {
    console.log("%cWelcome to Vikas Chauhan's Portfolio!", "color: lime; font-size: 16px;");

    // Smooth scrolling for navigation
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const section = document.querySelector(this.getAttribute('href'));
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Social Icons Animation
    document.querySelectorAll(".social-links a").forEach(icon => {
        icon.addEventListener("mouseover", () => {
            icon.style.transition = "transform 0.2s ease-in-out";
            icon.style.transform = "scale(1.3)";
        });

        icon.addEventListener("mouseout", () => {
            icon.style.transform = "scale(1)";
        });
    });

    // Typewriter Effect Function (Fixed for Line Breaks & Visibility)
    function typeWriterEffect(element, text, speed, callback) {
        let i = 0;
        element.style.width = "fit-content"; // Ensures text expands within bounds
        element.textContent = ""; // Clear previous text
        function typing() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(typing, speed);
            } else {
                element.style.borderRight = "none"; // Remove cursor after typing
                if (callback) callback();
            }
        }
        typing();
    }

    // Trigger About Section Animation on Scroll
    const aboutSection = document.getElementById("about");
    const typewriterLines = document.querySelectorAll(".typewriter-line");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let delay = 0;
                typewriterLines.forEach(line => {
                    setTimeout(() => {
                        typeWriterEffect(line, line.getAttribute("data-text"), 70);
                    }, delay);
                    delay += line.getAttribute("data-text").length * 80+ 500; // Adjust delay
                });

                observer.disconnect(); // Run animation only once
            }
        });
    }, { threshold: 0.5 });

    observer.observe(aboutSection);
});

