document.addEventListener('DOMContentLoaded', () => {
    const letterBtn = document.getElementById('letter-btn');
    const secretMessage = document.getElementById('secret-message');

    letterBtn.addEventListener('click', () => {
        // Hide the clickable letter
        letterBtn.style.display = 'none';
        
        // Reveal the message with a smooth fade
        secretMessage.classList.remove('hidden');
    });
});
