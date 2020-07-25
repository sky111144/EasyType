const chai = require("chai");
const EasyType = require("../../dist/easytype");

const { expect } = chai;

describe("isBigInt：", function () {
    it("EasyType.isBigInt(null) should be false", function () {
        expect(EasyType.isBigInt(null)).to.equal(false);
    });

    it("EasyType.isBigInt(undefined) should be false", function () {
        expect(EasyType.isBigInt(undefined)).to.equal(false);
    });

    it("EasyType.isBigInt(false) should be false", function () {
        expect(EasyType.isBigInt(false)).to.equal(false);
    });

    it("EasyType.isBigInt(true) should be false", function () {
        expect(EasyType.isBigInt(true)).to.equal(false);
    });

    it("EasyType.isBigInt(0) should be false", function () {
        expect(EasyType.isBigInt(0)).to.equal(false);
    });

    it("EasyType.isBigInt(NaN) should be false", function () {
        expect(EasyType.isBigInt(NaN)).to.equal(false);
    });

    it("EasyType.isBigInt(BigInt(123)) should be true", function () {
        expect(EasyType.isBigInt(BigInt(123))).to.equal(true);
    });

});
