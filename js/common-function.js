function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputFieldValue = inputField.value;
    const inputValue = parseFloat(inputFieldValue);

    inputField.value = '';

    return inputValue;
}

function setElementText(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function setCalculationData(shapeType, area) {
    const calculationSection = document.getElementById('calculation-section');
    const calculationLength = calculationSection.childElementCount;

    const p = document.createElement('p');
    p.classList.add('font-semibold')
    p.innerHTML = `${calculationLength + 1}. ${shapeType} - ${area} cm<sup>2</sup> <button class="px-3 py-2 text-white font-semibold btn-primary rounded">Convert</button>`;

    calculationSection.appendChild(p);
}