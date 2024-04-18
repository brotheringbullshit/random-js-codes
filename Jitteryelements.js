// Function to apply jitter effect to every element
function applyJitterEffect() {
    // Get all elements on the page
    const elements = document.querySelectorAll('*');
    
    // Iterate over each element
    elements.forEach((element) => {
        // Apply jitter effect by setting a CSS transformation
        setInterval(() => {
            // Generate random values for translation and rotation
            const randomTranslateX = (Math.random() - 0.5) * 10; // Random value between -5 and 5
            const randomTranslateY = (Math.random() - 0.5) * 10; // Random value between -5 and 5
            const randomRotate = (Math.random() - 0.5) * 10; // Random value between -5 and 5 degrees
            
            // Apply the transformation using CSS transform property
            element.style.transform = `translate(${randomTranslateX}px, ${randomTranslateY}px) rotate(${randomRotate}deg)`;
        }, 100); // Update every 100ms for a smooth jitter effect
    });
}

// Call the function to apply jitter effect
applyJitterEffect();
