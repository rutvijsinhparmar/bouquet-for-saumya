document.addEventListener('DOMContentLoaded', () => {
    // Select the entire interactive envelope system
    const interactiveEnvelope = document.getElementById('envelope-interactive');
    const messagePaper = document.getElementById('message-paper');

    interactiveEnvelope.addEventListener('click', () => {
        // Simple and clean hide effect
        interactiveEnvelope.style.opacity = '0';
        interactiveEnvelope.style.transform = 'translateY(-20px) scale(0.9)';
        
        // Wait for the animation before fully hiding
        setTimeout(() => {
            interactiveEnvelope.style.display = 'none';
            messagePaper.classList.remove('hidden');
        }, 400); 
    });
});
