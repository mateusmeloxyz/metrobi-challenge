const { isValidString } = require("./index");

/**
 * Unit tests for the isValidString function
 *
 * This test suite covers:
 * - Basic functionality
 * - Edge cases
 * - Various valid and invalid bracket combinations
 * - Non-string inputs
 * - Performance with large inputs
 */
describe("isValidString Function Tests", () => {
  describe("Basic Functionality", () => {
    test("should return true for empty string", () => {
      expect(isValidString("")).toBe(true);
    });

    test("should return true for single pair of brackets", () => {
      expect(isValidString("()")).toBe(true);
      expect(isValidString("[]")).toBe(true);
      expect(isValidString("{}")).toBe(true);
    });

    test("should return true for multiple pairs of same brackets", () => {
      expect(isValidString("()()")).toBe(true);
      expect(isValidString("[][]")).toBe(true);
      expect(isValidString("{}{}")).toBe(true);
    });

    test("should return true for multiple different brackets in sequence", () => {
      expect(isValidString("()[]{}")).toBe(true);
      expect(isValidString("{}[]()")).toBe(true);
      expect(isValidString("[]{}()")).toBe(true);
    });
  });

  describe("Nested Brackets", () => {
    test("should return true for nested brackets of same type", () => {
      expect(isValidString("(())")).toBe(true);
      expect(isValidString("[[]]")).toBe(true);
      expect(isValidString("{{}}")).toBe(true);
    });

    test("should return true for nested brackets of different types", () => {
      expect(isValidString("([{}])")).toBe(true);
      expect(isValidString("{([])}")).toBe(true);
      expect(isValidString("[{()}]")).toBe(true);
    });

    test("should return true for complex nested structures", () => {
      expect(isValidString("({[]})")).toBe(true);
      expect(isValidString("({[()]})")).toBe(true);
      expect(isValidString("({}[])")).toBe(true);
      expect(isValidString("({[]}){([])}")).toBe(true);
      expect(isValidString("({[{}[]()]})")).toBe(true);
    });
  });

  describe("Invalid Bracket Combinations", () => {
    test("should return false for unmatched opening brackets", () => {
      expect(isValidString("(")).toBe(false);
      expect(isValidString("[")).toBe(false);
      expect(isValidString("{")).toBe(false);
      expect(isValidString("(([")).toBe(false);
    });

    test("should return false for unmatched closing brackets", () => {
      expect(isValidString(")")).toBe(false);
      expect(isValidString("]")).toBe(false);
      expect(isValidString("}")).toBe(false);
      expect(isValidString("])]")).toBe(false);
    });

    test("should return false for mismatched brackets", () => {
      expect(isValidString("(]")).toBe(false);
      expect(isValidString("[}")).toBe(false);
      expect(isValidString("{)")).toBe(false);
      expect(isValidString("([)")).toBe(false);
    });

    test("should return false for incorrectly ordered brackets", () => {
      expect(isValidString(")(")).toBe(false);
      expect(isValidString("}{")).toBe(false);
      expect(isValidString("][")).toBe(false);
      expect(isValidString("([)]")).toBe(false);
    });

    test("should return false for unbalanced nested brackets", () => {
      expect(isValidString("({[)]})")).toBe(false);
      expect(isValidString("({[()]}))")).toBe(false);
      expect(isValidString("({[{}[]()]}})")).toBe(false);
    });
  });

  describe("Non-Bracket Characters", () => {
    test("should return false for non-bracket characters", () => {
      expect(isValidString("a")).toBe(false);
      expect(isValidString("1")).toBe(false);
      expect(isValidString(" ")).toBe(false);
      expect(isValidString("Hello World")).toBe(false);
    });

    test("should return false for brackets mixed with other characters", () => {
      expect(isValidString("(a)")).toBe(false);
      expect(isValidString("([1])")).toBe(false);
      expect(isValidString("{Hello}")).toBe(false);
      expect(isValidString("[{World}]")).toBe(false);
    });
  });

  describe("Edge Cases", () => {
    test("should handle non-string inputs", () => {
      expect(isValidString(null)).toBe(false);
      expect(isValidString(undefined)).toBe(false);
      expect(isValidString(123)).toBe(false);
      expect(isValidString({})).toBe(false);
      expect(isValidString([])).toBe(false);
      expect(isValidString(true)).toBe(false);
    });

    test("should handle very long valid inputs", () => {
      const longValidString1 = "(" + "{}[]".repeat(100) + ")";
      const longValidString2 = "(" + "{}".repeat(500) + ")";
      const longValidString3 = "(" + "[".repeat(500) + ")" + "]".repeat(500);

      expect(isValidString(longValidString1)).toBe(true);
      expect(isValidString(longValidString2)).toBe(true);
      expect(isValidString(longValidString3)).toBe(false);
    });
  });
});
