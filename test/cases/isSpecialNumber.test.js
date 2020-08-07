const chai = require("chai");
const EasyType = require("../../dist/easytype");

const { expect } = chai;

describe("isSpecialNumber：", function () {
    it("EasyType.isSpecialNumber(null) should be false", function () {
        expect(EasyType.isSpecialNumber(null)).to.equal(false);
    });

    it("EasyType.isSpecialNumber(undefined) should be false", function () {
        expect(EasyType.isSpecialNumber(undefined)).to.equal(false);
    });

    it("EasyType.isSpecialNumber(false) should be false", function () {
        expect(EasyType.isSpecialNumber(false)).to.equal(false);
    });

    it("EasyType.isSpecialNumber(true) should be false", function () {
        expect(EasyType.isSpecialNumber(true)).to.equal(false);
    });

    it("EasyType.isSpecialNumber('hello world') should be false", function () {
        expect(EasyType.isSpecialNumber("hello world")).to.equal(false);
    });

    it("EasyType.isSpecialNumber(-10010) should be false", function () {
        expect(EasyType.isSpecialNumber(-10010)).to.equal(false);
    });

    it("EasyType.isSpecialNumber(0) should be false", function () {
        expect(EasyType.isSpecialNumber(0)).to.equal(false);
    });

    it("EasyType.isSpecialNumber(12306) should be false", function () {
        expect(EasyType.isSpecialNumber(12306)).to.equal(false);
    });

    it("EasyType.isSpecialNumber(0.99999999) should be false", function () {
        expect(EasyType.isSpecialNumber(0.99999999)).to.equal(false);
    });

    it("EasyType.isSpecialNumber(NaN) should be true", function () {
        expect(EasyType.isSpecialNumber(NaN)).to.equal(true);
    });

    it("EasyType.isSpecialNumber(Infinity) should be true", function () {
        expect(EasyType.isSpecialNumber(Infinity)).to.equal(true);
    });

    it("EasyType.isSpecialNumber(-Infinity) should be true", function () {
        expect(EasyType.isSpecialNumber(-Infinity)).to.equal(true);
    });

    it("EasyType.isSpecialNumber(1.7976931348623157e+308) should be true", function () {
        expect(EasyType.isSpecialNumber(1.7976931348623157e+308)).to.equal(true);
    });

    it("EasyType.isSpecialNumber(9007199254740991) should be true", function () {
        expect(EasyType.isSpecialNumber(9007199254740991)).to.equal(true);
    });

    it("EasyType.isSpecialNumber(Math.pow(2, -52)) should be true", function () {
        expect(EasyType.isSpecialNumber(Math.pow(2, -52))).to.equal(true);
    });

});
