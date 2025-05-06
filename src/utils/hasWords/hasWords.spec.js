import hasWords from './hasWords';

describe('hasWords', () => {
  describe('when provided with a text and an array of non-matching words', () => {
    it('returns an object containing a correct word count', () => {
      const mockText = 'SUPREME COURT OF THE UNITED STATES';
      const mockResult = { count: 0, pct: 0 };
      expect(hasWords({ text: mockText, words: ['OFF', 'To'] })).toEqual(mockResult);
    });
  });

  describe('when provided with a text and array of one word', () => {
    it('returns an object containing a correct word count', () => {
      const mockText = 'SUPREME COURT OF THE UNITED STATES';
      const mockResult = { count: 1, pct: 16.67 };
      expect(hasWords({ text: mockText, words: ['OF'] })).toEqual(mockResult);
    });
  });

  describe('when provided with a text and an array of two words', () => {
    it('returns an object containing a correct word count', () => {
      const mockText = 'SUPREME COURT OF THE UNITED STATES';
      const mockResult = { count: 2, pct: 33.33 };
      expect(hasWords({ text: mockText, words: ['OF', 'THE'] })).toEqual(mockResult);
    });
  });

  describe('when provided with a text and an array of words (differ case)', () => {
    it('returns an object containing a correct word count', () => {
      const mockText = 'SUPREME COURT OF THE UNITED STATES';
      const mockResult = { count: 2, pct: 33.33 };
      expect(hasWords({ text: mockText, words: ['of', 'the'] })).toEqual(mockResult);
    });
  });
});
