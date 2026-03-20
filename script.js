document.addEventListener('DOMContentLoaded', () => {
    const envelope = document.getElementById('envelope-interactive');
    const messagePaper = document.getElementById('message-paper');

    envelope.addEventListener('click', () => {
        // Fade out the envelope and flowers
        envelope.style.opacity = '0';
        envelope.style.transition = '0.4s';
        
        // Show the message
        setTimeout(() => {
            envelope.style.display = 'none';
            messagePaper.classList.remove('hidden');
        }, 400);
    });
});
