function applyEdgeDetection(imageData, tempContext) {
    const data = imageData.data;
    const width = imageData.width;
    const height = imageData.height;
    const kernel = [
        -1, -1, -1,
        -1, 8, -1,
        -1, -1, -1
    ];
    tempContext.canvas.width = width;
    tempContext.canvas.height = height;
    tempContext.putImageData(imageData, 0, 0);
    const src = tempContext.getImageData(0, 0, width, height).data;
    const dst = new Uint8ClampedArray(src.length);
    for (let y = 1; y < height - 1; y++) {
        for (let x = 1; x < width - 1; x++) {
            let r = 0, g = 0, b = 0;
            for (let ky = -1; ky <= 1; ky++) {
                for (let kx = -1; kx <= 1; kx++) {
                    const srcIndex = ((y + ky) * width + (x + kx)) * 4;
                    const weight = kernel[(ky + 1) * 3 + (kx + 1)];
                    r += src[srcIndex] * weight;
                    g += src[srcIndex + 1] * weight;
                    b += src[srcIndex + 2] * weight;
                }
            }
            const dstIndex = (y * width + x) * 4;
            dst[dstIndex] = r;
            dst[dstIndex + 1] = g;
            dst[dstIndex + 2] = b;
            dst[dstIndex + 3] = 255;
        }
    }
    for (let i = 0; i < data.length; i++) {
        data[i] = dst[i];
    }
}
