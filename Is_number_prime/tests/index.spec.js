const expect = require('chai').expect;
const isPrime = require('../index');

describe('Is this number a prime', () => {
  describe('0', () => {
    it('should return false, not a prime', () => {
      expect(isPrime(0)).to.eq(false);
    })
  });

  describe('1', () => {
    it('should return false, not a prime', () => {
      expect(isPrime(1)).to.eq(false);
    })
  });

  describe('2', () => {
    it('should return true, is a prime', () => {
      expect(isPrime(2)).to.eq(true);
    })
  });

  describe('3', () => {
    it('should return true, is a prime', () => {
      expect(isPrime(3)).to.eq(true);
    })
  });

  describe('9', () => {
    it('should return false, is not a prime', () => {
      expect(isPrime(9)).to.eq(false);
    })
  });
});