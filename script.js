const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operator]');
const equalButton = document.querySelectorAll('[data-equals]');
const deleteButton = document.querySelectorAll('[data-delete]');
const allClearButton = document.querySelectorAll('[data-all-clear]')
const previousOperandTextElement = document.querySelectorAll('[data-previous-operand]')
const currentOperandTextElement = document.querySelectorAll('[data=current-operand]');

class Calculator {
    contructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
    }

    clear() { 
        this.currentOperandText = '';
        this.previousOperand = '';
        this.operation = undefined;
    }

    updateDisplay() {
        this.previousOperandTextElement.innerText = this.previousOperand;
        this.currentOperandTextElement.innerText = this.currentOperand;
    }
}

const calculator = new Calculator(
    previousOperandTextElement,
    currentOperandTextElement
);

allClearButton.addEventListenner('click', () => {
    calculator.clear();
    

});
 


