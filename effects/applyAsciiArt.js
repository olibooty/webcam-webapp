function applyAsciiArt(imageData) {
    const fontSize = 8;
    const data = imageData.data;
    const width = imageData.width;
    const height = imageData.height;
    const asciiChars = ['@', '#', '8', '&', 'o', ':', '*', '.', ' '];
    const asciiCanvas = document.createElement('canvas');
    const asciiContext = asciiCanvas.getContext('2d');
    asciiCanvas.width = width;
    asciiCanvas.height = height;
    asciiContext.fillStyle = 'white';
    asciiContext.fillRect(0, 0, width, height);
    asciiContext.fillStyle = 'black';
    asciiContext.font = `${fontSize}px monospace`;

    for (let y = 0; y < height; y += fontSize) {
        for (let x = 0; x < width; x += fontSize) {
            const index = (y * width + x) * 4;
            const brightness = (data[index] + data[index + 1] + data[index + 2]) / 3;
            const charIndex = Math.floor((brightness / 255) * (asciiChars.length - 1));
            asciiContext.fillText(asciiChars[charIndex], x, y + fontSize);
        }
    }

    const asciiImageData = asciiContext.getImageData(0, 0, width, height);
    for (let i = 0; i < data.length; i++) {
        data[i] = asciiImageData.data[i];
    }
}
