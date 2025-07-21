const dropdownBtn = document.getElementById('dropdown-btn');
dropdownBtn.addEventListener('click', function() {
    const dropdownContent = document.getElementById('link-icons-section');
    dropdownContent.classList.toggle('active');
});