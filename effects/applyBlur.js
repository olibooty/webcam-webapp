function applyBlur(imageData, tempContext, radius = 5) {
    const data = imageData.data;
    const width = imageData.width;
    const height = imageData.height;
    tempContext.canvas.width = width;
    tempContext.canvas.height = height;
    tempContext.putImageData(imageData, 0, 0);
    tempContext.globalAlpha = 0.5;
    for (let y = -radius; y <= radius; y++) {
        for (let x = -radius; x <= radius; x++) {
            tempContext.drawImage(tempContext.canvas, x, y);
        }
    }
    tempContext.globalAlpha = 1.0;
    const blurredImageData = tempContext.getImageData(0, 0, width, height);
    for (let i = 0; i < data.length; i++) {
        data[i] = blurredImageData.data[i];
    }
}
