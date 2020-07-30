const chai = require("chai");
const EasyType = require("../../dist/easytype");

const { expect } = chai;

describe("isNegativeInfinity：", function () {
    it("EasyType.isNegativeInfinity(null) should be false", function () {
        expect(EasyType.isNegativeInfinity(null)).to.equal(false);
    });

    it("EasyType.isNegativeInfinity(undefined) should be false", function () {
        expect(EasyType.isNegativeInfinity(undefined)).to.equal(false);
    });

    it("EasyType.isNegativeInfinity(0) should be false", function () {
        expect(EasyType.isNegativeInfinity(0)).to.equal(false);
    });

    it("EasyType.isNegativeInfinity(Math.pow(10, 2)) should be false", function () {
        expect(EasyType.isNegativeInfinity(Math.pow(10, 2))).to.equal(false);
    });

    it("EasyType.isNegativeInfinity(Math.pow(10, 10)) should be false", function () {
        expect(EasyType.isNegativeInfinity(Math.pow(10, 10))).to.equal(false);
    });

    it("EasyType.isNegativeInfinity(NaN) should be false", function () {
        expect(EasyType.isNegativeInfinity(NaN)).to.equal(false);
    });

    it("EasyType.isNegativeInfinity(-Math.pow(2, 1025)) should be true", function () {
        expect(EasyType.isNegativeInfinity(-Math.pow(2, 1025))).to.equal(true);
    });

});
