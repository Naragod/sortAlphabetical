const { flatten, range, sortAsc, splitBy } = require("../src/utils");

describe("Utility Functions", () => {
  describe("flatten", () => {
    it("usage", () => {
      const input = [1, "", "hello", ["world", "friend"], [undefined]];
      const expected = [1, "hello", "world", "friend"];
      const result = flatten(input);
      expect(result).toEqual(expected);
    });
  });

  describe("range", () => {
    it("usage", () => {
      const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      const result = range(1, 10);
      expect(result).toEqual(expected);
    });
  });

  describe("sortAsc", () => {
    it("usage", () => {
      const arr = ["a", "--", "&-", "b", "'", "a-b"];
      const expected = ["a", "a-b", "b", "--", "'", "&-"];
      const regularExpectation = ["&-", "'", "--", "a", "a-b", "b"];
      const regularSorted = arr.toSorted();
      const result = arr.toSorted((a, b) => sortAsc(a, b, ["a", "b"]));

      expect(result).toEqual(expected);
      expect(regularSorted).toEqual(regularExpectation);
    });
  });

  describe("splitBy", () => {
    it("usage", () => {
      const seperators = [/\n/, /(?<=[.!?])\s+(?=(?:[^"]*"[^"]*")*[^"]*$)/];
      const longStr = 'hello world.\nLucy asks: "Am I here?"\n"Yes" replied Jacob.';
      const expected = ["hello world.", 'Lucy asks: "Am I here?"', '"Yes" replied Jacob.'];
      const result = splitBy(longStr, seperators);
      expect(result).toEqual(expected);
    });
  });
});
