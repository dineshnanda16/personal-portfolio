let lastScrollTop = 0; // Keep track of the last scroll position
const navigationButton = document.querySelector('.navigation-button'); // Get the back button

// Function to handle the visibility of the navigation button
function handleScroll() {
    let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop; // Get the current scroll position

    // If scrolling down, hide the navigation button
    if (currentScrollTop > lastScrollTop) {
        navigationButton.style.transform = "translateY(-100%)"; // Hide the button
    } 
    // If scrolling up, show the navigation button
    else {
        navigationButton.style.transform = "translateY(0)"; // Show the button
    }

    // Update the last scroll position
    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // Prevent going into negative values
}

// Add event listener for scroll
window.addEventListener('scroll', handleScroll);
