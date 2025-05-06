import normalizeWhitespace from '../normalizeWhitespace/normalizeWhitespace';

/**
 * Takes a string and returns a count of the words it has
 * @function
 * @name countWords
 * @param {string} text - An input string to be parsed.
 * @param {string} delimiter - A string to be used as the
 * delimiter when parsing (whitespace is default delimiter).
 */

const countWords = (params) => {
  // set param defaults
  params ??= {};
  params.text ??= '';
  params.delimiter ??= [' '];

  // set result default
  const results = { words: 0 };

  if (params.text.trim().length < 1) return (results);

  const wordArray = normalizeWhitespace({ text: params.text }).split(params.delimiter);

  results.words = wordArray.length;

  return results;
};

export default countWords;
