import truncate from './truncate';

describe('truncate', () => {
  describe('when provided with a string and no end', () => {
    it('returns truncated string correctly', () => {
      const mockResult = 'hey hey hey hey mister';
      expect(truncate({ text: 'hey hey hey hey mister' })).toEqual(mockResult);
    });
  });

  describe('when provided with a string and an end (positive int)', () => {
    it('returns truncated string correctly', () => {
      const mockResult = 'hey hey hey …';
      expect(truncate({ text: 'hey hey hey hey mister', end: 11 })).toEqual(mockResult);
    });
  });

  describe('when provided with a string and an end (negative int)', () => {
    it('returns truncated string correctly', () => {
      const mockResult = 'hey hey …';
      expect(truncate({ text: 'hey hey hey hey mister', end: -15 })).toEqual(mockResult);
    });
  });
});
