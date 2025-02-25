function applyCartoon(imageData) {
    const data = imageData.data;
    const width = imageData.width;
    const height = imageData.height;

    // Apply edge detection
    const tempCanvas = document.createElement('canvas');
    const tempContext = tempCanvas.getContext('2d');
    tempCanvas.width = width;
    tempCanvas.height = height;
    tempContext.putImageData(imageData, 0, 0);
    applyEdgeDetection(imageData, tempContext);

    // Simplify colors
    for (let i = 0; i < data.length; i += 4) {
        data[i] = Math.floor(data[i] / 64) * 64;
        data[i + 1] = Math.floor(data[i + 1] / 64) * 64;
        data[i + 2] = Math.floor(data[i + 2] / 64) * 64;
    }
}
