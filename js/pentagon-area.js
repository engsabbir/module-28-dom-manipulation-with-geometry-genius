function pentagonArea() {
    const perimeter = getInputValue('pentagon-perimeter');
    const apothem = getInputValue('pentagon-apothem');

    if (isNaN(perimeter) || isNaN(apothem)) {
        alert('Please provide a valid number');
        return;
    }

    const area = 0.5 * perimeter * apothem;
    setElementText('pentagon-area', area);

    setCalculationData('Pentagon', area);
}