const chai = require("chai");
const EasyType = require("../../dist/easytype");

const { expect } = chai;

describe("isNull：", function () {
    it("EasyType.isNull(null) should be true", function () {
        expect(EasyType.isNull(null)).to.equal(true);
    });

    it("EasyType.isNull(undefined) should be false", function () {
        expect(EasyType.isNull(undefined)).to.equal(false);
    });

    it("EasyType.isNull(false) should be false", function () {
        expect(EasyType.isNull(false)).to.equal(false);
    });

    it("EasyType.isNull(true) should be false", function () {
        expect(EasyType.isNull(true)).to.equal(false);
    });

    it("EasyType.isNull(0) should be false", function () {
        expect(EasyType.isNull(0)).to.equal(false);
    });

    it("EasyType.isNull('hello world') should be false", function () {
        expect(EasyType.isNull("hello world")).to.equal(false);
    });

});
