document.addEventListener('DOMContentLoaded', () => {
    const interactionGroup = document.getElementById('interaction-group');
    const envelopeBtn = document.getElementById('envelope-btn');
    const messagePaper = document.getElementById('message-paper');

    envelopeBtn.addEventListener('click', () => {
        // Fade out everything at once
        interactionGroup.style.opacity = '0';
        interactionGroup.style.transition = '0.4s';
        
        // After fade, hide group and show message
        setTimeout(() => {
            interactionGroup.style.display = 'none';
            messagePaper.classList.remove('hidden');
        }, 400);
    });
});
