import intDiff from './intDiff';

describe('intDiff', () => {
  describe('when provided with no params', () => {
    it('returns 0', () => {
      const mockResult = 0;
      expect(intDiff()).toEqual(mockResult);
    });
  });

  describe('when provided with params of same value (0, 0)', () => {
    it('returns 0', () => {
      const mockInput = { value1: 0, value2: 0 };
      const mockResult = 0;
      expect(intDiff(mockInput)).toEqual(mockResult);
    });
  });

  describe('when provided with params of same value (55, 55)', () => {
    it('returns 0', () => {
      const mockInput = { value1: 55, value2: 55 };
      const mockResult = 0;
      expect(intDiff(mockInput)).toEqual(mockResult);
    });
  });

  describe('when provided with params of same value (-23, -23)', () => {
    it('returns 0', () => {
      const mockInput = { value1: -23, value2: -23 };
      const mockResult = 0;
      expect(intDiff(mockInput)).toEqual(mockResult);
    });
  });

  describe('when provided with params where value1 is larger (1, 0)', () => {
    it('returns 1', () => {
      const mockInput = { value1: 1, value2: 0 };
      const mockResult = 1;
      expect(intDiff(mockInput)).toEqual(mockResult);
    });
  });

  describe('when provided with params where value1 is larger (100, 76)', () => {
    it('returns 24', () => {
      const mockInput = { value1: 100, value2: 76 };
      const mockResult = 24;
      expect(intDiff(mockInput)).toEqual(mockResult);
    });
  });

  describe('when provided with params where value1 is larger (60, -250)', () => {
    it('returns 310', () => {
      const mockInput = { value1: 60, value2: -250 };
      const mockResult = 310;
      expect(intDiff(mockInput)).toEqual(mockResult);
    });
  });

  describe('when provided with params where value2 is larger (0, 1)', () => {
    it('returns 1', () => {
      const mockInput = { value1: 0, value2: 1 };
      const mockResult = 1;
      expect(intDiff(mockInput)).toEqual(mockResult);
    });
  });

  describe('when provided with params where value2 is larger (76, 100)', () => {
    it('returns 24', () => {
      const mockInput = { value1: 76, value2: 100 };
      const mockResult = 24;
      expect(intDiff(mockInput)).toEqual(mockResult);
    });
  });

  describe('when provided with params where value2 is larger (-250, 60)', () => {
    it('returns 310', () => {
      const mockInput = { value1: -250, value2: 60 };
      const mockResult = 310;
      expect(intDiff(mockInput)).toEqual(mockResult);
    });
  });
});
