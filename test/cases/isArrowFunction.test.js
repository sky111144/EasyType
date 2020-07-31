const chai = require("chai");
const EasyType = require("../../dist/easytype");

const { expect } = chai;

describe("isArrowFunction：", function () {
    it("EasyType.isArrowFunction(null) should be false", function () {
        expect(EasyType.isArrowFunction(null)).to.equal(false);
    });

    it("EasyType.isArrowFunction(undefined) should be false", function () {
        expect(EasyType.isArrowFunction(undefined)).to.equal(false);
    });

    it("EasyType.isArrowFunction(false) should be false", function () {
        expect(EasyType.isArrowFunction(false)).to.equal(false);
    });

    it("EasyType.isArrowFunction(true) should be false", function () {
        expect(EasyType.isArrowFunction(true)).to.equal(false);
    });

    it("EasyType.isArrowFunction(0) should be false", function () {
        expect(EasyType.isArrowFunction(0)).to.equal(false);
    });

    it("EasyType.isArrowFunction('hello world') should be false", function () {
        expect(EasyType.isArrowFunction("hello world")).to.equal(false);
    });

    it("EasyType.isArrowFunction(function () {}) should be false", function () {
        expect(EasyType.isArrowFunction(function () {})).to.equal(false);
    });

    it("EasyType.isArrowFunction(() => {}) should be true", function () {
        expect(EasyType.isArrowFunction(() => {})).to.equal(true);
    });
});
