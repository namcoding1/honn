// Add JS here

const themeToggle = document.querySelector('#checkbox');

const currentTheme = localStorage.getItem('theme');
const doc = document.documentElement;

if (currentTheme) {
    doc.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        themeToggle.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        doc.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        doc.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}

themeToggle.addEventListener('change', switchTheme, false);