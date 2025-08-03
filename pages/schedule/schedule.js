document.querySelectorAll('.schedule-img').forEach(img => {
    img.addEventListener('touchstart', () => {
        img.classList.add('tapped');
    });
    img.addEventListener('touchend', () => {
        setTimeout(() => img.classList.remove('tapped'), 200);
    });
});