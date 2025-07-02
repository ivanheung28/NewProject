document.addEventListener('DOMContentLoaded', () => {
    const regions = document.querySelectorAll('.region');
    const hiddens = document.querySelectorAll('.hidden');
    // Function to slide in the regions
    const slideInRegions = () => {
        regions.forEach((region, index) => {
            setTimeout(() => {
                region.style.opacity = 1; // Fade in
                region.style.transform = 'translateX(0)'; // Slide in
            }, index * 150); // Delay based on index
        });
    };

    slideInRegions();

    var originalContent = "";
    const hiddenContent = "hidden";

    regions.forEach(region => {
        region.addEventListener('click', function() {
           
            var hidden = this.nextElementSibling;

            // Wait for the slide-out animation to finish before changing content
            setTimeout(() => {
                // Check if the current content is the original or new content
                if (originalContent.textContent === hiddenContent) {
                    // originalContent.textContent = "";

                    // this.style.opacity = '1';
                    // this.style.transform = 'translateX(0)';
                   
                    // hidden.style.opacity = '0';
                    // hidden.style.transform = (this.classList.contains('slide-left')) ? 'translateX(100%)' : 'translateX(-100%)';
                     
                } else {
                    console.log("normal show ",hidden.style.transform);
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
                // Check if the current content is the original or new content
                if (originalContent.textContent === hiddenContent) {
                    // originalContent.textContent = "";
                    // console.log("hidden hidden");
                    // this.style.opacity = '1';
                    // this.style.transform = 'translateX(0)';

                    // region.style.opacity = '0';
                    // region.style.transform = (this.classList.contains('slide-left')) ? 'translateX(-100%)' : 'translateX(100%)';
                } else {
                    originalContent.textContent = hiddenContent;
                    console.log("hidden show");
                    this.style.opacity = '0';
                    this.style.transform = (this.classList.contains('slide-left')) ? 'translateX(100%)' : 'translateX(-100%)';

                    region.style.opacity = '1';
                    region.style.transform = 'translateX(0)';   
                }
                
            }, 150); // Match this delay with the CSS transition duration
        });
    });
});

