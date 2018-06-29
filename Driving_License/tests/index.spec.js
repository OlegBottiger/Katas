const expect = require('chai').expect;
const driviersLicense = require('../index');

describe('Drivers License', () => {
  describe('["John","James","Smith","01-Jan-2000","M"]', () => {
    it('should return SMITH001010JJ9AA', () => {
      expect(driviersLicense(["John","James","Smith","01-Jan-2000","M"])).to.equal('SMITH001010JJ9AA');
    });
  });

  describe('["Johanna","","Gibbs","13-Dec-1981","F"]', () => {
    it('should return GIBBS862131J99AA', () => {
      expect(driviersLicense(["Johanna","","Gibbs","13-Dec-1981","F"])).to.equal('GIBBS862131J99AA');
    });
  });

  describe('["Andrew","Robert","Lee","02-September-1981","M"]', () => {
    it('should return LEE99809021AR9AA', () => {
      expect(driviersLicense(["Andrew","Robert","Lee","02-September-1981","M"])).to.equal('LEE99809021AR9AA');
    });
  });

  describe('["Oleg","","Lindvin","19-March-1990","M"]', () => {
    it('should return LINDV903190O99AA', () => {
      expect(driviersLicense(["Oleg","","Lindvin","19-March-1990","M"])).to.equal('LINDV903190O99AA');
    });
  });
});