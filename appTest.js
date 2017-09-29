/* eslint-env mocha */
import chai from 'chai';
import isPrime from './app';

const assert = chai.assert;

describe('isPrime', () => {
  describe('check if input is prime', () => {
    it('should return Not Prime', () => {
      assert.equal(isPrime(10), 'Not Prime');
    });
    it('should return Prime', () => {
      assert.equal(isPrime(2), 'Prime');
    });
    it('should return Not Prime', () => {
      assert.equal(isPrime(1), 'Not Prime');
    });
    it('should return Not Prime', () => {
      assert.equal(isPrime(0), 'Not Prime');
    });
    it('should only allow numbers', () => {
      assert.equal(isPrime('three'), 'Only Numbers are allowed');
    });
    it('should return Prime', () => {
      assert.equal(isPrime(), 'Enter a valid input');
    });
    it('should not allow numbers greater than 100', () => {
      assert.equal(isPrime(101), 'Only numbers between 1 and 100 allowed');
    });
    it('should not allow numbers greater than 100', () => {
      assert.equal(isPrime(89.768), 'Only Whole numbers are allowed');
    });
  });
});

