function enableSubmit() {
    let inputs = document.getElementsByClassName('required');
    let isFilled = true;
    for (var i = 0; i < inputs.length; i++) {
        let input = inputs[i];
        if (input.value === null || input.value.trim() === "") {
            isFilled = false;
            break;
        }
    }
    document.querySelector('input[type="submit"]').disabled = !isFilled;
}