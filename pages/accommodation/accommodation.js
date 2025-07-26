const parallaxCoef = 0.4;

  document.addEventListener("DOMContentLoaded", function () {
    const parallax = document.getElementById('hotel-photo');

    window.addEventListener('scroll', function () {
        const scrollY = window.scrollY;
        parallax.style.transform = `translateY(${scrollY * parallaxCoef}px)`;
        // parallax.style.backgroundPositionY = `${scrollY * parallaxCoef}px`;
    });

});




document.addEventListener('DOMContentLoaded', function() {
    // Info content for each choice
    const choiceInfo = {
        'le-meridien-hotel-container': {
            title: 'Le Meridien Huizhou',
            description: 'Luxurious 5-star hotel by the beach',
            price: '￥1400~1600/room/night',
            link: "https://www.marriott.com/en-us/hotels/huzlm-le-meridien-xiaojing-bay/overview/",
        },
        'plh-hotels-container': {
            title: 'PLH Hotel Apartments',
            description: 'Spacious apartment-style accommodations perfect for extended stays with full kitchen facilities.',
            price: '￥ 400~600/room/night',
            link: "https://surl.amap.com/oXhZbT712ey6",
        },
        'others-container': {
            title: 'Other Options',
            description: 'There are multiple other options as nice as the ones suggested. Feel free to by yourself!',
            price: 'Various prices',
            link: "https://hotels.ctrip.com/hotels/listPage?cityename=huizhou&city=299&optionId=299&optionType=City&checkin=2023/02/17&checkout=2023/02/18&highPrice=-1&barCurr=CNY&hotPoi=50%7C50%7C23645681&sort=9",
        }
    };

    // Create info cards for each choice
    Object.keys(choiceInfo).forEach(containerId => {
        const container = document.getElementById(containerId);
        if (container) {
            const info = choiceInfo[containerId];
            
            const infoCard = document.createElement('div');
            infoCard.className = 'choice-info';
            infoCard.innerHTML = `
                <h3>${info.title}</h3>
                <p>${info.description}</p>
                <p class="price">${info.price}</p>
                <a class="links" href="${info.link}">more info/contact</a>
            `;
            
            container.appendChild(infoCard);
            // Mobile touch support
            container.addEventListener('click', function(e) {
                // Close any open info cards first
                document.querySelectorAll('.choice-container.active').forEach(openCard => {
                    if (openCard !== this) openCard.classList.remove('active');
                });
                
                // Toggle this card
                this.classList.toggle('active');
                
                // Prevent event bubbling if needed
                e.stopPropagation();
            });
        }
    });

    // Close info cards when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.choice-container')) {
            document.querySelectorAll('.choice-container.active').forEach(openCard => {
                openCard.classList.remove('active');
            });
        }
    });
});


