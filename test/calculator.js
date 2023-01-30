const calculator = require('../app/calculator.js');
var expect  = require('chai').expect;
const assert = require('assert');

describe('Calculator', () => {
  describe('Add', () => {
    it('should add two numbers', () => {
      assert.equal(calculator.add(5, 2), 7);
    });
    // Error case
    it('should throw an error', () => {
        assert.equal(calculator.add(1, 3), 5);
        });
  });
  });
  describe('Multiply', () => {
    it('should multiply two numbers', () => {
      assert.equal(calculator.mul(5, 2), 10);
    });
    // Error case
    it('should throw an error', () => {
        assert.equal(calculator.mul(1, 3), 4);
        });
  });
  describe('Divide', () => {
    it('should divide two numbers', () => {
      assert.equal(calculator.div(5, 2), 2.5);
    });
    // Error case
    it('should throw an error', () => {
        assert.equal(calculator.div(1, 3), 4);
        });
  });
  describe('Subtract', () => {
    it('should subtract two numbers', () => {
      assert.equal(calculator.sub(5, 2), 3);
    });
    // Error case
    it('should throw an error', () => {
        assert.equal(calculator.sub(1, 3), 4);
        });
});