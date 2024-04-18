// Create a function to generate a random number within a given range
function getRandomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

// Define a function to apply jittering effect to an element
function applyJitter(element) {
  // Get a random x and y translation value between -2 and 2 pixels
  const translateX = getRandomInRange(-2, 2);
  const translateY = getRandomInRange(-2, 2);
  // Get a random rotation value between -0.5 and 0.5 degrees
  const rotation = getRandomInRange(-0.5, 0.5);

  // Set the element's transform property to apply the jitter effect
  element.style.transform = `translate(${translateX}px, ${translateY}px) rotate(${rotation}deg)`;
}

// Get all elements on the page
const allElements = document.querySelectorAll('*');

// Define a function to apply jittering effect to all elements
function jitterAllElements() {
  allElements.forEach(applyJitter);
}

// Set an interval to apply the jitter effect to all elements every 100 milliseconds
setInterval(jitterAllElements, 100);

// Apply initial styles to all elements to ensure a consistent starting point
allElements.forEach(element => {
  // Set initial style properties
  element.style.transition = 'transform 0.1s ease-in-out';
});
