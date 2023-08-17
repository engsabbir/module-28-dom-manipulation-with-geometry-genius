function rectangleArea() {
    const width = getInputValue('rectangle-width');
    const height = getInputValue('rectangle-length');

    // optional: if u use 'input -webkit-appearance: none', then don't need this.
    if (isNaN(width) || isNaN(height)) {
        alert('Please provide a valid number');
        return;
    }
    
    const area = width * height;
    setElementText('rectangle-area', area)
}