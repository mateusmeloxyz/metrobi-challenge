const { getMaxValue } = require('../index');

describe('getMaxValue function', () => {
  // Test case 1: Original example
  test('should return correct value for first example', () => {
    const carrotTypes = [
      { weight: 5, price: 100 },
      { weight: 7, price: 150 },
      { weight: 3, price: 70 },
    ];
    const capacity = 36;
    expect(getMaxValue(carrotTypes, capacity)).toBe(840);
  });

  // Test case 2: Second original example
  test('should return correct value for second example', () => {
    const carrotTypes = [
      { weight: 3, price: 2 },
      { weight: 1, price: 2 },
      { weight: 3, price: 4 },
      { weight: 4, price: 5 },
      { weight: 2, price: 3 },
    ];
    const capacity = 7;
    expect(getMaxValue(carrotTypes, capacity)).toBe(14);
  });

  // Test case 3: Empty carrot types array
  test('should return 0 for empty carrot types', () => {
    expect(getMaxValue([], 10)).toBe(0);
  });

  // Test case 4: Zero capacity
  test('should return 0 for zero capacity', () => {
    const carrotTypes = [{ weight: 5, price: 100 }];
    expect(getMaxValue(carrotTypes, 0)).toBe(0);
  });

  // Test case 5: Capacity smaller than smallest item
  test('should return 0 when capacity is smaller than all items', () => {
    const carrotTypes = [{ weight: 5, price: 100 }];
    const capacity = 4;
    expect(getMaxValue(carrotTypes, capacity)).toBe(0);
  });

  // Test case 6: Single carrot type with exact capacity
  test('should return price for single carrot type with exact capacity', () => {
    const carrotTypes = [{ weight: 5, price: 100 }];
    const capacity = 5;
    expect(getMaxValue(carrotTypes, capacity)).toBe(100);
  });

  // Test case 7: Optimal solution with different carrot types
  test('should find optimal solution with different carrot types', () => {
    const carrotTypes = [
      { weight: 2, price: 3 },
      { weight: 3, price: 5 },
    ];
    const capacity = 5;
    expect(getMaxValue(carrotTypes, capacity)).toBe(8); // Optimal is 1x3kg + 1x2kg = 8 value
  });

  // Test case 8: Fractional weights are better
  test('should find optimal solution with multiple small items', () => {
    const carrotTypes = [
      { weight: 1, price: 1 },
      { weight: 3, price: 2 },
    ];
    const capacity = 3;
    expect(getMaxValue(carrotTypes, capacity)).toBe(3); // Optimal is 3x1kg = 3 value
  });

  // Test case 9: Large capacity
  test('should handle large capacity', () => {
    const carrotTypes = [
      { weight: 5, price: 10 },
      { weight: 10, price: 30 },
    ];
    const capacity = 100;
    expect(getMaxValue(carrotTypes, capacity)).toBe(300); // Optimal is 10x10kg = 300 value
  });

  // Error cases
  // Test case 10: Invalid carrot types
  test('should throw error for non-array carrot types', () => {
    expect(() => getMaxValue('invalid', 10)).toThrow('carrotTypes must be an array');
  });

  // Test case 11: Invalid capacity
  test('should throw error for negative capacity', () => {
    const carrotTypes = [{ weight: 5, price: 100 }];
    expect(() => getMaxValue(carrotTypes, -5)).toThrow('capacity must be a non-negative integer');
  });

  // Test case 12: Invalid weight
  test('should throw error for invalid weight', () => {
    const carrotTypes = [{ weight: 'invalid', price: 100 }];
    expect(() => getMaxValue(carrotTypes, 10)).toThrow('Each carrot type must have a positive integer weight');
  });

  // Test case 13: Invalid price
  test('should throw error for invalid price', () => {
    const carrotTypes = [{ weight: 5, price: 'invalid' }];
    expect(() => getMaxValue(carrotTypes, 10)).toThrow('Each carrot type must have a non-negative price');
  });

  // Test case 14: Missing weight or price
  test('should throw error for missing weight', () => {
    const carrotTypes = [{ price: 100 }];
    expect(() => getMaxValue(carrotTypes, 10)).toThrow('Each carrot type must have a positive integer weight');
  });

  // Test case 15: Fractional capacity
  test('should throw error for fractional capacity', () => {
    const carrotTypes = [{ weight: 5, price: 100 }];
    expect(() => getMaxValue(carrotTypes, 5.5)).toThrow('capacity must be a non-negative integer');
  });
});
