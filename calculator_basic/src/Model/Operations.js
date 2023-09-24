// Define a Operations interface
const Operations = {
    // Method for addition
    add: (a, b) => {
      if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
      } else {
        throw new Error('Both operands must be numbers');
      }
    },
  
    // Method for subtraction
    subtract: (a, b) => {
      if (typeof a === 'number' && typeof b === 'number') {
        return a - b;
      } else {
        throw new Error('Both operands must be numbers');
      }
    },
  
    // Method for multiplication
    multiply: (a, b) => {
      if (typeof a === 'number' && typeof b === 'number') {
        return a * b;
      } else {
        throw new Error('Both operands must be numbers');
      }
    },
  
    // Method for division
    divide: (a, b) => {
      if (typeof a === 'number' && typeof b === 'number' && b !== 0) {
        return a / b;
      } else if (b === 0) {
        throw new Error('Division by zero is not allowed');
      } else {
        throw new Error('Both operands must be numbers');
      }
    }
  };