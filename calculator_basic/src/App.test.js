import { Operations } from './Model/Operations';

//Operations Addition Test
describe('Operations Addition', () => {
  describe('add', () => {
    it('should add two numbers correctly', () => {
      const result = Operations.add({a: 5, b: 7});
      expect(result).toBe(12);
    });

    it('should return 0 when both operands are 0', () => {
      const result = Operations.add({a: 0, b: 0});
      expect(result).toBe(0);
    });

    it('should handle negative numbers', () => {
      const result = Operations.add({a: -5, b: 3});
      expect(result).toBe(-2);
    });

    it('should handle decimal numbers', () => {
      const result = Operations.add({a: 2.5, b: 3.7});
      expect(result).toBeCloseTo(6.2);
    });

    it('should throw an error when one operand is not a number', () => {
      expect(() => Operations.add({a: 'hello', b: 5})).toThrow('Both operands must be numbers');
      expect(() => Operations.add({a: 10, b: 'world'})).toThrow('Both operands must be numbers');
    });

    it('should throw an error when both operands are not numbers', () => {
      expect(() => Operations.add({a: 'hello', b: 'world'})).toThrow('Both operands must be numbers');
    });
  });
});

//Operations Subtraction Test
describe('Operations Subtraction', () => {
  describe('subtract', () => {
    it('should subtract two numbers correctly', () => {
      const result = Operations.subtract({a: 10, b: 5});
      expect(result).toBe(5);
    });

    it('should handle negative results', () => {
      const result = Operations.subtract({a: 5, b: 10});
      expect(result).toBe(-5);
    });

    it('should return 0 when both operands are the same', () => {
      const result = Operations.subtract({a: 7, b: 7});
      expect(result).toBe(0);
    });

    it('should handle decimal numbers', () => {
      const result = Operations.subtract({a: 8.5, b: 3.2});
      expect(result).toBeCloseTo(5.3);
    });

    it('should throw an error when one operand is not a number', () => {
      expect(() => Operations.subtract({a: 'hello', b: 5})).toThrow('Both operands must be numbers');
      expect(() => Operations.subtract({a: 10, b: 'world'})).toThrow('Both operands must be numbers');
    });

    it('should throw an error when both operands are not numbers', () => {
      expect(() => Operations.subtract({a: 'hello', b: 'world'})).toThrow('Both operands must be numbers');
    });
  });
});

//Operations Multiplication Test
describe('Operations Multiplication', () => {
  it('should multiply two numbers correctly', () => {
    const result = Operations.multiply({a: 5, b: 7});
    expect(result).toBe(35);
  });

  it('should return 0 when one operand is 0', () => {
    const result1 = Operations.multiply({a: 0, b: 5});
    const result2 = Operations.multiply({a: 7, b: 0});
    expect(result1).toBe(0);
    expect(result2).toBe(0);
  });

  it('should handle negative numbers', () => {
    const result = Operations.multiply({a: -5, b: 3});
    expect(result).toBe(-15);
  });

  it('should handle decimal numbers', () => {
    const result = Operations.multiply({a: 2.5, b: 3.7});
    expect(result).toBeCloseTo(9.25, 2);
  });

  it('should throw an error when one operand is not a number', () => {
    expect(() => Operations.multiply({a: 'hello', b: 5})).toThrow('Both operands must be numbers');
    expect(() => Operations.multiply({a: 10, b: 'world'})).toThrow('Both operands must be numbers');
  });

  it('should throw an error when both operands are not numbers', () => {
    expect(() => Operations.multiply({a: 'hello', b: 'world'})).toThrow('Both operands must be numbers');
  });
});

//Operations Division Test
describe('Operations Division', () => {
  describe('divide', () => {
    it('should divide two numbers correctly', () => {
      const result = Operations.divide({a: 10, b: 2});
      expect(result).toBe(5);
    });

    it('should handle division by zero', () => {
      expect(() => Operations.divide({a: 5, b: 0})).toThrow('Division by zero is not allowed');
    });

    it('should handle decimal results', () => {
      const result = Operations.divide({a: 7, b: 2});
      expect(result).toBeCloseTo(3.5);
    });

    it('should throw an error when one operand is not a number', () => {
      expect(() => Operations.divide({a: 'hello', b: 5})).toThrow('Both operands must be numbers');
      expect(() => Operations.divide({a: 10, b: 'world'})).toThrow('Both operands must be numbers');
    });

    it('should throw an error when both operands are not numbers', () => {
      expect(() => Operations.divide({a: 'hello', b: 'world'})).toThrow('Both operands must be numbers');
    });
  });
});