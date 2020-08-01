const chai = require("chai");
const EasyType = require("../../dist/easytype");

const { expect } = chai;

describe("isInfinity：", function () {
    it("EasyType.isInfinity(null) should be false", function () {
        expect(EasyType.isInfinity(null)).to.equal(false);
    });

    it("EasyType.isInfinity(undefined) should be false", function () {
        expect(EasyType.isInfinity(undefined)).to.equal(false);
    });

    it("EasyType.isInfinity(0) should be false", function () {
        expect(EasyType.isInfinity(0)).to.equal(false);
    });

    it("EasyType.isInfinity(Math.pow(10, 2)) should be false", function () {
        expect(EasyType.isInfinity(Math.pow(10, 2))).to.equal(false);
    });

    it("EasyType.isInfinity(Math.pow(10, 10)) should be false", function () {
        expect(EasyType.isInfinity(Math.pow(10, 10))).to.equal(false);
    });

    it("EasyType.isInfinity(NaN) should be false", function () {
        expect(EasyType.isInfinity(NaN)).to.equal(false);
    });

    it("EasyType.isInfinity(-Math.pow(2, 1025)) should be true", function () {
        expect(EasyType.isInfinity(-Math.pow(2, 1025))).to.equal(true);
    });

    it("EasyType.isInfinity(-Infinity) should be true", function () {
        expect(EasyType.isInfinity(-Infinity)).to.equal(true);
    });

    it("EasyType.isInfinity(Math.pow(2, 1025)) should be true", function () {
        expect(EasyType.isInfinity(Math.pow(2, 1025))).to.equal(true);
    });

    it("EasyType.isInfinity(Infinity) should be true", function () {
        expect(EasyType.isInfinity(Infinity)).to.equal(true);
    });

});
