const chai = require("chai");
const EasyType = require("../../dist/easytype");

const { expect } = chai;

describe("isBigInt64Array：", function () {
    it("EasyType.isBigInt64Array(null) should be false", function () {
        expect(EasyType.isBigInt64Array(null)).to.equal(false);
    });

    it("EasyType.isBigInt64Array(undefined) should be false", function () {
        expect(EasyType.isBigInt64Array(undefined)).to.equal(false);
    });

    it("EasyType.isBigInt64Array(false) should be false", function () {
        expect(EasyType.isBigInt64Array(false)).to.equal(false);
    });

    it("EasyType.isBigInt64Array(true) should be false", function () {
        expect(EasyType.isBigInt64Array(true)).to.equal(false);
    });

    it("EasyType.isBigInt64Array(0) should be false", function () {
        expect(EasyType.isBigInt64Array(0)).to.equal(false);
    });

    it("EasyType.isBigInt64Array('hello world') should be false", function () {
        expect(EasyType.isBigInt64Array("hello world")).to.equal(false);
    });

    it("EasyType.isBigInt64Array(function () {}) should be false", function () {
        expect(EasyType.isBigInt64Array(function () {})).to.equal(false);
    });

    it("EasyType.isBigInt64Array(new Int8Array()) should be false", function () {
        expect(EasyType.isBigInt64Array(new Int8Array())).to.equal(false);
    });

    it("EasyType.isBigInt64Array(new Uint8Array()) should be false", function () {
        expect(EasyType.isBigInt64Array(new Uint8Array())).to.equal(false);
    });

    it("EasyType.isBigInt64Array(new Uint16Array()) should be false", function () {
        expect(EasyType.isBigInt64Array(new Uint16Array())).to.equal(false);
    });

    it("EasyType.isBigInt64Array(new Uint32Array()) should be false", function () {
        expect(EasyType.isBigInt64Array(new Uint32Array())).to.equal(false);
    });

    it("EasyType.isBigInt64Array(new Float32Array()) should be false", function () {
        expect(EasyType.isBigInt64Array(new Float32Array())).to.equal(false);
    });

    it("EasyType.isBigInt64Array(new Float64Array()) should be false", function () {
        expect(EasyType.isBigInt64Array(new Float64Array())).to.equal(false);
    });

    it("EasyType.isBigInt64Array(new BigInt64Array()) should be true", function () {
        expect(EasyType.isBigInt64Array(new BigInt64Array())).to.equal(true);
    });

});
