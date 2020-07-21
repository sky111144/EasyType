const chai = require("chai");
const EasyType = require("../../dist/easytype");

const { expect } = chai;

describe("isUint16Array：", function () {
    it("EasyType.isUint16Array(null) should be false", function () {
        expect(EasyType.isUint16Array(null)).to.equal(false);
    });

    it("EasyType.isUint16Array(undefined) should be false", function () {
        expect(EasyType.isUint16Array(undefined)).to.equal(false);
    });

    it("EasyType.isUint16Array(false) should be false", function () {
        expect(EasyType.isUint16Array(false)).to.equal(false);
    });

    it("EasyType.isUint16Array(true) should be false", function () {
        expect(EasyType.isUint16Array(true)).to.equal(false);
    });

    it("EasyType.isUint16Array(0) should be false", function () {
        expect(EasyType.isUint16Array(0)).to.equal(false);
    });

    it("EasyType.isUint16Array('hello world') should be false", function () {
        expect(EasyType.isUint16Array("hello world")).to.equal(false);
    });

    it("EasyType.isUint16Array(function () {}) should be false", function () {
        expect(EasyType.isUint16Array(function () {})).to.equal(false);
    });

    it("EasyType.isUint16Array(new Int8Array()) should be false", function () {
        expect(EasyType.isUint16Array(new Int8Array())).to.equal(false);
    });

    it("EasyType.isUint16Array(new Uint8Array()) should be false", function () {
        expect(EasyType.isUint16Array(new Uint8Array())).to.equal(false);
    });

    it("EasyType.isUint16Array(new Uint16Array()) should be true", function () {
        expect(EasyType.isUint16Array(new Uint16Array())).to.equal(true);
    });
});
