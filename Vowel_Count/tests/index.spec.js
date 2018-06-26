const expect = require('chai').expect;
const count = require('../index');

describe('Vowel Count', () => {
  describe('jhauduygsad', () => {
    it('should count 5 vowels', () => {
      expect(count('jhauduygsad')).to.equal(5);
    });
  });

  describe('auo', () => {
    it('should count 3 vowels', () => {
      expect(count('auo')).to.equal(3);
    });
  });

  describe('pwdkl', () => {
    it('should count 0 vowels', () => {
      expect(count('pwdkl')).to.equal(0);
    });
  });
});
