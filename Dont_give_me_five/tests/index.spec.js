const expect = require('chai').expect;
const count = require('../index');

describe('Dont give me five', () => {
  describe('1, 9', () => {
    it('should return 8 numbers', () => {
      expect(count(1,9)).to.equal(8);
    })
  });

  describe('4, 17', () => {
    it('should return 12 numbers', () => {
      expect(count(4,17)).to.equal(12);
    })
  });

  describe('36, 99', () => {
    it('should return 49 numbers', () => {
      expect(count(36, 99)).to.equal(49);
    })
  });
});