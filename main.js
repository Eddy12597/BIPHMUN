function toggleDropdown() {
  const dropdown = document.getElementById("dropdown-content");
  dropdown.classList.toggle("show");
//   console.log(`Dropdown visibility: ${dropdown.classList.contains('show')}`);
}

// Close the dropdown if clicked outside
document.addEventListener('click', function(event) {
  const dropdownBtn = document.getElementById("drop-btn");
  const dropdownContent = document.getElementById("dropdown-content");
  
  if (!dropdownBtn.contains(event.target) && 
      !dropdownContent.contains(event.target)) {
    dropdownContent.classList.remove("show");
    // console.log('Dropdown hidden');
  }
});

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
