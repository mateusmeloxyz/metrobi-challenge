const { eggDrop } = require("./index");

describe("Egg Drop Problem", () => {
  // Base cases
  describe("Base cases", () => {
    test("With 0 floors, should return 0", () => {
      expect(eggDrop(1, 0)).toBe(0);
      expect(eggDrop(2, 0)).toBe(0);
    });

    test("With 1 floor, should return 1", () => {
      expect(eggDrop(1, 1)).toBe(1);
      expect(eggDrop(2, 1)).toBe(1);
    });

    test("With 1 egg, should return same as number of floors", () => {
      expect(eggDrop(1, 5)).toBe(5);
      expect(eggDrop(1, 10)).toBe(10);
      expect(eggDrop(1, 100)).toBe(100);
    });
  });

  // Known cases with verified answers
  describe("Known test cases", () => {
    test("With 2 eggs and 2 floors, should return 2", () => {
      expect(eggDrop(2, 2)).toBe(2);
    });

    test("With 2 eggs and 10 floors, should return 4", () => {
      expect(eggDrop(2, 10)).toBe(4);
    });

    test("With 2 eggs and 36 floors, should return 8", () => {
      expect(eggDrop(2, 36)).toBe(8);
    });

    test("With 2 eggs and 100 floors, should return 14", () => {
      expect(eggDrop(2, 100)).toBe(14);
    });

    test("With 3 eggs and 14 floors, should return 4", () => {
      expect(eggDrop(3, 14)).toBe(4);
    });
  });

  // Edge cases
  describe("Edge cases", () => {
    test("With large number of eggs (more than floors)", () => {
      // When we have many eggs, the optimal strategy is binary search
      // which takes log2(floors) drops rounded up
      expect(eggDrop(100, 100)).toBe(7); // ceil(log2(100)) = 7
    });

    test("Performance with medium-sized inputs", () => {
      // This tests that memoization is working correctly
      // Without memoization, this would be much slower
      const start = Date.now();
      const result = eggDrop(3, 500);
      const end = Date.now();

      expect(result).toBeGreaterThan(0);
      // This should be fast with memoization, but we give it a generous timeout
      // to accommodate different machine speeds
      expect(end - start).toBeLessThan(5000); // Should complete in less than 5 seconds
    });
  });

  // Property-based tests
  describe("Properties of the solution", () => {
    test("Adding more eggs should never increase the number of drops needed", () => {
      const floors = 20;
      const dropsWithTwoEggs = eggDrop(2, floors);
      const dropsWithThreeEggs = eggDrop(3, floors);
      const dropsWithFourEggs = eggDrop(4, floors);

      expect(dropsWithThreeEggs).toBeLessThanOrEqual(dropsWithTwoEggs);
      expect(dropsWithFourEggs).toBeLessThanOrEqual(dropsWithThreeEggs);
    });

    test("Adding more floors should never decrease the number of drops needed", () => {
      const eggs = 2;
      const dropsFor10Floors = eggDrop(eggs, 10);
      const dropsFor20Floors = eggDrop(eggs, 20);
      const dropsFor30Floors = eggDrop(eggs, 30);

      expect(dropsFor20Floors).toBeGreaterThanOrEqual(dropsFor10Floors);
      expect(dropsFor30Floors).toBeGreaterThanOrEqual(dropsFor20Floors);
    });

    test("With infinite eggs, solution should approach log2(floors)", () => {
      // When we have many eggs, we can use binary search
      const floors = 100;
      const manyEggs = 100;
      const result = eggDrop(manyEggs, floors);
      const expectedLog2 = Math.ceil(Math.log2(floors));

      expect(result).toBe(expectedLog2);
    });
  });

  // Additional test cases for completeness
  describe("Additional test cases", () => {
    test("With 2 eggs and 20 floors, should return 6", () => {
      expect(eggDrop(2, 20)).toBe(6);
    });

    test("With 3 eggs and 100 floors, should be less than with 2 eggs", () => {
      const twoEggs = eggDrop(2, 100);
      const threeEggs = eggDrop(3, 100);
      expect(threeEggs).toBeLessThan(twoEggs);
    });
  });
});
