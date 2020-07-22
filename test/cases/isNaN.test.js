
const chai = require("chai");
const EasyType = require("../../dist/easytype");

const { expect } = chai;

describe("isNaN：", function () {
    it("EasyType.isNaN(null) should be false", function () {
        expect(EasyType.isNaN(null)).to.equal(false);
    });

    it("EasyType.isNaN(undefined) should be true", function () {
        expect(EasyType.isNaN(undefined)).to.equal(true);
    });

    it("EasyType.isNaN(false) should be false", function () {
        expect(EasyType.isNaN(false)).to.equal(false);
    });

    it("EasyType.isNaN(true) should be false", function () {
        expect(EasyType.isNaN(true)).to.equal(false);
    });

    it("EasyType.isNaN(0) should be false", function () {
        expect(EasyType.isNaN(0)).to.equal(false);
    });

    it("EasyType.isNaN('') should be false", function () {
        expect(EasyType.isNaN("")).to.equal(false);
    });

    it("EasyType.isNaN(' ') should be false", function () {
        expect(EasyType.isNaN(" ")).to.equal(false);
    });

    it("EasyType.isNaN('hello world') should be true", function () {
        expect(EasyType.isNaN("hello world")).to.equal(true);
    });

    it("EasyType.isNaN(NaN) should be true", function () {
        expect(EasyType.isNaN(NaN)).to.equal(true);
    });

});
