// @ts-ignore
import { Operations } from "../Model/Operations.tsx";
import Calculator from "../View/Components/Calculator";

export class Controller implements IController {


    private readonly display: any;
    private currentInput: string;
    private currentOperator: any;
    private result: any;

    constructor() {
        this.display = document.getElementById("calculator-display");
        console.log("this.display:", this.display);


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
        // @ts-ignore
        // document.getElementById("equals").addEventListener("click", () => this.calculate());

      }

    handleNumberClick(number: any) : void {
        this.currentInput += number;
        this.updateDisplay();
      }

      handleOperatorClick(operator: any) : void {
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
    
      calculate() : void {
        const input = parseFloat(this.currentInput);
    
        switch (this.currentOperator) {
          case "+":
            this.result = Operations.add({a: this.result, b: input});
            break;
          case "-":
            this.result = Operations.subtract({a: this.result, b: input});
            break;
          case "*":
            this.result = Operations.multiply({a: this.result, b: input});
            break;
          case "/":
            if (input !== 0) {
              this.result = Operations.divide({a: this.result, b: input});
            } else {
              this.display.textContent = "Error"; // Handle division by zero
            }
            break;
        }
    
        this.currentInput = "";
        this.currentOperator = null;
        this.updateDisplay();
      }
    
      updateDisplay() : void {
        this.display.textContent = this.currentInput || this.result || "0";
      }
}

const controller = new Controller();