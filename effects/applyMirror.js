function applyMirror(imageData) {
    const data = imageData.data;
    const width = imageData.width;
    const height = imageData.height;
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width / 2; x++) {
            const leftIndex = (y * width + x) * 4;
            const rightIndex = (y * width + (width - x - 1)) * 4;
            data[rightIndex] = data[leftIndex];
            data[rightIndex + 1] = data[leftIndex + 1];
            data[rightIndex + 2] = data[leftIndex + 2];
        }
    }
}
