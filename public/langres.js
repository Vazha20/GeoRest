function switchLanguageRes(language) {
    // Change the page URL to reflect the selected language (e.g., /en, /ka, /ru, /zh)
    const currentUrl = window.location.pathname;
    const newUrl = currentUrl.replace(/\/(en|ka|ru|zh)/, `/${language}`);

    // If no language code is in the URL, append it
    if (!newUrl.match(/\/(en|ka|ru|zh)/)) {
        window.history.pushState({}, "", `/${language}${currentUrl}`);
    } else {
        window.history.pushState({}, "", newUrl);
    }
}

// Optionally, you could update the button label and the flag image here
function updateButton(language) {
    const button = document.querySelector(".dropbtn");
    const flag = button.querySelector("img");
    const languageLabel = button.querySelector("span");

    if (language === "en") {
        button.textContent = "English";
        flag.src = "./src/img/united-kingdom.png";
    } else if (language === "ka") {
        button.textContent = "Georgian";
        flag.src = "./src/img/icons8-georgia-96.png";
    } else if (language === "ru") {
        button.textContent = "Russian";
        flag.src = "./src/img/icons8-russian-federation-96.png";
    } else if (language === "zh") {
        button.textContent = "中文";
        flag.src = "./src/img/china.png";  // Use an appropriate flag image
    }
}

// Listen for changes in the URL to load the correct language (if not using page reloads)
window.addEventListener('popstate', function() {
    const path = window.location.pathname;
    const language = path.split('/')[1]; // e.g., "en", "ka", "ru", "zh"

    if (translations[language]) {
        switchLanguageRes(language);
        updateButton(language);
    }
});

// Run once when the page loads to detect the language from the URL
document.addEventListener('DOMContentLoaded', function() {
    const path = window.location.pathname;
    const language = path.split('/')[1]; // e.g., "en", "ka", "ru", "zh"
    
    if (translations[language]) {
        switchLanguageRes(language);
        updateButton(language);
    } else {
        // Default to English if no language is in the URL
        switchLanguageRes('en');
        updateButton('en');
    }
});

function toggleDropdownRes() {
    const dropdown = document.getElementById("languageMenu");
    

    // Toggle dropdown visibility
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
        
    } else {
        dropdown.style.display = "block";
     
    }
}