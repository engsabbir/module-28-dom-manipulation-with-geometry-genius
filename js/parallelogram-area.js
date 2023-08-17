function parallelogramArea(){
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height');

    if(isNaN(base) || isNaN(height)){
        alert('Please provide a valid number');
        return;
    }
    const area = base * height;
    setElementText('')
}