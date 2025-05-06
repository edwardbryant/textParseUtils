import normalizeWhitespace from './normalizeWhitespace';

describe('normalizeWhitespace', () => {
  describe('when provided with no params', () => {
    it('returns a empty string', () => {
      const mockResult = '';
      expect(normalizeWhitespace()).toEqual(mockResult);
    });
  });

  describe('when provided with a text param with empty string', () => {
    it('returns a empty string', () => {
      const mockText = '';
      const mockResult = '';
      expect(normalizeWhitespace({ text: mockText })).toEqual(mockResult);
    });
  });

  describe('when provided with a text param with string with only whitespace', () => {
    it('returns a empty string', () => {
      const mockText = ' ';
      const mockResult = '';
      expect(normalizeWhitespace({ text: mockText })).toEqual(mockResult);
    });
  });

  describe('when provided with a text param with string with only whitespace', () => {
    it('returns a empty string', () => {
      const mockText = ' ';
      const mockResult = '';
      expect(normalizeWhitespace({ text: mockText })).toEqual(mockResult);
    });
  });

  describe('when provided with a text param with string with only whitespace', () => {
    it('returns a empty string', () => {
      const mockText = '         ';
      const mockResult = '';
      expect(normalizeWhitespace({ text: mockText })).toEqual(mockResult);
    });
  });

  describe('when provided with a text', () => {
    it('returns an object containing a word count', () => {
      const mockText = ' SUPREME  COURT OF THE  UNITED   STATES ';
      const mockResult = 'SUPREME COURT OF THE UNITED STATES';
      expect(normalizeWhitespace({ text: mockText })).toEqual(mockResult);
    });
  });
});
