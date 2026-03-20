document.addEventListener('DOMContentLoaded', () => {
    // Select the entire interactive envelope system
    const interactiveEnvelope = document.getElementById('envelope-interactive');
    const messagePaper = document.getElementById('message-paper');

    interactiveEnvelope.addEventListener('click', () => {
        // Add a 'fade and shrink' class to the envelope (optional, for smoothness)
        interactiveEnvelope.style.opacity = '0';
        interactiveEnvelope.style.transform = 'scale(0.8) translateZ(-100px)';
        
        // Wait for the envelope animation, then hide it and show the paper
        setTimeout(() => {
            interactiveEnvelope.style.display = 'none';
            messagePaper.classList.remove('hidden');
        }, 500); // Matches the transition time in CSS
    });
});
