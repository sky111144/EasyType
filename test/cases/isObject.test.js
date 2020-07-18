const chai = require("chai");
const EasyType = require("../../dist/easytype");

const { expect } = chai;

describe("isObject：", function () {
    it("EasyType.isObject(null) should be false", function () {
        expect(EasyType.isObject(null)).to.equal(false);
    });

    it("EasyType.isObject(undefined) should be false", function () {
        expect(EasyType.isObject(undefined)).to.equal(false);
    });

    it("EasyType.isObject(false) should be false", function () {
        expect(EasyType.isObject(false)).to.equal(false);
    });

    it("EasyType.isObject(true) should be false", function () {
        expect(EasyType.isObject(true)).to.equal(false);
    });

    it("EasyType.isObject(0) should be false", function () {
        expect(EasyType.isObject(0)).to.equal(false);
    });

    it("EasyType.isObject('hello world') should be false", function () {
        expect(EasyType.isObject("hello world")).to.equal(false);
    });

    it("EasyType.isObject({}) should be true", function () {
        expect(EasyType.isObject({})).to.equal(true);
    });

});
