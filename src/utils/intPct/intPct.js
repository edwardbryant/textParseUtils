const intPct = (params) => {
  params ??= {};
  params.value ??= 0;
  params.denominator ??= 0;

  if (params.denominator === 0) return 0;

  const rawPct = (params.value / params.denominator) * 100;

  return Math.round((rawPct * 100) * (1 + Number.EPSILON)) / 100;
};

export default intPct;
