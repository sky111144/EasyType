const chai = require("chai");
const EasyType = require("../../dist/easytype");

const { expect } = chai;

describe("isUint8ClampedArray：", function () {
    it("EasyType.isUint8ClampedArray(null) should be false", function () {
        expect(EasyType.isUint8ClampedArray(null)).to.equal(false);
    });

    it("EasyType.isUint8ClampedArray(undefined) should be false", function () {
        expect(EasyType.isUint8ClampedArray(undefined)).to.equal(false);
    });

    it("EasyType.isUint8ClampedArray(false) should be false", function () {
        expect(EasyType.isUint8ClampedArray(false)).to.equal(false);
    });

    it("EasyType.isUint8ClampedArray(true) should be false", function () {
        expect(EasyType.isUint8ClampedArray(true)).to.equal(false);
    });

    it("EasyType.isUint8ClampedArray(0) should be false", function () {
        expect(EasyType.isUint8ClampedArray(0)).to.equal(false);
    });

    it("EasyType.isUint8ClampedArray('hello world') should be false", function () {
        expect(EasyType.isUint8ClampedArray("hello world")).to.equal(false);
    });

    it("EasyType.isUint8ClampedArray(function () {}) should be false", function () {
        expect(EasyType.isUint8ClampedArray(function () {})).to.equal(false);
    });

    it("EasyType.isUint8ClampedArray(new Int8Array()) should be false", function () {
        expect(EasyType.isUint8ClampedArray(new Int8Array())).to.equal(false);
    });

    it("EasyType.isUint8ClampedArray(new Uint8Array()) should be false", function () {
        expect(EasyType.isUint8ClampedArray(new Uint8Array())).to.equal(false);
    });

    it("EasyType.isUint8ClampedArray(new Uint8ClampedArray()) should be true", function () {
        expect(EasyType.isUint8ClampedArray(new Uint8ClampedArray())).to.equal(true);
    });

});
