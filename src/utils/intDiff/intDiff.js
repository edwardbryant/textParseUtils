const intDiff = (params) => {
  params ??= {};
  params.value1 ??= 0;
  params.value2 ??= 0;

  if (params.value1 === params.value2) return 0;

  if (params.value1 < params.value2) return params.value2 - params.value1;

  return params.value1 - params.value2;
};

export default intDiff;
