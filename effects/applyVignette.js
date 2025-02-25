function applyVignette(imageData) {
    const data = imageData.data;
    const width = imageData.width;
    const height = imageData.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const maxDistance = Math.sqrt(centerX * centerX + centerY * centerY);
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const index = (y * width + x) * 4;
            const distance = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2);
            const factor = 1 - (distance / maxDistance);
            data[index] *= factor;
            data[index + 1] *= factor;
            data[index + 2] *= factor;
        }
    }
}
