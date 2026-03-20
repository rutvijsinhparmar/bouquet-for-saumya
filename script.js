document.addEventListener('DOMContentLoaded', () => {
    const letterBtn = document.getElementById('letter-btn');
    const bouquet = document.querySelector('.bouquet-wrapper');
    const secretMessage = document.getElementById('secret-message');

    letterBtn.addEventListener('click', () => {
        // Hide flowers and letter
        letterBtn.style.display = 'none';
        bouquet.style.display = 'none';
        
        // Show the message
        secretMessage.classList.remove('hidden');
    });
});
