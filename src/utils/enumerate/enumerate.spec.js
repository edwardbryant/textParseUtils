import enumerate from './enumerate';

describe('enumerate', () => {
  describe('when provided with no params', () => {
    it('returns an empty string', () => {
      const mockResult = '';
      expect(enumerate()).toEqual(mockResult);
    });
  });

  describe('when provided with empty params object', () => {
    it('returns an empty string', () => {
      const mockResult = '';
      expect(enumerate({})).toEqual(mockResult);
    });
  });

  describe('when provided with array of zero items', () => {
    it('returns an empty string', () => {
      const array = [];
      const mockResult = '';
      expect(enumerate({ array })).toEqual(mockResult);
    });
  });

  describe('when provided with array of one item', () => {
    it('returns a string containing a single item', () => {
      const array = ['fish'];
      const mockResult = 'fish';
      expect(enumerate({ array })).toEqual(mockResult);
    });
  });

  describe('when provided with array of two items', () => {
    it('returns a single string containing two items joined by compound term', () => {
      const array = ['bric', 'brac'];
      const mockResult = 'bric and brac';
      expect(enumerate({ array })).toEqual(mockResult);
    });
  });

  describe('when provided with array of three items', () => {
    it('returns a single string containing an comma-separarted inline list', () => {
      const array = ['fish', 'kittens', 'snakes'];
      const mockResult = 'fish, kittens, and snakes';
      expect(enumerate({ array })).toEqual(mockResult);
    });
  });

  describe('when provided with array of three items, and a compoundTerm', () => {
    it('returns a single string containing an comma-separarted inline list with term', () => {
      const array = ['fish', 'kittens', 'snakes'];
      const compoundTerm = 'or';
      const mockResult = 'fish, kittens, or snakes';
      expect(enumerate({ array, compoundTerm })).toEqual(mockResult);
    });
  });

  describe('when provided with array of multiple items, and oxfordComma to false', () => {
    it('returns a single string containing an comma-separarted list (absent last comma)', () => {
      const array = ['fish', 'kittens', 'snakes'];
      const oxfordComma = false;
      const mockResult = 'fish, kittens and snakes';
      expect(enumerate({ array, oxfordComma })).toEqual(mockResult);
    });
  });
});
