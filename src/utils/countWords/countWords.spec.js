import countWords from './countWords';

describe('countWords', () => {
  describe('when provided with no params', () => {
    it('returns an object containing a word count of 0', () => {
      expect(countWords()).toEqual({ words: 0 });
    });
  });

  describe('when provided with text params of empty string', () => {
    it('returns an object containing a word count of 0', () => {
      const mockText = '';
      expect(countWords({ text: mockText })).toEqual({ words: 0 });
    });
  });

  describe('when provided with text params of empty string', () => {
    it('returns an object containing a word count of 0', () => {
      const mockText = '           ';
      expect(countWords({ text: mockText })).toEqual({ words: 0 });
    });
  });

  describe('when provided with a text', () => {
    it('returns an object containing a word count', () => {
      const mockText = 'SUPREME COURT OF THE UNITED STATES';
      expect(countWords({ text: mockText })).toEqual({ words: 6 });
    });
  });
});
