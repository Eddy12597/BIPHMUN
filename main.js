function toggleDropdown() {
    const dropdownContent = document.getElementById("dropdown-content");
    const dropdownBtnSection = document.getElementById("dropdown-btn-section");

    if (dropdownContent && dropdownBtnSection) {
        dropdownContent.classList.toggle("show");
        dropdownBtnSection.classList.toggle("active");
    }
}
