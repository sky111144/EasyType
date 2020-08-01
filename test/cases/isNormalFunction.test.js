const chai = require("chai");
const EasyType = require("../../dist/easytype");

const { expect } = chai;

describe("isNormalFunction：", function () {
    it("EasyType.isNormalFunction(null) should be false", function () {
        expect(EasyType.isNormalFunction(null)).to.equal(false);
    });

    it("EasyType.isNormalFunction(undefined) should be false", function () {
        expect(EasyType.isNormalFunction(undefined)).to.equal(false);
    });

    it("EasyType.isNormalFunction(false) should be false", function () {
        expect(EasyType.isNormalFunction(false)).to.equal(false);
    });

    it("EasyType.isNormalFunction(true) should be false", function () {
        expect(EasyType.isNormalFunction(true)).to.equal(false);
    });

    it("EasyType.isNormalFunction(0) should be false", function () {
        expect(EasyType.isNormalFunction(0)).to.equal(false);
    });

    it("EasyType.isNormalFunction('hello world') should be false", function () {
        expect(EasyType.isNormalFunction("hello world")).to.equal(false);
    });

    it("EasyType.isNormalFunction(function () {}) should be true", function () {
        expect(EasyType.isNormalFunction(function () {})).to.equal(true);
    });

    it("EasyType.isNormalFunction(() => {}) should be false", function () {
        expect(EasyType.isNormalFunction(() => {})).to.equal(false);
    });
});
