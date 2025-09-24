
document.addEventListener('DOMContentLoaded', () => {

    const styleChangeBtn = document.getElementById('changestlyebtn');
    const stylesheet = document.querySelector('link[rel="stylesheet"]');

    const savedStyle = localStorage.getItem('currentStyle');
    if (savedStyle) {
        stylesheet.setAttribute('href', savedStyle);
    }

    styleChangeBtn.addEventListener('click', () => {
        if (stylesheet.getAttribute('href') === 'styleOG.css') {
            stylesheet.setAttribute('href', 'style2.css');
            localStorage.setItem('currentStyle', 'style2.css');
        } else {
            stylesheet.setAttribute('href', 'styleOG.css');
            localStorage.setItem('currentStyle', 'styleOG.css');
        }
    });
});