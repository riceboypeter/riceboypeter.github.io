// cursor stuff
// find the cursor element
const cursor = document.querySelector('#custom-cursor');
cursor.style.opacity = '0';
// tracks the element to the actual mouse position
const positionElement = (e)=> {
    const mouseY = e.clientY;
    const mouseX = e.clientX;
    cursor.style.left = `${mouseX}px`;
    cursor.style.top = `${mouseY}px`;
    cursor.style.opacity = '1';
}
// look for when it moves
window.addEventListener('mousemove', positionElement);

// navbar stuff
// when the user scrolls down, collapse the navbar
const navbar = document.getElementById("navbar");
let fadeTimeout; // Holds the timeout ID

// Function to fade out the navbar background after a delay
const fadeOutNavbar = () => {
    fadeTimeout = setTimeout(() => {
        navbar.classList.add('faded-out');
    }, 3000); // 3-second delay before fading
};

// Function to fade in the navbar background when hovered
const fadeInNavbar = () => {
    clearTimeout(fadeTimeout); // Cancel any pending fade out
    navbar.classList.remove('faded-out');
};

// Listen for mouseenter and mouseleave events on the navbar
navbar.addEventListener('mouseenter', fadeInNavbar);
navbar.addEventListener('mouseleave', fadeOutNavbar);

// Start fading out after page loads
setTimeout(fadeOutNavbar, 3000);

window.onload = function() {
    // Add the slide-in class to the navbar
    navbar.classList.add('slide-in');    
};

document.addEventListener("DOMContentLoaded", function() {
    const consoleText = document.getElementById('console-text');
    const mainContent = document.getElementById('main-content');
    const messages = [
        'GET /profile HTTP/1.1',
        'Host: riceboypeter.github.io',
        '...',
        'HTTP/1.1 200 OK',
        'Fetching profile...'
    ];

    let messageIndex = 0;

    // Function to type out each message in the console effect
    function typeMessage() {
        if (messageIndex < messages.length) {
            let currentMessage = messages[messageIndex];
            let charIndex = 0;
            let typingEffect = setInterval(() => {
                consoleText.textContent += currentMessage[charIndex];
                charIndex++;

                if (charIndex === currentMessage.length) {
                    clearInterval(typingEffect);
                    messageIndex++;
                    consoleText.textContent += '\n';  // Move to next line after each message
                    setTimeout(typeMessage, 500);  // Wait before typing next message
                }
            }, 25);  // Speed of typing
        } else {
            // After all messages have been typed, reveal the profile content
            setTimeout(() => {
                mainContent.style.display = 'block';
                mainContent.classList.add('fade-in');
                document.getElementById('intro').classList.add('fade-out');
            }, 100);
        }
    }

    // Start the typing animation when the page loads
    typeMessage();
});
