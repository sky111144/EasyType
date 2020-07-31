const chai = require("chai");
const EasyType = require("../../dist/easytype");

const { expect } = chai;

describe("isMaxSafeInteger：", function () {
    it("EasyType.isMaxSafeInteger(null) should be false", function () {
        expect(EasyType.isMaxSafeInteger(null)).to.equal(false);
    });

    it("EasyType.isMaxSafeInteger(undefined) should be false", function () {
        expect(EasyType.isMaxSafeInteger(undefined)).to.equal(false);
    });

    it("EasyType.isMaxSafeInteger(0) should be false", function () {
        expect(EasyType.isMaxSafeInteger(0)).to.equal(false);
    });

    it("EasyType.isMaxSafeInteger(Math.pow(10, 2)) should be false", function () {
        expect(EasyType.isMaxSafeInteger(Math.pow(10, 2))).to.equal(false);
    });

    it("EasyType.isMaxSafeInteger(Math.pow(10, 10)) should be false", function () {
        expect(EasyType.isMaxSafeInteger(Math.pow(10, 10))).to.equal(false);
    });

    it("EasyType.isMaxSafeInteger(NaN) should be false", function () {
        expect(EasyType.isMaxSafeInteger(NaN)).to.equal(false);
    });

    it("EasyType.isMaxSafeInteger(-Math.pow(2, 1025)) should be false", function () {
        expect(EasyType.isMaxSafeInteger(-Math.pow(2, 1025))).to.equal(false);
    });

    it("EasyType.isMaxSafeInteger(Math.pow(2, 1025)) should be false", function () {
        expect(EasyType.isMaxSafeInteger(Math.pow(2, 1025))).to.equal(false);
    });

    it("EasyType.isMaxSafeInteger(1.7976931348623157e+308) should be false", function () {
        expect(EasyType.isMaxSafeInteger(1.7976931348623157e+308)).to.equal(false);
    });

    it("EasyType.isMaxSafeInteger(9007199254740991) should be true", function () {
        expect(EasyType.isMaxSafeInteger(9007199254740991)).to.equal(true);
    });

});
