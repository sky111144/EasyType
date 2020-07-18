const chai = require("chai");
const EasyType = require("../../dist/easytype");

const { expect } = chai;

describe("isString：", function () {
    it("EasyType.isString(null) should be false", function () {
        expect(EasyType.isString(null)).to.equal(false);
    });

    it("EasyType.isString(undefined) should be false", function () {
        expect(EasyType.isString(undefined)).to.equal(false);
    });

    it("EasyType.isString(false) should be false", function () {
        expect(EasyType.isString(false)).to.equal(false);
    });

    it("EasyType.isString(true) should be false", function () {
        expect(EasyType.isString(true)).to.equal(false);
    });

    it("EasyType.isString(0) should be false", function () {
        expect(EasyType.isString(0)).to.equal(false);
    });

    it("EasyType.isString('hello world') should be true", function () {
        expect(EasyType.isString("hello world")).to.equal(true);
    });

});
