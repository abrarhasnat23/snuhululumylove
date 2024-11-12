// Wait for the DOM to fully load before executing
window.addEventListener('load', () => {
    const lines = document.querySelectorAll('.line');
    
    // Add delay to each line dynamically based on its order
    lines.forEach((line, index) => {
        line.style.animationDelay = `${index * 1.5}s`;  // Increase the delay between each line
    });
});
