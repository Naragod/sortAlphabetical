# How to Run

This is a `NodeJs` program. To execute. Please have `NodeJs` installed. This program was currently built with Node Version: 20.

Run: `npm i` to install all packages.

Run `npm run test` to run all the tests.

Run `npm run dev` to execute the program.

# Methodology

### Sentences

I am using the following guide [The Punctuation Guide](https://www.thepunctuationguide.com/terminal-points.html) to decide what constitutes a sentance.

The following regex: `/(?<=[.!?])\s+(?=(?:[^"]*"[^"]*")*[^"]*$)/` splits strings by the following punctuation marks: `.?!`. It ignores punctuation inside double quotes (these denote a conversation and not the end of a sentance) and ensures that the punctuation marks are included in the split off segment.

Here's how this regex pattern works:

- `(?<=[.!?])` is a positive lookbehind assertion that checks if what precedes is one of the punctuation marks '.', '!', or '?'. It captures this punctuation mark.

- `\s+` matches one or more whitespace characters, ensuring there is at least one space after the punctuation mark.

- `(?= ... )` is a positive lookahead assertion that checks if what follows is the pattern inside the parentheses.

- `(?:[^"]*"[^"]*")*` matches any number of pairs of double quotes, ensuring that the punctuation marks are not inside quotes. This part ensures that the punctuation marks are only matched if they have an even number of quotes before them, indicating that they are not inside a quote pair.

- `[^"]*$` matches anything that is not a double quote until the end of the string, ensuring that the punctuation marks are not inside quotes.

### Sorting

I am sorting alphabetically, using Javascript's [localCompare](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare) method which: `returns a number indicating whether a string comes before, or after, or is the same as the given string in sort order`, with one small caveat. I have created a `VALID_CHARS` constant that stores all valid sorting characters: `[A-Z]`, `[a-z]` and `"`. If any of these characters appear as the first character of the string, sort them last in ascii ascending order.
