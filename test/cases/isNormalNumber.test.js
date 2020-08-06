const chai = require("chai");
const EasyType = require("../../dist/easytype");

const { expect } = chai;

describe("isNormalNumber：", function () {
    it("EasyType.isNormalNumber(null) should be false", function () {
        expect(EasyType.isNormalNumber(null)).to.equal(false);
    });

    it("EasyType.isNormalNumber(undefined) should be false", function () {
        expect(EasyType.isNormalNumber(undefined)).to.equal(false);
    });

    it("EasyType.isNormalNumber(false) should be false", function () {
        expect(EasyType.isNormalNumber(false)).to.equal(false);
    });

    it("EasyType.isNormalNumber(true) should be false", function () {
        expect(EasyType.isNormalNumber(true)).to.equal(false);
    });

    it("EasyType.isNormalNumber('hello world') should be false", function () {
        expect(EasyType.isNormalNumber("hello world")).to.equal(false);
    });

    it("EasyType.isNormalNumber(NaN) should be false", function () {
        expect(EasyType.isNormalNumber(NaN)).to.equal(false);
    });

    it("EasyType.isNormalNumber(Infinity) should be false", function () {
        expect(EasyType.isNormalNumber(Infinity)).to.equal(false);
    });

    it("EasyType.isNormalNumber(-Infinity) should be false", function () {
        expect(EasyType.isNormalNumber(-Infinity)).to.equal(false);
    });

    it("EasyType.isNormalNumber(1.7976931348623157e+308) should be false", function () {
        expect(EasyType.isNormalNumber(1.7976931348623157e+308)).to.equal(false);
    });

    it("EasyType.isNormalNumber(9007199254740991) should be false", function () {
        expect(EasyType.isNormalNumber(9007199254740991)).to.equal(false);
    });

    it("EasyType.isNormalNumber(Math.pow(2, -52)) should be false", function () {
        expect(EasyType.isNormalNumber(Math.pow(2, -52))).to.equal(false);
    });

    it("EasyType.isNormalNumber(-10010) should be true", function () {
        expect(EasyType.isNormalNumber(-10010)).to.equal(true);
    });

    it("EasyType.isNormalNumber(0) should be true", function () {
        expect(EasyType.isNormalNumber(0)).to.equal(true);
    });

    it("EasyType.isNormalNumber(12306) should be true", function () {
        expect(EasyType.isNormalNumber(12306)).to.equal(true);
    });

    it("EasyType.isNormalNumber(0.99999999) should be true", function () {
        expect(EasyType.isNormalNumber(0.99999999)).to.equal(true);
    });

});
