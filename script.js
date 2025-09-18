// script.js

// Wait for the entire HTML document to be loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

    // Find the button and the stylesheet link in the HTML
    const styleChangeBtn = document.getElementById('changestlyebtn');
    const stylesheet = document.querySelector('link[rel="stylesheet"]');

    // On page load, check if a style is already saved in local storage
    const savedStyle = localStorage.getItem('currentStyle');
    if (savedStyle) {
        // If a style was saved, apply it
        stylesheet.setAttribute('href', savedStyle);
    }

    // Add a 'click' event listener to the "Change Style" button
    styleChangeBtn.addEventListener('click', () => {
        // Check which stylesheet is currently active
        if (stylesheet.getAttribute('href') === 'styleOG.css') {
            // If it's style1, switch to style2
            stylesheet.setAttribute('href', 'style2.css');
            // Save the new choice to local storage
            localStorage.setItem('currentStyle', 'style2.css');
        } else {
            // Otherwise, switch back to style1
            stylesheet.setAttribute('href', 'styleOG.css');
            // Save the new choice to local storage
            localStorage.setItem('currentStyle', 'styleOG.css');
        }
    });
});