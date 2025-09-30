function toggleDropdown() {
    const dropdownContent = document.getElementById("dropdown-content");
    const dropdownBtnSection = document.getElementById("dropdown-btn-section");

    if (dropdownContent && dropdownBtnSection) {
        dropdownContent.classList.toggle("show");
        dropdownBtnSection.classList.toggle("active");
    }
}

// Create the media query list
const widthMatch = window.matchMedia("(min-width: 1080px)");

// Define the handler function
function handleWidthChange(mm) {
  const addressLink = document.getElementById("address-link");
  if (mm.matches) {
    // console.log("Desktop detected (width ≥ 1080px)");
    addressLink.innerHTML = `Jingguan North Rd., Park Lane Harbour, DayaBay, Huizhou, Guangdong, China`;
  } else {
    // console.log("Mobile detected (width < 1080px)");
    addressLink.innerHTML = `Address Link`;
  }
}

// Add the event listener
widthMatch.addEventListener('change', handleWidthChange);

// Run once on initial load
handleWidthChange(widthMatch);


console.clear = () => { 
    console.log(["Never gonna give you up", 
        "Never gonna let you down", 
        "Never gonna run around and desert you", 
        "Never gonna let you cry", 
        "Never gonna say goodbye", 
        "Never gonna tell a lie and hurt you"
    ][Math.floor(Math.random() * 6)]); 
};