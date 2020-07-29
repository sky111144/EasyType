const chai = require("chai");
const EasyType = require("../../dist/easytype");

const { expect } = chai;

describe("isTypedArray：", function () {
    it("EasyType.isTypedArray(new Int8Array()) should be true", function () {
        expect(EasyType.isTypedArray(new Int8Array())).to.equal(true);
    });

    it("EasyType.isTypedArray(new Uint8Array()) should be true", function () {
        expect(EasyType.isTypedArray(new Uint8Array())).to.equal(true);
    });

    it("EasyType.isTypedArray(new Uint8ClampedArray()) should be true", function () {
        expect(EasyType.isTypedArray(new Uint8ClampedArray())).to.equal(true);
    });

    it("EasyType.isTypedArray(new Int16Array()) should be true", function () {
        expect(EasyType.isTypedArray(new Int16Array())).to.equal(true);
    });

    it("EasyType.isTypedArray(new Uint16Array()) should be true", function () {
        expect(EasyType.isTypedArray(new Uint16Array())).to.equal(true);
    });

    it("EasyType.isTypedArray(new Int32Array()) should be true", function () {
        expect(EasyType.isTypedArray(new Int32Array())).to.equal(true);
    });

    it("EasyType.isTypedArray(new Uint32Array()) should be true", function () {
        expect(EasyType.isTypedArray(new Uint32Array())).to.equal(true);
    });

    it("EasyType.isTypedArray(new Float32Array()) should be true", function () {
        expect(EasyType.isTypedArray(new Float32Array())).to.equal(true);
    });

    it("EasyType.isTypedArray(new Float64Array()) should be true", function () {
        expect(EasyType.isTypedArray(new Float64Array())).to.equal(true);
    });

    it("EasyType.isTypedArray(new BigInt64Array()) should be true", function () {
        expect(EasyType.isTypedArray(new BigInt64Array())).to.equal(true);
    });

});
