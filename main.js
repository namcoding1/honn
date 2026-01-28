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
const dubButton = document.getElementById('dub-button');
const videoContainer = document.getElementById('video-container');

dubButton.addEventListener('click', () => {
    const videoFile = videoUpload.files[0];
    const script = scriptInput.value;

    if (videoFile && script) {
        const videoURL = URL.createObjectURL(videoFile);
        videoContainer.innerHTML = `<video src="${videoURL}" controls></video>`;
        console.log('Dubbing script:', script);
        // In a real application, you would send the video and script to a server for processing.
    } else {
        alert('Please upload a video and enter a script.');
    }
});