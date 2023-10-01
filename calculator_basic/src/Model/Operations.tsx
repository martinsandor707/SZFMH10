// Define a Operations interface
export const Operations = {
    // Method for addition
    add: ({a, b}: { a: number, b: number }) => {
        return a + b;
    },
  
    // Method for subtraction
    subtract: ({a, b}: { a: number, b: number }) => {
        return a - b;
    },
  
    // Method for multiplication
    multiply: ({a, b}: { a: number, b: number }) => {
        return a * b;
    },
  
    // Method for division
    divide: ({a, b}: { a: number, b: number }) => {
      if (b !== 0) {
        return a / b;
      } else if (b === 0) {
        throw new Error('Division by zero is not allowed');
      } else {
        throw new Error('Both operands must be numbers');
      }
    }
  };