const dropdownBtn = document.getElementById('dropdown-btn');
dropdownBtn.addEventListener('click', function() {
    const dropdownContent = document.getElementById('link-icons-section');
    dropdownContent.classList.toggle('active');
});

const parallaxCoef = 0.4;

  document.addEventListener("DOMContentLoaded", function () {
    const parallax = document.getElementById('group-photo');

    window.addEventListener('scroll', function () {
        const parallax = document.getElementById('group-photo');
        const scrollY = window.scrollY;
        parallax.style.transform = `translateY(${scrollY * parallaxCoef}px)`;
        // parallax.style.backgroundPositionY = `${scrollY * parallaxCoef}px`;
    });

});