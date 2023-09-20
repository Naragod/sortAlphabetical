const flatten = (arr) => {
  return arr
    .reduce((prev, curr) => {
      return prev.concat(Array.isArray(curr) ? flatten(curr) : curr);
    }, [])
    .filter((item) => item != undefined && item != "");
};
// start and end are inclusive
const range = (start = 0, end = 10) => Array.from({ length: Math.abs(end + 1 - start) }, (_, i) => i + start);

const splitBy = (input, regexes) =>
  regexes.reduce((arr, regex) => flatten(arr.map((str) => str.split(regex))), [input]);

const sortAsc = (a, b, validChars) => {
  // if neither string belongs them to validChars, do a simple string compare
  if (!validChars.includes(a[0]) && !validChars.includes(b[0])) return a.localeCompare(b);
  // If the first character of the string starts with a character outside of validChars, sort it last
  if (!validChars.includes(a[0])) return 1;
  if (!validChars.includes(b[0])) return -1;
  // Sort other strings in ascending order
  return a.localeCompare(b);
};

module.exports = { flatten, range, sortAsc, splitBy };
