function loop(callback) {
    callback();
    requestAnimationFrame(() => loop(callback));
}
