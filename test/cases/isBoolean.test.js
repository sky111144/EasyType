const chai = require("chai");
const EasyType = require("../../dist/easytype");

const { expect } = chai;

describe("isBoolean：", function () {
    it("EasyType.isBoolean(null) should be false", function () {
        expect(EasyType.isBoolean(null)).to.equal(false);
    });

    it("EasyType.isBoolean(undefined) should be false", function () {
        expect(EasyType.isBoolean(undefined)).to.equal(false);
    });

    it("EasyType.isBoolean(false) should be true", function () {
        expect(EasyType.isBoolean(false)).to.equal(true);
    });

    it("EasyType.isBoolean(true) should be true", function () {
        expect(EasyType.isBoolean(true)).to.equal(true);
    });

    it("EasyType.isBoolean(0) should be false", function () {
        expect(EasyType.isBoolean(0)).to.equal(false);
    });

    it("EasyType.isBoolean('hello world') should be false", function () {
        expect(EasyType.isBoolean("hello world")).to.equal(false);
    });

});
