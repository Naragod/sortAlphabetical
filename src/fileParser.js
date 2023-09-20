const { sortAsc, range, splitBy } = require("./utils");
const { readFileSync, createWriteStream } = require("fs");

const PUNCTUATION_REGEX = /(?<=[.!?])\s+(?=(?:[^"]*"[^"]*")*[^"]*$)/;
const SEPERATORS = [/\n/, PUNCTUATION_REGEX];
// contains [A-Z], [a-z] and " mark
const VALID_CHARS = [34, ...range(65, 90), ...range(97, 122)].map((num) => String.fromCharCode(num));

// assistant method, useful in viewing the resulting lines array.
const arrayToFile = (fileName, inputArr = []) => {
  const fileWriter = createWriteStream(fileName, { flags: "w" });
  // The \n character here is for ease of view.
  // It places every string on a new line, making it easier to view.
  inputArr.map((input) => fileWriter.write(input + "\n"));
  fileWriter.end();
};

const getFileLines = (filePath, seperateLinesBy = SEPERATORS, validChars = VALID_CHARS) => {
  const file = readFileSync(filePath, "utf8");
  const lines = splitBy(file, seperateLinesBy);
  // return lines.toSorted()
  return lines.toSorted((a, b) => sortAsc(a, b, validChars));
};

module.exports = {
  getFileLines,
  arrayToFile,
};
