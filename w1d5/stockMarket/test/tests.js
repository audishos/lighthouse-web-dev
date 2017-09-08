const assert = require("chai").assert;
const stockMarket = require("../stockMarket.js");

describe("maxProfit()", function() {

  it("should return 16 when given the array [45, 24, 35, 31, 40, 38, 11]", function() {
    assert.equal(16, maxProfit([45, 24, 35, 31, 40, 38, 11]))
  });

  it("should not return 10 when given the array [45, 24, 35, 31, 40, 38, 11]", function() {
    assert.notEqual(10, maxProfit([45, 24, 35, 31, 40, 38, 11]))
  });

});