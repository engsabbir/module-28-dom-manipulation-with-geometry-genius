function ellipseArea() {
    const axisA = getInputValue('ellipse-a-axis');
    const axisB = getInputValue('ellipse-b-axis');

    if (isNaN(axisA) || isNaN(axisB)) {
        alert('Please provide a valid number.');
        return;
    }

    const area = (Math.PI * axisA * axisB).toFixed(2);
    setElementText('ellipse-area', area)
}