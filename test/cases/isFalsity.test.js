const chai = require("chai");
const EasyType = require("../../dist/easytype");

const { expect } = chai;

describe("isFalsity：", function () {
    it("EasyType.isFalsity(null) should be true", function () {
        expect(EasyType.isFalsity(null)).to.equal(true);
    });

    it("EasyType.isFalsity(undefined) should be true", function () {
        expect(EasyType.isFalsity(undefined)).to.equal(true);
    });

    it("EasyType.isFalsity(false) should be true", function () {
        expect(EasyType.isFalsity(false)).to.equal(true);
    });

    it("EasyType.isFalsity(0) should be true", function () {
        expect(EasyType.isFalsity(0)).to.equal(true);
    });

    it("EasyType.isFalsity('') should be true", function () {
        expect(EasyType.isFalsity("")).to.equal(true);
    });

    it("EasyType.isFalsity(NaN) should be true", function () {
        expect(EasyType.isFalsity(NaN)).to.equal(true);
    });

});
