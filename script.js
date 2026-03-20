document.addEventListener('DOMContentLoaded', () => {
    const landingContent = document.getElementById('landing-content');
    const revealBtn = document.getElementById('reveal-btn');
    const messagePaper = document.getElementById('message-paper');

    revealBtn.addEventListener('click', () => {
        // Smoothly fade out the flowers and button
        landingContent.style.opacity = '0';
        landingContent.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            landingContent.style.display = 'none';
            messagePaper.classList.remove('hidden');
        }, 500);
    });
});
