const chai = require("chai");
const EasyType = require("../../dist/easytype");

const { expect } = chai;

describe("isMaxValue：", function () {
    it("EasyType.isMaxValue(null) should be false", function () {
        expect(EasyType.isMaxValue(null)).to.equal(false);
    });

    it("EasyType.isMaxValue(undefined) should be false", function () {
        expect(EasyType.isMaxValue(undefined)).to.equal(false);
    });

    it("EasyType.isMaxValue(0) should be false", function () {
        expect(EasyType.isMaxValue(0)).to.equal(false);
    });

    it("EasyType.isMaxValue(Math.pow(10, 2)) should be false", function () {
        expect(EasyType.isMaxValue(Math.pow(10, 2))).to.equal(false);
    });

    it("EasyType.isMaxValue(Math.pow(10, 10)) should be false", function () {
        expect(EasyType.isMaxValue(Math.pow(10, 10))).to.equal(false);
    });

    it("EasyType.isMaxValue(NaN) should be false", function () {
        expect(EasyType.isMaxValue(NaN)).to.equal(false);
    });

    it("EasyType.isMaxValue(-Math.pow(2, 1025)) should be false", function () {
        expect(EasyType.isMaxValue(-Math.pow(2, 1025))).to.equal(false);
    });

    it("EasyType.isMaxValue(Math.pow(2, 1025)) should be false", function () {
        expect(EasyType.isMaxValue(Math.pow(2, 1025))).to.equal(false);
    });

    it("EasyType.isMaxValue(1.7976931348623157e+308) should be true", function () {
        expect(EasyType.isMaxValue(1.7976931348623157e+308)).to.equal(true);
    });

});
