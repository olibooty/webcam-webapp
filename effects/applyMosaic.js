function applyMosaic(imageData, tileSize = 10) {
    const data = imageData.data;
    const width = imageData.width;
    const height = imageData.height;
    const borderColor = [51, 51, 51, 255]; // #333333

    for (let y = 0; y < height; y += tileSize) {
        for (let x = 0; x < width; x += tileSize) {
            const index = (y * width + x) * 4;
            const r = data[index];
            const g = data[index + 1];
            const b = data[index + 2];
            for (let dy = 0; dy < tileSize; dy++) {
                for (let dx = 0; dx < tileSize; dx++) {
                    const pixelIndex = ((y + dy) * width + (x + dx)) * 4;
                    if (pixelIndex < data.length) {
                        if (dy === 0 || dx === 0 || dy === tileSize - 1 || dx === tileSize - 1) {
                            data[pixelIndex] = borderColor[0];
                            data[pixelIndex + 1] = borderColor[1];
                            data[pixelIndex + 2] = borderColor[2];
                            data[pixelIndex + 3] = borderColor[3];
                        } else {
                            data[pixelIndex] = r;
                            data[pixelIndex + 1] = g;
                            data[pixelIndex + 2] = b;
                        }
                    }
                }
            }
        }
    }
}
