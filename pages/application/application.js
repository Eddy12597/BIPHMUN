const individualApplicationFormLink = 'https://forms.office.com/r/xGJjib7nGN';

const schoolApplicationFormLink = 'assets/documents/BIPHMUN School Registration Form.xlsx';

const chairApplicationFormLink = 'https://forms.office.com/r/CjfTJMapVf';

const volunteerApplicationFormLink = 'https://forms.office.com/r/wmDs9xs7Ea';

const handleIndv = () => {
  window.open(individualApplicationFormLink, '_blank');
}

const handleSchool = () => {
  window.open(schoolApplicationFormLink, '_blank');
}

const handleChair = () => {
  window.open(chairApplicationFormLink, '_blank');
}

const handleVolunteer = () => {
  window.open(volunteerApplicationFormLink, '_blank')
}
let cocLang = "cn";

const langSelectorCN = document.getElementById("lang-selector-cn");
const langSelectorEN = document.getElementById("lang-selector-en");
const engCocDiv = document.getElementById("eng-coc");
const cnCocDiv = document.getElementById("chn-coc");

langSelectorCN.addEventListener('click', (ev) => {
    cocLang = "cn";
    // Hide English COC div
    engCocDiv.classList.add('not-selected');
    cnCocDiv.classList.remove("not-selected");
    langSelectorCN.classList.add('selected');
    langSelectorEN.classList.remove("selected");
});

langSelectorEN.addEventListener("click", (ev) => {
    cocLang = "en";
    // Show English COC div
    engCocDiv.classList.remove('not-selected');
    cnCocDiv.classList.add('not-selected');

    langSelectorEN.classList.add('selected');
    langSelectorCN.classList.remove("selected");
});

// Set initial state based on default language
if (cocLang === "cn") {
    engCocDiv.classList.add('not-selected');
} else {
    engCocDiv.classList.remove('not-selected');
}