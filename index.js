// find the cursor element
const cursor = document.querySelector('.custom-cursor');

// tracks the element to the actual mouse position
const positionElement = (e)=> {
  const mouseY = e.clientY;
  const mouseX = e.clientX;
   
  cursor.style.left = `${mouseX}px`;
  cursor.style.top = `${mouseY}px`;
}

// look for when it moves
window.addEventListener('mousemove', positionElement);