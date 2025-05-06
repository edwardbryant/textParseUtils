import segmentWords from './segmentWords';

describe('segmentWords', () => {
  describe('when provided with a text', () => {
    it('returns an empty array', () => {
      const mockResult = [];
      expect(segmentWords()).toEqual(mockResult);
    });
  });

  describe('when provided with a text', () => {
    it('returns an array of segments (split on whitespaces)', () => {
      const mockText = 'It was the best of times it was the worst of times.';
      const mockResult = ['It', 'was', 'the', 'best', 'of', 'times', 'it', 'was', 'the', 'worst', 'of', 'times.'];
      expect(segmentWords({ text: mockText })).toEqual(mockResult);
    });
  });
});
