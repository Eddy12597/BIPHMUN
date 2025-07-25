function toggleDropdown() {
  const dropdown = document.getElementById("dropdown-content");
  dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

// Close the dropdown if clicked outside
document.addEventListener('click', function(event) {
  const dropdownBtn = document.getElementById("dropbtn");
  const dropdownContent = document.getElementById("dropdown-content");
  
  if (event.target !== dropdownBtn && !dropdownBtn.contains(event.target)) {
    dropdownContent.style.display = "none";
  }
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