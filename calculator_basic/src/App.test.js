import { Operations } from './Model/Operations';

//Operations Addition Test
describe('Operations Addition', () => {
  describe('add', () => {
    it('should add two numbers correctly', () => {
      const result = Operations.add(5, 7);
      expect(result).toBe(12);
    });

    it('should return 0 when both operands are 0', () => {
      const result = Operations.add(0, 0);
      expect(result).toBe(0);
    });

    it('should handle negative numbers', () => {
      const result = Operations.add(-5, 3);
      expect(result).toBe(-2);
    });

    it('should handle decimal numbers', () => {
      const result = Operations.add(2.5, 3.7);
      expect(result).toBeCloseTo(6.2);
    });

    it('should throw an error when one operand is not a number', () => {
      expect(() => Operations.add('hello', 5)).toThrow('Both operands must be numbers');
      expect(() => Operations.add(10, 'world')).toThrow('Both operands must be numbers');
    });

    it('should throw an error when both operands are not numbers', () => {
      expect(() => Operations.add('hello', 'world')).toThrow('Both operands must be numbers');
    });
  });
});

//Operations Subtraction Test
describe('Operations Subtraction', () => {
  describe('subtract', () => {
    it('should subtract two numbers correctly', () => {
      const result = Operations.subtract(10, 5);
      expect(result).toBe(5);
    });

    it('should handle negative results', () => {
      const result = Operations.subtract(5, 10);
      expect(result).toBe(-5);
    });

    it('should return 0 when both operands are the same', () => {
      const result = Operations.subtract(7, 7);
      expect(result).toBe(0);
    });

    it('should handle decimal numbers', () => {
      const result = Operations.subtract(8.5, 3.2);
      expect(result).toBeCloseTo(5.3);
    });

    it('should throw an error when one operand is not a number', () => {
      expect(() => Operations.subtract('hello', 5)).toThrow('Both operands must be numbers');
      expect(() => Operations.subtract(10, 'world')).toThrow('Both operands must be numbers');
    });

    it('should throw an error when both operands are not numbers', () => {
      expect(() => Operations.subtract('hello', 'world')).toThrow('Both operands must be numbers');
    });
  });
});

//Operations Multiplication Test
describe('Operations Multiplication', () => {
  it('should multiply two numbers correctly', () => {
    const result = Operations.multiply(5, 7);
    expect(result).toBe(35);
  });

  it('should return 0 when one operand is 0', () => {
    const result1 = Operations.multiply(0, 5);
    const result2 = Operations.multiply(7, 0);
    expect(result1).toBe(0);
    expect(result2).toBe(0);
  });

  it('should handle negative numbers', () => {
    const result = Operations.multiply(-5, 3);
    expect(result).toBe(-15);
  });

  it('should handle decimal numbers', () => {
    const result = Operations.multiply(2.5, 3.7);
    expect(result).toBeCloseTo(9.25, 2);
  });

  it('should throw an error when one operand is not a number', () => {
    expect(() => Operations.multiply('hello', 5)).toThrow('Both operands must be numbers');
    expect(() => Operations.multiply(10, 'world')).toThrow('Both operands must be numbers');
  });

  it('should throw an error when both operands are not numbers', () => {
    expect(() => Operations.multiply('hello', 'world')).toThrow('Both operands must be numbers');
  });
});

//Operations Division Test
describe('Operations Division', () => {
  describe('divide', () => {
    it('should divide two numbers correctly', () => {
      const result = Operations.divide(10, 2);
      expect(result).toBe(5);
    });

    it('should handle division by zero', () => {
      expect(() => Operations.divide(5, 0)).toThrow('Division by zero is not allowed');
    });

    it('should handle decimal results', () => {
      const result = Operations.divide(7, 2);
      expect(result).toBeCloseTo(3.5);
    });

    it('should throw an error when one operand is not a number', () => {
      expect(() => Operations.divide('hello', 5)).toThrow('Both operands must be numbers');
      expect(() => Operations.divide(10, 'world')).toThrow('Both operands must be numbers');
    });

    it('should throw an error when both operands are not numbers', () => {
      expect(() => Operations.divide('hello', 'world')).toThrow('Both operands must be numbers');
    });
  });
});