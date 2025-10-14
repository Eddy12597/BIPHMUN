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
