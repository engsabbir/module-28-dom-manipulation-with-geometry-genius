function rhombusArea() {
    const firstValue = getInputValue('rhombus-diagonal1');
    const secondValue = getInputValue('rhombus-diagonal2');

    if (isNaN(firstValue) || isNaN(secondValue)) {
        alert('Please provide a valid number.')
        return;
    }

    const area = firstValue * secondValue;
    setElementText('rhombus-area', area);
}