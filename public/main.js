document.addEventListener("DOMContentLoaded", function() {
    let newsItems = document.querySelectorAll(".news-list .news-item");
    let mainNewsContainer = document.querySelector(".main-news-card");
    let currentIndex = 0;

    // Function to create Main News Card content
    function createMainNewsCard(imgSrc, categoryText, timeText, headlineText) {
        return `
            <img src="${imgSrc}" class="img-fluid" alt="news" style="opacity: 0;">
            <div class="overlay">
                <span class="category">${categoryText}</span>
                
                <h3 class="mt-3">${headlineText}</h3>
            </div>
        `;
    }

    function updateMainNews() {
        if (newsItems.length === 0) return;

        // Remove active class from previous element
        newsItems.forEach(item => item.classList.remove("active"));
        mainNewsContainer.classList.remove("show");

        let currentNews = newsItems[currentIndex];

        // Add active class to new element
        currentNews.classList.add("active");

        // Get image and text content
        let imgSrc = currentNews.querySelector("img").src;
        let categoryText = currentNews.querySelector("small").textContent;
        let headlineText = currentNews.querySelector("p").textContent;

        // Update HTML
        let newMainNewsCard = createMainNewsCard(imgSrc, categoryText.split("•")[0].trim(), "• " + categoryText.split("•")[1].trim(), headlineText);

        // Fade-out effect
        mainNewsContainer.innerHTML = '';
        mainNewsContainer.innerHTML = newMainNewsCard;

        let mainImg = mainNewsContainer.querySelector("img");
        let category = mainNewsContainer.querySelector(".category");
        let time = mainNewsContainer.querySelector(".time");
        let headline = mainNewsContainer.querySelector("h3");

        // Fade-in effect
        setTimeout(() => {
            mainImg.style.opacity = "1";  // Fade-in for image
            mainNewsContainer.classList.add("show"); // Fade-in for text
        }, 500);

        // Increment index
        currentIndex = (currentIndex + 1) % newsItems.length;
    }

    // Call the function once
    updateMainNews();

    // Set interval to update every 10 seconds
    setInterval(updateMainNews, 5000);
});