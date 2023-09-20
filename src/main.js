const { getFileLines, arrayToFile } = require("./fileParser");

const main = () => {
  const baseDir = __dirname.split("/").slice(0, -1).join("/")
  const sortedLines = getFileLines(`${baseDir}/story.txt`);
  // mean to facilitate the view result. Easier to view the result on a file than on the console.
  arrayToFile("sorted_file_lines.txt", sortedLines);
};

main();
