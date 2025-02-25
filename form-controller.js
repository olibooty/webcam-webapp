document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    window.effectData = {};

    form.addEventListener('change', (event) => {
        const target = event.target;
        if (target.type === 'checkbox') {
            window.effectData[target.id] = target.checked;
        } else if (target.type === 'range') {
            window.effectData[target.id] = target.value;
        }
    });

    // Initialize effectData with current form values
    const inputs = form.querySelectorAll('input');
    inputs.forEach(input => {
        if (input.type === 'checkbox') {
            window.effectData[input.id] = input.checked;
        } else if (input.type === 'range') {
            window.effectData[input.id] = input.value;
        }
    });
});
