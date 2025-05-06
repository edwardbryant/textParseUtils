import intPct from './intPct';

describe('intPct', () => {
  describe('when provided with no params', () => {
    it('returns 0', () => {
      const mockResult = 0;
      expect(intPct()).toEqual(mockResult);
    });
  });

  describe('when provided with params with positive value but denominator of 0', () => {
    it('returns 0', () => {
      const mockInput = { value: 10, denominator: 0 };
      const mockResult = 0;
      expect(intPct(mockInput)).toEqual(mockResult);
    });
  });

  describe('when provided with params of 10 and 100', () => {
    it('returns 10', () => {
      const mockInput = { value: 10, denominator: 100 };
      const mockResult = 10;
      expect(intPct(mockInput)).toEqual(mockResult);
    });
  });

  describe('when provided with params of 7 and 112', () => {
    it('returns 6.25', () => {
      const mockInput = { value: 7, denominator: 112 };
      const mockResult = 6.25;
      expect(intPct(mockInput)).toEqual(mockResult);
    });
  });
});
