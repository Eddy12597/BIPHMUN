const parallaxCoef = 0.4;

  document.addEventListener("DOMContentLoaded", function () {
    const parallax = document.getElementById('hotel-photo');

    window.addEventListener('scroll', function () {
        const scrollY = window.scrollY;
        parallax.style.transform = `translateY(${scrollY * parallaxCoef}px)`;
        // parallax.style.backgroundPositionY = `${scrollY * parallaxCoef}px`;
    });

});