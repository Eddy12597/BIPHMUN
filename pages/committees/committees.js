document.addEventListener('scroll', function () {
    const scrollY = window.scrollY;
    const bg = document.getElementById('committees-bg');
    // Adjust multiplier for more/less parallax movement
    bg.style.transform = `translateY(${scrollY * 0.4}px)`;
});

/*
document.querySelectorAll('.committee-chair').forEach((el) => {
    if (el.innerText.includes('__TBD__')) {
        el.innerHTML +=
            `
            <a class="chair-apply-button" href="/application.html">Apply for chair</a>
            `;
    }
})

*/
