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