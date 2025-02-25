function applyGlitch(imageData) {
    const data = imageData.data;
    const width = imageData.width;
    const height = imageData.height;
    const glitchAmount = Math.floor(Math.random() * 100) + 1; // Random glitch amount between 1 and 10

    for (let i = 0; i < glitchAmount; i++) {
        const startX = Math.floor(Math.random() * width);
        const startY = Math.floor(Math.random() * height);
        const endX = Math.min(startX + Math.floor(Math.random() * 20) + 10, width);
        const endY = Math.min(startY + Math.floor(Math.random() * 20) + 10, height);

        for (let y = startY; y < endY; y++) {
            for (let x = startX; x < endX; x++) {
                const index = (y * width + x) * 4;
                const shift = Math.floor(Math.random() * 10) - 5; // Random shift between -5 and 5
                const shiftedIndex = ((y + shift) * width + (x + shift)) * 4;

                if (shiftedIndex >= 0 && shiftedIndex < data.length) {
                    data[index] = data[shiftedIndex];
                    data[index + 1] = data[shiftedIndex + 1];
                    data[index + 2] = data[shiftedIndex + 2];
                }
            }
        }
    }
}
