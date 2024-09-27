// cursor stuff
// find the cursor element
const cursor = document.querySelector('#custom-cursor');

// tracks the element to the actual mouse position
const positionElement = (e)=> {
    const mouseY = e.clientY;
    const mouseX = e.clientX;

    cursor.style.left = `${mouseX}px`;
    cursor.style.top = `${mouseY}px`;
}

// look for when it moves
window.addEventListener('mousemove', positionElement);

// navbar stuff
// when the user scrolls, collapse the navbar
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


// Detect scrolling and hide the arrow
const downArrow = document.getElementById('down-arrow');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) { // Hide the arrow when you scroll more than 50px
    downArrow.style.opacity = '0';
  } else {
    downArrow.style.opacity = '1';
  }
});
