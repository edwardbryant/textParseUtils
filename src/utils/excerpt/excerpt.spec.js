import excerpt from './excerpt';

describe('excerpt', () => {
  describe('when provided with positive numbers for a start and end', () => {
    it('returns correct excerpted string', () => {
      const mockResult = '“… two, three, four …”';
      expect(excerpt({ text: 'one, two, three, four, five', start: 5, end: 21 })).toEqual(mockResult);
    });
  });

  describe('when provided with positive number for end only', () => {
    it('returns correct excerpted string', () => {
      const mockResult = '“one, two, three, four …”';
      expect(excerpt({ text: 'one, two, three, four, five', end: 21 })).toEqual(mockResult);
    });
  });

  describe('when provided with positive number for start only', () => {
    it('returns correct excerpted string', () => {
      const mockResult = '“… two, three, four, five”';
      expect(excerpt({ text: 'one, two, three, four, five', start: 5 })).toEqual(mockResult);
    });
  });

  describe('when provided with positive number for a start and negative number for end', () => {
    it('returns correct excerpted string', () => {
      const mockResult = '“… two, three, four …”';
      expect(excerpt({ text: 'one, two, three, four, five', start: 5, end: -6 })).toEqual(mockResult);
    });
  });
});
