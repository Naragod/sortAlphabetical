const { getFileLines } = require("../src/fileParser");

describe("FileParser Functions", () => {
  describe("getFileLines", () => {
    it("usage", () => {
      const result = getFileLines("./test/story.txt");
      const expected = [
        '"What do you mean?" asked Mark.',
        '"Yes I am Lukas." replied Lukas.',
        "hello world.",
        "My name is lukas",
        "some giverish.",
        "some more text?",
      ];
      expect(result).toEqual(expected);
    });
  });
});
