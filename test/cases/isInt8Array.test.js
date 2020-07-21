const chai = require("chai");
const EasyType = require("../../dist/easytype");

const { expect } = chai;

describe("isInt8Array：", function () {
    it("EasyType.isInt8Array(null) should be false", function () {
        expect(EasyType.isInt8Array(null)).to.equal(false);
    });

    it("EasyType.isInt8Array(undefined) should be false", function () {
        expect(EasyType.isInt8Array(undefined)).to.equal(false);
    });

    it("EasyType.isInt8Array(false) should be false", function () {
        expect(EasyType.isInt8Array(false)).to.equal(false);
    });

    it("EasyType.isInt8Array(true) should be false", function () {
        expect(EasyType.isInt8Array(true)).to.equal(false);
    });

    it("EasyType.isInt8Array(0) should be false", function () {
        expect(EasyType.isInt8Array(0)).to.equal(false);
    });

    it("EasyType.isInt8Array('hello world') should be false", function () {
        expect(EasyType.isInt8Array("hello world")).to.equal(false);
    });

    it("EasyType.isInt8Array(function () {}) should be false", function () {
        expect(EasyType.isInt8Array(function () {})).to.equal(false);
    });

    it("EasyType.isInt8Array(new Int8Array()) should be true", function () {
        expect(EasyType.isInt8Array(new Int8Array())).to.equal(true);
    });
});
