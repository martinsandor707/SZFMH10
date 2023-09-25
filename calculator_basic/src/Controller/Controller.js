import { Operations } from "../Model/Operations";

export class Controller {
    constructor() {
        this.display = document.getElementById("calculator-display");
        this.currentInput = "";
        this.currentOperator = null;
        this.result = null;
          
        // Add click event listeners to number and operator buttons
        const numberButtons = document.querySelectorAll(".number");
        const operatorButtons = document.querySelectorAll(".operator");
    
        numberButtons.forEach(button => {
          button.addEventListener("click", () => this.handleNumberClick(button.textContent));
        });
    
        operatorButtons.forEach(button => {
          button.addEventListener("click", () => this.handleOperatorClick(button.textContent));
        });
    
        // Add click event listener to the equal button
        document.getElementById("equals").addEventListener("click", () => this.calculate());
      }
    
      handleNumberClick(number) {
        this.currentInput += number;
        this.updateDisplay();
      }
    
      handleOperatorClick(operator) {
        if (this.currentOperator === null) {
          this.currentOperator = operator;
          this.result = parseFloat(this.currentInput);
          this.currentInput = "";
          this.updateDisplay();
        } else {
          // Calculate the result when an operator is already selected
          this.calculate();
          this.currentOperator = operator;
        }
      }
    
      calculate() {
        const input = parseFloat(this.currentInput);
    
        switch (this.currentOperator) {
          case "+":
            this.result = Operations.add(this.result,input);
            break;
          case "-":
            this.result = Operations.subtract(this.result,input);
            break;
          case "*":
            this.result = Operations.multiply(this.result,input);
            break;
          case "/":
            if (input !== 0) {
              this.result = Operations.divide(this.result,input);
            } else {
              this.display.textContent = "Error"; // Handle division by zero
            }
            break;
        }
    
        this.currentInput = "";
        this.currentOperator = null;
        this.updateDisplay();
      }
    
      updateDisplay() {
        this.display.textContent = this.currentInput || this.result || "0";
      }
}

const controller = new Controller();