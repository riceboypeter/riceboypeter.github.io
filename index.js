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
var prevScrollpos = window.scrollY;
const navbar = document.getElementById("navbar");
window.onscroll = function() {
    var currentScrollPos = window.scrollY;
    if (prevScrollpos > currentScrollPos) {
        navbar.style.top = "0";
    } else {
        navbar.style.top = "-65px";
    }
    prevScrollpos = currentScrollPos;
}

// down arrow stuff
// get down arrow element
const downArrow = document.getElementById('down-arrow');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { // when the user scrolls more than 50
        downArrow.style.opacity = '0'; // hide that bitch
    } else {
        downArrow.style.opacity = '1';
    }
});

window.onload = function() {
    // Add the slide-in class to the navbar
    navbar.classList.add('slide-in');
    // Add fade-in class to the down arrow
    downArrow.style.opacity = '1';
    
};