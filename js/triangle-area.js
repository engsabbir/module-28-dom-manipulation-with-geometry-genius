function triangleArea() {
    // const heightField = document.getElementById('triangle-height');
    // const heightFieldValue = heightField.value;
    // const height = parseFloat(heightFieldValue);
    // console.log(height);

    const height = getInputValue('triangle-height');
    const width = getInputValue('triangle-width');
    
    if(isNaN(height) || isNaN(width)){
        alert('Please provide a valid number');
        return;
    }
    const area = 0.5 * height * width;
    setElementText('triangle-area', area)
}


function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputFieldValue = inputField.value;
    const inputValue = parseFloat(inputFieldValue);
}

function setElementText(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}