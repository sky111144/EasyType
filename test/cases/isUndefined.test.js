const chai = require("chai");
const EasyType = require("../../dist/easytype");

const { expect } = chai;

describe("isUndefined：", function () {
    it("EasyType.isUndefined(null) should be false", function () {
        expect(EasyType.isUndefined(null)).to.equal(false);
    });

    it("EasyType.isUndefined(undefined) should be true", function () {
        expect(EasyType.isUndefined(undefined)).to.equal(true);
    });

    it("EasyType.isUndefined(false) should be false", function () {
        expect(EasyType.isUndefined(false)).to.equal(false);
    });

    it("EasyType.isUndefined(true) should be false", function () {
        expect(EasyType.isUndefined(true)).to.equal(false);
    });

    it("EasyType.isUndefined(0) should be false", function () {
        expect(EasyType.isUndefined(0)).to.equal(false);
    });

    it("EasyType.isUndefined('hello world') should be false", function () {
        expect(EasyType.isUndefined("hello world")).to.equal(false);
    });

});
