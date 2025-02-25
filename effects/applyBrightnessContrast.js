function applyBrightnessContrast(imageData, brightness = 0, contrast = 1) {
    const data = imageData.data;
    for (let i = 0; i < data.length; i += 4) {
        data[i] = contrast * (data[i] - 128) + 128 + brightness;
        data[i + 1] = contrast * (data[i + 1] - 128) + 128 + brightness;
        data[i + 2] = contrast * (data[i + 2] - 128) + 128 + brightness;
    }
}
