import countCase from './countCase';

describe('countCase', () => {
  describe('when provided with no params', () => {
    it('returns object indicating 0 chars and 0 numbers', () => {
      const mockResult = { chars: 0, uc: 0, ucPct: 0, lc: 0, lcPct: 0 };
      expect(countCase()).toEqual(mockResult);
    });
  });

  describe('when provided with params with empty string for text', () => {
    it('returns object indicating 0 chars and 0 numbers', () => {
      const mockText = '';
      const mockResult = { chars: 0, uc: 0, ucPct: 0, lc: 0, lcPct: 0 };
      expect(countCase({ text: mockText })).toEqual(mockResult);
    });
  });

  describe('when provided with a UC string', () => {
    it('returns object containing total characters, uppercase count, and lowercase count', () => {
      const mockText = 'SUPREME COURT OF THE UNITED STATES';
      const mockResult = { chars: 34, uc: 29, ucPct: 85.29, lc: 0, lcPct: 0 };
      expect(countCase({ text: mockText })).toEqual(mockResult);
    });
  });

  describe('when provided with a LC string', () => {
    it('returns object containing total characters, uppercase count, and lowercase count', () => {
      const mockText = 'supreme court of the united states';
      const mockResult = { chars: 34, uc: 0, ucPct: 0, lc: 29, lcPct: 85.29 };
      expect(countCase({ text: mockText })).toEqual(mockResult);
    });
  });

  describe('when provided with a string with no uc or lc characters', () => {
    it('returns object containing total characters, uppercase count, and lowercase count', () => {
      const mockText = '!!! #@#@# *-$*$-* (&)(^!^)(:;)(:;)';
      const mockResult = { chars: 34, uc: 0, ucPct: 0, lc: 0, lcPct: 0 };
      expect(countCase({ text: mockText })).toEqual(mockResult);
    });
  });

  describe('when provided with a string with mixed characters', () => {
    it('returns object containing total characters, uppercase count, and lowercase count', () => {
      const mockText = 'The Supreme Court of the U.S.!!!';
      const mockResult = { chars: 32, uc: 5, ucPct: 15.63, lc: 17, lcPct: 53.13 };
      expect(countCase({ text: mockText })).toEqual(mockResult);
    });
  });
});
