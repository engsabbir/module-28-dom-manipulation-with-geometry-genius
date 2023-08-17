function ellipseArea() {
    const axisA = getInputValue('ellipse-a-axis');
    const axisB = getInputValue('ellipse-b-axis');

    if (isNaN(axisA) || isNaN(axisB)) {
        alert('Please provide a valid number.');
        return;
    }

    const area = 3.1416 * axisA * axisB;
    setElementText('ellipse-area', area)
}