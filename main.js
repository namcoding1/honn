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
