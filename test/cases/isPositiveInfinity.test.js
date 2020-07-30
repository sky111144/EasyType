const chai = require("chai");
const EasyType = require("../../dist/easytype");

const { expect } = chai;

describe("isPositiveInfinity：", function () {
    it("EasyType.isPositiveInfinity(null) should be false", function () {
        expect(EasyType.isPositiveInfinity(null)).to.equal(false);
    });

    it("EasyType.isPositiveInfinity(undefined) should be false", function () {
        expect(EasyType.isPositiveInfinity(undefined)).to.equal(false);
    });

    it("EasyType.isPositiveInfinity(0) should be false", function () {
        expect(EasyType.isPositiveInfinity(0)).to.equal(false);
    });

    it("EasyType.isPositiveInfinity(Math.pow(10, 2)) should be false", function () {
        expect(EasyType.isPositiveInfinity(Math.pow(10, 2))).to.equal(false);
    });

    it("EasyType.isPositiveInfinity(Math.pow(10, 10)) should be false", function () {
        expect(EasyType.isPositiveInfinity(Math.pow(10, 10))).to.equal(false);
    });

    it("EasyType.isPositiveInfinity(NaN) should be false", function () {
        expect(EasyType.isPositiveInfinity(NaN)).to.equal(false);
    });

    it("EasyType.isPositiveInfinity(Math.pow(2, 1025)) should be true", function () {
        expect(EasyType.isPositiveInfinity(Math.pow(2, 1025))).to.equal(true);
    });

});
