// Automatically sync carousel with tabs
document.querySelectorAll('.nav-link').forEach((tab, index) => {
    tab.addEventListener('shown.bs.tab', () => {
        const carousel = document.querySelector('#imageSlider .carousel-inner');
        const items = carousel.querySelectorAll(`[data-bs-target="#${tab.dataset.bsTarget.split('-')[0]}"]`);
        carousel.querySelector('.active').classList.remove('active');
        items[0].classList.add('active');
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Get all the tab links and image containers
    const tabs = document.querySelectorAll('.nav-link');
    const images = {
        'founder': document.getElementById('founder-image'),
        'mission': document.getElementById('mission-image'),
        'vision': document.getElementById('vision-image')
    };

    // Function to update active image based on active tab
    function changeImage() {
        // Get the active tab and its corresponding image ID
        const activeTabId = document.querySelector('.nav-link.active').getAttribute('aria-controls');

        // Hide all images
        Object.keys(images).forEach(key => {
            images[key].classList.remove('show', 'active');
        });

        // Show the corresponding image for the active tab
        images[activeTabId].classList.add('show', 'active');
    }

    // Add event listeners to tabs to update images when clicked
    tabs.forEach(tab => {
        tab.addEventListener('click', changeImage);
    });

    // Call the changeImage function on page load to ensure the initial image is visible
    changeImage();
});

document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
});
