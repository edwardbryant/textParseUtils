import normalizeWhitespace from '../normalizeWhitespace/normalizeWhitespace';
import intPct from '../intPct/intPct';

const hasWords = (params) => {
  params ??= {};
  params.text ??= '';
  params.words ??= [];

  const result = { count: 0, pct: 0 };

  if (params.text.length < 1) return (result);
  if (params.words.length < 1) return (result);

  const normalizedText = normalizeWhitespace({ text: params.text });
  const denominator = normalizedText.split(' ').length;

  let runningCount = 0;

  params.words.forEach((word) => {
    const regexObj = new RegExp(word, 'i');
    runningCount += (normalizedText.match(regexObj) || []).length;
  });

  result.count = runningCount;
  result.pct = intPct({ value: runningCount, denominator });

  return result;
};

export default hasWords;
