const chai = require("chai");
const EasyType = require("../../dist/easytype");

const { expect } = chai;

describe("isUint8Array：", function () {
    it("EasyType.isUint8Array(null) should be false", function () {
        expect(EasyType.isUint8Array(null)).to.equal(false);
    });

    it("EasyType.isUint8Array(undefined) should be false", function () {
        expect(EasyType.isUint8Array(undefined)).to.equal(false);
    });

    it("EasyType.isUint8Array(false) should be false", function () {
        expect(EasyType.isUint8Array(false)).to.equal(false);
    });

    it("EasyType.isUint8Array(true) should be false", function () {
        expect(EasyType.isUint8Array(true)).to.equal(false);
    });

    it("EasyType.isUint8Array(0) should be false", function () {
        expect(EasyType.isUint8Array(0)).to.equal(false);
    });

    it("EasyType.isUint8Array('hello world') should be false", function () {
        expect(EasyType.isUint8Array("hello world")).to.equal(false);
    });

    it("EasyType.isUint8Array(function () {}) should be false", function () {
        expect(EasyType.isUint8Array(function () {})).to.equal(false);
    });

    it("EasyType.isUint8Array(new Int8Array()) should be false", function () {
        expect(EasyType.isUint8Array(new Int8Array())).to.equal(false);
    });

    it("EasyType.isUint8Array(new Uint8Array()) should be true", function () {
        expect(EasyType.isUint8Array(new Uint8Array())).to.equal(true);
    });
});
