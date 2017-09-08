const assert = require("chai").assert;
const luhnCheck = require("../luhnChecker.js");

describe("luhnChecker()", function() {

  it("should return true when given the number 49927398716", function() {
    assert.isTrue(luhnCheck(49927398716))
  });

  it("should return false when given the number 49927398717", function() {
    assert.isFalse(luhnCheck(49927398717))
  });

  it("should return false when given the number 1234567812345678", function() {
    assert.isFalse(luhnCheck(1234567812345678))
  });

  it("should return true when given the number 1234567812345670", function() {
    assert.isTrue(luhnCheck(1234567812345670))
  });
});

// 49927398716 === pass
// 49927398717 === fail
// 1234567812345678 === fail
// 1234567812345670 === pass