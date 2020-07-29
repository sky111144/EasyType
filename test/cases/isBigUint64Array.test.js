const chai = require("chai");
const EasyType = require("../../dist/easytype");

const { expect } = chai;

describe("isBigUint64Array：", function () {
    it("EasyType.isBigUint64Array(null) should be false", function () {
        expect(EasyType.isBigUint64Array(null)).to.equal(false);
    });

    it("EasyType.isBigUint64Array(undefined) should be false", function () {
        expect(EasyType.isBigUint64Array(undefined)).to.equal(false);
    });

    it("EasyType.isBigUint64Array(false) should be false", function () {
        expect(EasyType.isBigUint64Array(false)).to.equal(false);
    });

    it("EasyType.isBigUint64Array(true) should be false", function () {
        expect(EasyType.isBigUint64Array(true)).to.equal(false);
    });

    it("EasyType.isBigUint64Array(0) should be false", function () {
        expect(EasyType.isBigUint64Array(0)).to.equal(false);
    });

    it("EasyType.isBigUint64Array('hello world') should be false", function () {
        expect(EasyType.isBigUint64Array("hello world")).to.equal(false);
    });

    it("EasyType.isBigUint64Array(function () {}) should be false", function () {
        expect(EasyType.isBigUint64Array(function () {})).to.equal(false);
    });

    it("EasyType.isBigUint64Array(new Int8Array()) should be false", function () {
        expect(EasyType.isBigUint64Array(new Int8Array())).to.equal(false);
    });

    it("EasyType.isBigUint64Array(new Uint8Array()) should be false", function () {
        expect(EasyType.isBigUint64Array(new Uint8Array())).to.equal(false);
    });

    it("EasyType.isBigUint64Array(new Uint16Array()) should be false", function () {
        expect(EasyType.isBigUint64Array(new Uint16Array())).to.equal(false);
    });

    it("EasyType.isBigUint64Array(new Uint32Array()) should be false", function () {
        expect(EasyType.isBigUint64Array(new Uint32Array())).to.equal(false);
    });

    it("EasyType.isBigUint64Array(new Float32Array()) should be false", function () {
        expect(EasyType.isBigUint64Array(new Float32Array())).to.equal(false);
    });

    it("EasyType.isBigUint64Array(new Float64Array()) should be false", function () {
        expect(EasyType.isBigUint64Array(new Float64Array())).to.equal(false);
    });

    it("EasyType.isBigUint64Array(new BigInt64Array()) should be false", function () {
        expect(EasyType.isBigUint64Array(new BigInt64Array())).to.equal(false);
    });

    it("EasyType.isBigUint64Array(new BigUint64Array()) should be true", function () {
        expect(EasyType.isBigUint64Array(new BigUint64Array())).to.equal(true);
    });

});
