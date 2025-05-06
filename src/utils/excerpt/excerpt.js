const excerpt = (params) => {
  params ??= {};
  params.text ??= '';
  params.start ??= 0;
  params.end ??= params.text.length;

  let excerptedText = '';

  if (params.start !== 0) {
    excerptedText += '\u201C\u2026\u2009';
  } else {
    excerptedText += '\u201C';
  }

  if (params.end < 0) {
    excerptedText += params.text.substring(params.start, (params.text.length - 1) - ~(params.end));
  } else {
    excerptedText += params.text.substring(params.start, params.end);
  }

  if (params.end < params.text.length) {
    excerptedText += '\u2009\u2026\u201D';
  } else {
    excerptedText += '\u201D';
  }

  return excerptedText;
};

export default excerpt;
