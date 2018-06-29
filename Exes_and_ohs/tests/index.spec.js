const expect = require('chai').expect;
const count = require('../index');

describe('Exes and Ohs', () => {
  describe('ooxx', () => {
    it('should return true', () => {
      expect(count('ooxx')).to.eq(true);
    })
  });

  describe('oxo', () => {
    it('should return false', () => {
      expect(count('oxo')).to.eq(false);
    })
  });

  describe('OoXx', () => {
    it('should return true', () => {
      expect(count('OoXx')).to.eq(true);
    })
  });

  describe('xxxm', () => {
    it('should return false', () => {
      expect(count('xxxm')).to.eq(false);
    })
  });

  describe('ooom', () => {
    it('should return false', () => {
      expect(count('ooom')).to.eq(false);
    })
  });
});