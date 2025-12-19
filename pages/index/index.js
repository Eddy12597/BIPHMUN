

const parallaxCoef = 0.3;

  document.addEventListener("DOMContentLoaded", function () {
    const parallax = document.getElementById('group-photo');

    window.addEventListener('scroll', function () {
        const parallax = document.getElementById('group-photo');
        const scrollY = window.scrollY;
        parallax.style.transform = `translateY(${scrollY * parallaxCoef}px)`;
        // parallax.style.backgroundPositionY = `${scrollY * parallaxCoef}px`;
    });

});