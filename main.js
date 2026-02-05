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

let email = "";

// ====== CONFIG ======
const KEY = "jessJessSIXSEVENqwfpgjluy;arstdhneiozxcvbkm";   // Change this to anything secret

// ====== CORE ======
function xorTransform(str, key) {
    let out = "";
    for (let i = 0; i < str.length; i++) {
        out += String.fromCharCode(
            str.charCodeAt(i) ^ key.charCodeAt(i % key.length)
        );
    }
    return out;
}

// ====== OBFUSCATE ======
function obfuscate(plainText) {
    const xored = xorTransform(plainText, KEY);
    return btoa(xored);                 // Base64 encode
}

// ====== DEOBFUSCATE ======
function deobfuscate(encoded) {
    const decoded = atob(encoded);     // Base64 decode
    return xorTransform(decoded, KEY);
}

const obf = "BxAdXigMAxsTKzkgLCUmJhgZB14EBQE="

email = deobfuscate(obf);

document.addEventListener('DOMContentLoaded', (ev) => {
    let classes = [...document.getElementsByClassName("email-js")]
    classes.forEach(element => {
        element.href = `mailto:${email}`;
        element.innerHTML = email;
        
    });
    
});

const biphmun_decoration = 
String.raw`  ____ ___ ____  _   _ __  __ _   _ _   _   ____   ___ ____   __   
 | __ )_ _|  _ \| | | |  \/  | | | | \ | | |___ \ / _ \___ \ / /_  
 |  _ \| || |_) | |_| | |\/| | | | |  \| |   __) | | | |__) | '_ \ 
 | |_) | ||  __/|  _  | |  | | |_| | |\  |  / __/| |_| / __/| (_) |
 |____/___|_|   |_| |_|_|  |_|\___/|_| \_| |_____|\___/_____|\___/ 
                                                                   `
console.log(biphmun_decoration);