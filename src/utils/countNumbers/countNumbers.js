import intPct from '../intPct/intPct';

/**
 * Returns an object that includes character count and how many
 * characters in the submitted string are numerals.
 * @function
 * @name countNumbers
 * @param {string} text - An input string to be parsed.
 */

const countNumbers = (params) => {
  // set param defaults
  params ??= {};
  params.text ??= '';

  // set result default
  const results = {
    chars: 0,
    numbers: 0,
    pct: 0
  };

  if (params.text.length < 1) return (results);

  // parse in loop and collect raw counts
  Array.from(params.text).forEach(char => {
    const numRegex = /[0-9]/;
    results.chars += 1;
    if (numRegex.test(char)) results.numbers += 1;
  });

  // calculate percentages from raw counts
  if (results.numbers > 0) results.pct = intPct({ value: results.numbers, denominator: results.chars });

  return results;
};

export default countNumbers;
