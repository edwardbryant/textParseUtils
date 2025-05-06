/**
 * Generates a grammatical string for a list of items from an array.
 * @function
 * @name enumerate
 * @param {string} array - An array of strings.
 * @param {string} compoundTerm - The compound term used for the
 * list (e.g., "and", "or").
 * @param {boolean} oxfordComma - whether to use an Oxford comma
 * (i.e., the comma before the last item in the list)
 */

const enumerate = (params) => {
  // set param defaults
  params ??= {};
  params.array ??= [];
  params.compoundTerm ??= 'and';
  params.oxfordComma ??= true;

  // check if targetArray is an actual array
  if (params.array.length < 1) return '';
  if (params.array.length === 1) return `${params.array[0]}`;
  if (params.array.length === 2) return params.array.join(` ${params.compoundTerm} `);

  // condition result based on oxfordComma param
  let lastItemConnector = `, ${params.compoundTerm} `;
  if (!params.oxfordComma) lastItemConnector = ` ${params.compoundTerm} `;

  // return array as a single string
  return [
    params.array.slice(0, -1).join(', '),
    params.array.slice(-1)[0]
  ].join(params.array.length < 2 ? '' : lastItemConnector);
};

export default enumerate;
