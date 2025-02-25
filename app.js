document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('webcam');
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');

    // Create an intermediate canvas
    const intermediateCanvas = document.createElement('canvas');
    const intermediateContext = intermediateCanvas.getContext('2d');

    // Create a temporary canvas for the blur and edge detection effects
    const tempCanvas = document.createElement('canvas');
    const tempContext = tempCanvas.getContext('2d');

    async function startWebcam() {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            video.srcObject = stream;
            video.addEventListener('loadedmetadata', () => {
                video.play();
                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;
                intermediateCanvas.width = video.videoWidth;
                intermediateCanvas.height = video.videoHeight;
                tempCanvas.width = video.videoWidth;
                tempCanvas.height = video.videoHeight;
            });
        } catch (err) {
            console.error('Error accessing webcam: ', err);
        }
    }

    function drawVideoToCanvas() {
        intermediateContext.drawImage(video, 0, 0, intermediateCanvas.width, intermediateCanvas.height);
        const imageData = intermediateContext.getImageData(0, 0, intermediateCanvas.width, intermediateCanvas.height);

        if (window.effectData.grayscale) {
            applyGrayscale(imageData);
        }

        if (window.effectData.sepia) {
            applySepia(imageData);
        }

        if (window.effectData.invertColors) {
            applyInvertColors(imageData);
        }

        if (window.effectData.blur) {
            const blurRadius = parseInt(window.effectData.blurRadius, 10);
            applyBlur(imageData, tempContext, blurRadius);
        }

        if (window.effectData.edgeDetection) {
            applyEdgeDetection(imageData, tempContext);
        }

        if (window.effectData.brightnessContrast) {
            const brightness = parseInt(window.effectData.brightness, 10);
            const contrast = parseFloat(window.effectData.contrast);
            applyBrightnessContrast(imageData, brightness, contrast);
        }

        if (window.effectData.pixelate) {
            const pixelSize = parseInt(window.effectData.pixelSize, 10);
            applyPixelate(imageData, pixelSize);
        }

        if (window.effectData.vignette) {
            applyVignette(imageData);
        }

        if (window.effectData.noise) {
            applyNoise(imageData);
        }

        if (window.effectData.colorShift) {
            applyColorShift(imageData);
        }

        if (window.effectData.mirror) {
            applyMirror(imageData);
        }

        if (window.effectData.glitch) {
            applyGlitch(imageData);
        }

        if (window.effectData.kaleidoscope) {
            applyKaleidoscope(imageData);
        }

        if (window.effectData.mosaic) {
            const tileSize = parseInt(window.effectData.tileSize, 10);
            applyMosaic(imageData, tileSize);
        }

        if (window.effectData.asciiArt) {
            applyAsciiArt(imageData);
        }

        context.putImageData(imageData, 0, 0);
    }

    startWebcam();

    loop(() => {
        drawVideoToCanvas();
    });
});
