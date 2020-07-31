const chai = require("chai");
const EasyType = require("../../dist/easytype");

const { expect } = chai;

describe("isEpsilon：", function () {
    it("EasyType.isEpsilon(null) should be false", function () {
        expect(EasyType.isEpsilon(null)).to.equal(false);
    });

    it("EasyType.isEpsilon(undefined) should be false", function () {
        expect(EasyType.isEpsilon(undefined)).to.equal(false);
    });

    it("EasyType.isEpsilon(0) should be false", function () {
        expect(EasyType.isEpsilon(0)).to.equal(false);
    });

    it("EasyType.isEpsilon(Math.pow(10, 2)) should be false", function () {
        expect(EasyType.isEpsilon(Math.pow(10, 2))).to.equal(false);
    });

    it("EasyType.isEpsilon(Math.pow(10, 10)) should be false", function () {
        expect(EasyType.isEpsilon(Math.pow(10, 10))).to.equal(false);
    });

    it("EasyType.isEpsilon(NaN) should be false", function () {
        expect(EasyType.isEpsilon(NaN)).to.equal(false);
    });

    it("EasyType.isEpsilon(-Math.pow(2, 1025)) should be false", function () {
        expect(EasyType.isEpsilon(-Math.pow(2, 1025))).to.equal(false);
    });

    it("EasyType.isEpsilon(Math.pow(2, 1025)) should be false", function () {
        expect(EasyType.isEpsilon(Math.pow(2, 1025))).to.equal(false);
    });

    it("EasyType.isEpsilon(1.7976931348623157e+308) should be false", function () {
        expect(EasyType.isEpsilon(1.7976931348623157e+308)).to.equal(false);
    });

    it("EasyType.isEpsilon(9007199254740991) should be false", function () {
        expect(EasyType.isEpsilon(9007199254740991)).to.equal(false);
    });

    it("EasyType.isEpsilon(Math.pow(2, -52)) should be true", function () {
        expect(EasyType.isEpsilon(Math.pow(2, -52))).to.equal(true);
    });
});
