const truncate = (params) => {
  params ??= {};
  params.text ??= '';
  params.end ??= params.text.length - 1;

  let truncatedText = '';

  if (params.end < 0) {
    truncatedText += params.text.substring(0, (params.text.length - 1) - ~(params.end));
    return `${truncatedText}\u2009\u2026`;
  }

  if (params.end > 0 && params.end < params.text.length - 1) {
    truncatedText += params.text.substring(0, params.end);
    return `${truncatedText}\u2009\u2026`;
  }

  truncatedText += params.text;
  return truncatedText;
};

export default truncate;
