const chai = require("chai");
const EasyType = require("../../dist/easytype");

const { expect } = chai;

describe("isFunction：", function () {
    it("EasyType.isFunction(null) should be false", function () {
        expect(EasyType.isFunction(null)).to.equal(false);
    });

    it("EasyType.isFunction(undefined) should be false", function () {
        expect(EasyType.isFunction(undefined)).to.equal(false);
    });

    it("EasyType.isFunction(false) should be false", function () {
        expect(EasyType.isFunction(false)).to.equal(false);
    });

    it("EasyType.isFunction(true) should be false", function () {
        expect(EasyType.isFunction(true)).to.equal(false);
    });

    it("EasyType.isFunction(0) should be false", function () {
        expect(EasyType.isFunction(0)).to.equal(false);
    });

    it("EasyType.isFunction('hello world') should be false", function () {
        expect(EasyType.isFunction("hello world")).to.equal(false);
    });

    it("EasyType.isFunction(function () {}) should be true", function () {
        expect(EasyType.isFunction(function () {})).to.equal(true);
    });
});
