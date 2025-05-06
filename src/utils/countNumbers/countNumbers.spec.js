import countNumbers from './countNumbers';

describe('countNumbers', () => {
  describe('when provided with no params', () => {
    it('returns object indicating 0 chars and 0 numbers', () => {
      const mockResult = { chars: 0, numbers: 0, pct: 0 };
      expect(countNumbers()).toEqual(mockResult);
    });
  });

  describe('when provided with params with empty string for text', () => {
    it('returns object indicating 0 chars and 0 numbers', () => {
      const mockText = '';
      const mockResult = { chars: 0, numbers: 0, pct: 0 };
      expect(countNumbers({ text: mockText })).toEqual(mockResult);
    });
  });

  describe('when provided with a mixed text and numbers string', () => {
    it('returns object indicating correct chars, numbers, and pct', () => {
      const mockText = 'Supreme District of the 78699TH State';
      const mockResult = { chars: 37, numbers: 5, pct: 13.51 };
      expect(countNumbers({ text: mockText })).toEqual(mockResult);
    });
  });

  describe('when provided with a text of mostly numbers', () => {
    it('returns object indicating correct chars, numbers, and pct', () => {
      const mockText = '234 5666.1 88 000000-99 345';
      const mockResult = { chars: 27, numbers: 21, pct: 77.78 };
      expect(countNumbers({ text: mockText })).toEqual(mockResult);
    });
  });
});
