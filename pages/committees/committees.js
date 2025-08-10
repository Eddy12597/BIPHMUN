document.addEventListener('scroll', function () {
    const scrollY = window.scrollY;
    const bg = document.getElementById('committees-bg');
    // Adjust multiplier for more/less parallax movement
    bg.style.transform = `translateY(${scrollY * 0.4}px)`;
});
