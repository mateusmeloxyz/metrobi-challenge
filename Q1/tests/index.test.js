const findDuplicates = require("../index"); // had trouble trying to import. Read more about later on https://jestjs.io/docs/ecmascript-modules

describe("findDuplicates", () => {
  test("should return an empty array when given an empty array", () => {
    expect(findDuplicates([])).toEqual([]);
  });

  test("should return an empty array when there are no duplicates", () => {
    expect(findDuplicates([1, 2, 3, 4, 5])).toEqual([]);
    expect(findDuplicates(["a", "b", "c"])).toEqual([]);
  });

  test("should return array with only the duplicate numbers", () => {
    expect(findDuplicates([1, 2, 2, 3, 4, 4, 5])).toEqual([2, 4]);
    expect(findDuplicates([5, 5, 5])).toEqual([5]);
  });

  test("should return array with only the duplicate strings", () => {
    expect(findDuplicates(["a", "b", "a", "c", "b"])).toEqual(["a", "b"]);
    expect(findDuplicates(["hello", "world", "hello"])).toEqual(["hello"]);
  });

  test("should work with mixed data types", () => {
    expect(findDuplicates([1, "1", 1, "1", true, true])).toEqual([
      1,
      "1",
      true,
    ]);
  });

  test("should work with null and undefined", () => {
    expect(findDuplicates([null, undefined, null, undefined])).toEqual([
      null,
      undefined,
    ]);
  });

  test("should work with objects by reference", () => {
    const obj1 = { id: 1 };
    const obj2 = { id: 2 };
    expect(findDuplicates([obj1, obj2, obj1])).toEqual([obj1]);
  });

  test("should handle complex nested structures", () => {
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];
    expect(findDuplicates([arr1, arr2, arr1])).toEqual([arr1]);
  });

  test("should only include each duplicate once in the result", () => {
    expect(findDuplicates([1, 1, 1, 1])).toEqual([1]);
    expect(findDuplicates(["a", "a", "a"])).toEqual(["a"]);
  });

  test("should throw TypeError when input is not an array", () => {
    expect(() => findDuplicates(null)).toThrow(TypeError);
    expect(() => findDuplicates(undefined)).toThrow(TypeError);
    expect(() => findDuplicates(123)).toThrow(TypeError);
    expect(() => findDuplicates("string")).toThrow(TypeError);
    expect(() => findDuplicates({ key: "value" })).toThrow(TypeError);
  });
});
