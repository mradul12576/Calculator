const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons button');

let currentInput = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;

        if (button.classList.contains('number') || button.classList.contains('decimal')) {
            currentInput += buttonText;
            display.value = currentInput;
        } else if (button.classList.contains('operator')) {
            currentInput += buttonText;
            display.value = currentInput;
        } else if (button.classList.contains('clear')) {
            currentInput = '';
            display.value = '';
        } else if (button.classList.contains('backspace')) {
            currentInput = currentInput.slice(0, -1);
            display.value = currentInput;
        } else if (button.classList.contains('equals')) {
            try {
                display.value = eval(currentInput);
                currentInput = display.value;
            } catch (error) {
                display.value = 'Error';
                currentInput = '';
            }
        }
    });
});