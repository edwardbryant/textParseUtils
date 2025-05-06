/**
 * Takes a string and returns a new string with all
 * various versions of whitespace to be transformed
 * into standard whitespace (i.e., ' ').
 * @function
 * @name normalizeWhitespace
 * @param {string} text - An input string to be parsed.
 */

const normalizeWhitespace = (params) => {
  // set param defaults
  params ??= {};
  params.text ??= '';

  if (params.text.length < 1) return params.text;

  // set result default
  let normalizedText = '';

  // Convert &nbsp; to standard whitespace
  normalizedText = params.text.replaceAll('&nbsp;', ' ');

  // Reduce multiple spaces with a single space
  normalizedText = params.text.replace(/\s+/g, ' ');

  // Remove spaces at start and end of string
  normalizedText = normalizedText.trim();

  return normalizedText;
};

export default normalizeWhitespace;
