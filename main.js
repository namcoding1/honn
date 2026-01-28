// Theme switcher
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


// Video Dubbing
const videoUpload = document.getElementById('video-upload');
const scriptInput = document.getElementById('script-input');
const languageSelect = document.getElementById('language-select');
const dubButton = document.getElementById('dub-button');
const videoContainer = document.getElementById('video-container');

dubButton.addEventListener('click', () => {
    const videoFile = videoUpload.files[0];
    const script = scriptInput.value;
    const language = languageSelect.value;

    if (videoFile && script) {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(script);
            utterance.lang = language;

            const videoURL = URL.createObjectURL(videoFile);
            videoContainer.innerHTML = `<video id="dub-video" src="${videoURL}" controls></video>`;
            const video = document.getElementById('dub-video');

            utterance.onstart = () => {
                video.muted = true;
                video.play();
            };

            speechSynthesis.speak(utterance);
        } else {
            alert('Your browser does not support text-to-speech.');
        }
    } else {
        alert('Please upload a video and enter a script.');
    }
});
