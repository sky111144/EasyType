const chai = require("chai");
const EasyType = require("../../dist/easytype");

const { expect } = chai;

describe("isDate：", function () {
    it("EasyType.isDate(null) should be false", function () {
        expect(EasyType.isDate(null)).to.equal(false);
    });

    it("EasyType.isDate(undefined) should be false", function () {
        expect(EasyType.isDate(undefined)).to.equal(false);
    });

    it("EasyType.isDate(false) should be false", function () {
        expect(EasyType.isDate(false)).to.equal(false);
    });

    it("EasyType.isDate(true) should be false", function () {
        expect(EasyType.isDate(true)).to.equal(false);
    });

    it("EasyType.isDate(0) should be false", function () {
        expect(EasyType.isDate(0)).to.equal(false);
    });

    it("EasyType.isDate('hello world') should be false", function () {
        expect(EasyType.isDate("hello world")).to.equal(false);
    });

    it("EasyType.isDate(new Date()) should be true", function () {
        expect(EasyType.isDate(new Date())).to.equal(true);
    });
});
