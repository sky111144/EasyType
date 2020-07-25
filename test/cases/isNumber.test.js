const chai = require("chai");
const EasyType = require("../../dist/easytype");

const { expect } = chai;

describe("isNumber：", function () {
    it("EasyType.isNumber(null) should be false", function () {
        expect(EasyType.isNumber(null)).to.equal(false);
    });

    it("EasyType.isNumber(undefined) should be false", function () {
        expect(EasyType.isNumber(undefined)).to.equal(false);
    });

    it("EasyType.isNumber(false) should be false", function () {
        expect(EasyType.isNumber(false)).to.equal(false);
    });

    it("EasyType.isNumber(true) should be false", function () {
        expect(EasyType.isNumber(true)).to.equal(false);
    });

    it("EasyType.isNumber(0) should be true", function () {
        expect(EasyType.isNumber(0)).to.equal(true);
    });

    it("EasyType.isNumber(NaN) should be true", function () {
        expect(EasyType.isNumber(NaN)).to.equal(true);
    });

    it("EasyType.isNumber('hello world') should be false", function () {
        expect(EasyType.isNumber("hello world")).to.equal(false);
    });

});
