const expect = require('chai').expect;
const sum = require('../index');

describe('Sum of two lowest integres in array', () => {
  describe('[1, 2, 3, 4, 5]', () => {
    it('should return 3', () => {
      expect(sum([1,2,3,4,5])).to.equal(3);
    });
  });

  describe('[33, 65, 93, 50, 1, 68]', () => {
    it('should return 34', () => {
      expect(sum([33, 65, 93, 50, 1, 68])).to.equal(34);
    });
  });

  describe('[76, 543, 1, 3, 653]', () => {
    it('should return 4', () => {
      expect(sum([76, 543, 1, 3, 653])).to.equal(4);
    });
  });

  describe('[1, 2, 1, 5, 76]', () => {
    it('should return 2', () => {
      expect(sum([1, 2, 1, 5, 76])).to.equal(2);
    });
  });
});