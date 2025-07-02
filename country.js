window.onload = function() {
    const videoContainer = document.querySelector('.video-container');
    videoContainer.classList.add('show'); // Add the class to trigger the fade-in

    // Wait for the video fade-in transition to complete
    videoContainer.addEventListener('transitionend', () => {
        // Start checking for scroll events after the video has faded in
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check immediately in case some regions are already in view

    });
};

const regions = document.querySelectorAll('.region');
let activatedRegions = new Set(); // To keep track of activated regions

const slideInRegion = (region) => {
    region.style.opacity = 1; // Fade in
    region.style.transform = 'translateX(0)'; // Slide in
};

const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight; // Current scroll position
    const bottomVisible = () =>
        document.documentElement.clientHeight + window.scrollY >=
        (document.documentElement.scrollHeight ||
          document.documentElement.clientHeight);
    regions.forEach((region, index) => {
        const regionPosition = region.getBoundingClientRect().top + window.scrollY; // Get the region's position relative to the document
        const triggerPoint = window.innerHeight * 0.3; // 50% of the viewport height

        // Check if the region has not been activated yet
        if (!activatedRegions.has(region)) {
            // Check if the region has reached its trigger point
            if (regionPosition <= scrollPosition - triggerPoint || bottomVisible()) {
                activatedRegions.add(region); // Mark the region as activated

                // Use the index to create a staggered delay for each region
                setTimeout(() => {
                    slideInRegion(region); // Slide in the region
                }, 0); // Staggered delay based on index
            }
        }
    });
};


document.addEventListener('DOMContentLoaded', () => {
    const hiddens = document.querySelectorAll('.hidden');

    var originalContent = "";
    const hiddenContent = "hidden";

    regions.forEach(region => {
        region.addEventListener('click', function() {
            var hidden = this.nextElementSibling;

            // Wait for the slide-out animation to finish before changing content
            setTimeout(() => {
                if (originalContent.textContent === hiddenContent) {
                    // originalContent.textContent = "";
                    // this.style.opacity = '1';
                    // this.style.transform = 'translateX(0)';
                    // hidden.style.opacity = '0';
                    // hidden.style.transform = (this.classList.contains('slide-left')) ? 'translateX(100%)' : 'translateX(-100%)';
                } else {
                    originalContent.textContent = hiddenContent;

                    this.style.opacity = '0';
                    this.style.transform = (this.classList.contains('slide-left')) ? 'translateX(-100%)' : 'translateX(100%)';

                    hidden.style.opacity = '1';
                    hidden.style.transform = 'translateX(0)';
                }
            }, 150);
        });
    });

    hiddens.forEach(hidden => {
        hidden.addEventListener('click', function() {
            var region = this.previousElementSibling;

            // Wait for the slide-out animation to finish before changing content
            setTimeout(() => {
                if (originalContent.textContent === hiddenContent) {
                    // originalContent.textContent = "";
                    // this.style.opacity = '1';
                    // this.style.transform = 'translateX(0)';
                    // region.style.opacity = '0';
                    // region.style.transform = (this.classList.contains('slide-left')) ? 'translateX(-100%)' : 'translateX(100%)';
                } else {
                    originalContent.textContent = hiddenContent;

                    this.style.opacity = '0';
                    this.style.transform = (this.classList.contains('slide-left')) ? 'translateX(100%)' : 'translateX(-100%)';

                    region.style.opacity = '1';
                    region.style.transform = 'translateX(0)';
                }
            }, 150); // Match this delay with the CSS transition duration
        });
    });
});

