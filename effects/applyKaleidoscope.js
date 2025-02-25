function applyKaleidoscope(imageData) {
    const data = imageData.data;
    const width = imageData.width;
    const height = imageData.height;
    const halfWidth = Math.floor(width / 2);
    const halfHeight = Math.floor(height / 2);

    for (let y = 0; y < halfHeight; y++) {
        for (let x = 0; x < halfWidth; x++) {
            const index = (y * width + x) * 4;
            const mirroredIndex1 = (y * width + (width - x - 1)) * 4;
            const mirroredIndex2 = ((height - y - 1) * width + x) * 4;
            const mirroredIndex3 = ((height - y - 1) * width + (width - x - 1)) * 4;

            data[mirroredIndex1] = data[index];
            data[mirroredIndex1 + 1] = data[index + 1];
            data[mirroredIndex1 + 2] = data[index + 2];

            data[mirroredIndex2] = data[index];
            data[mirroredIndex2 + 1] = data[index + 1];
            data[mirroredIndex2 + 2] = data[index + 2];

            data[mirroredIndex3] = data[index];
            data[mirroredIndex3 + 1] = data[index + 1];
            data[mirroredIndex3 + 2] = data[index + 2];
        }
    }
}
