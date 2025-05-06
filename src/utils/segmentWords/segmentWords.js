import normalizeWhitespace from '../normalizeWhitespace/normalizeWhitespace';

const segmentWords = (params) => {
  params ??= {};
  params.text ??= '';
  params.delimiter ??= ' ';

  let wordsArray = [];

  if (params.text < 1) return wordsArray;

  wordsArray = normalizeWhitespace({ text: params.text }).split(params.delimiter);

  return wordsArray;
};

export default segmentWords;
