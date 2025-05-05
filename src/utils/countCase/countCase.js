import intPct from '../intPct/intPct';

/**
 * Returns an object that includes character counts and which
 * the upper/lower-case nature of those characters. Note, UC
 * and LC percentages may not equal 100% due to whitespace and
 * non-alpha characters.
 * @function
 * @name countCase
 * @param {string} text - An input string to be parsed.
 */

const countCase = (params) => {
  // set param defaults
  params ??= {};
  params.text ??= '';

  // set result default
  const results = {
    chars: 0,
    uc: 0,
    ucPct: 0,
    lc: 0,
    lcPct: 0
  };

  if (params.text.length < 1) return (results);

  // parse in loop and add to relevant counts
  Array.from(params.text).forEach(char => {
    const ucRegex = /[A-Z]/;
    const lcRegex = /[a-z]/;
    results.chars += 1;
    if (ucRegex.test(char)) results.uc += 1;
    if (lcRegex.test(char)) results.lc += 1;
  });

  // calculate percentages from raw counts
  if (results.uc > 0) results.ucPct = intPct({ value: results.uc, denominator: results.chars });
  if (results.lc > 0) results.lcPct = intPct({ value: results.lc, denominator: results.chars });

  return results;
};

export default countCase;
