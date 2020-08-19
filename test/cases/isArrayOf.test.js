const chai = require("chai");
const EasyType = require("../../dist/easytype");

const { expect } = chai;

describe("isArrayOf：", function () {
    it("EasyType.isArrayOf([null], EasyType.types.NULL) should be true", function () {
        expect(EasyType.isArrayOf([null], EasyType.types.NULL)).to.equal(true);
    });

    it("EasyType.isArrayOf([undefined], EasyType.types.UNDEFINED) should be true", function () {
        expect(EasyType.isArrayOf([undefined], EasyType.types.UNDEFINED)).to.equal(true);
    });

    it("EasyType.isArrayOf([false], EasyType.types.BOOLEAN) should be true", function () {
        expect(EasyType.isArrayOf([false], EasyType.types.BOOLEAN)).to.equal(true);
    });

    it("EasyType.isArrayOf([0], EasyType.types.NUMBER) should be true", function () {
        expect(EasyType.isArrayOf([0], EasyType.types.NUMBER)).to.equal(true);
    });

    it("EasyType.isArrayOf(['hello world'], EasyType.types.STRING) should be true", function () {
        expect(EasyType.isArrayOf(["hello world"], EasyType.types.STRING)).to.equal(true);
    });

    it("EasyType.isArrayOf([[]], EasyType.types.ARRAY) should be true", function () {
        expect(EasyType.isArrayOf([[]], EasyType.types.ARRAY)).to.equal(true);
    });

    it("EasyType.isArrayOf([{}], EasyType.types.OBJECT) should be true", function () {
        expect(EasyType.isArrayOf([{}], EasyType.types.OBJECT)).to.equal(true);
    });

    it("EasyType.isArrayOf([() => {}], EasyType.types.FUNCTION) should be true", function () {
        expect(EasyType.isArrayOf([() => {}], EasyType.types.FUNCTION)).to.equal(true);
    });

    it("EasyType.isArrayOf([new Set()], EasyType.types.SET) should be true", function () {
        expect(EasyType.isArrayOf([new Set()], EasyType.types.SET)).to.equal(true);
    });

    it("EasyType.isArrayOf([new WeakSet()], EasyType.types.WEAKSET) should be true", function () {
        expect(EasyType.isArrayOf([new WeakSet()], EasyType.types.WEAKSET)).to.equal(true);
    });

    it("EasyType.isArrayOf([new Map()], EasyType.types.MAP) should be true", function () {
        expect(EasyType.isArrayOf([new Map()], EasyType.types.MAP)).to.equal(true);
    });

    it("EasyType.isArrayOf([Symbol(0)], EasyType.types.SYMBOL) should be true", function () {
        expect(EasyType.isArrayOf([Symbol(0)], EasyType.types.SYMBOL)).to.equal(true);
    });

    it("EasyType.isArrayOf([/hello/gi], EasyType.types.REGEXP) should be true", function () {
        expect(EasyType.isArrayOf([/hello/gi], EasyType.types.REGEXP)).to.equal(true);
    });

    it("EasyType.isArrayOf([new Promise(() => {})], EasyType.types.PROMISE) should be true", function () {
        expect(EasyType.isArrayOf([new Promise(() => {})], EasyType.types.PROMISE)).to.equal(true);
    });

    it("EasyType.isArrayOf([Math], EasyType.types.MATH) should be true", function () {
        expect(EasyType.isArrayOf([Math], EasyType.types.MATH)).to.equal(true);
    });

    it("EasyType.isArrayOf([JSON], EasyType.types.JSON) should be true", function () {
        expect(EasyType.isArrayOf([JSON], EasyType.types.JSON)).to.equal(true);
    });

    it("EasyType.isArrayOf([new Error()], EasyType.types.ERROR) should be true", function () {
        expect(EasyType.isArrayOf([new Error()], EasyType.types.ERROR)).to.equal(true);
    });

    it("EasyType.isArrayOf([new Int8Array()], EasyType.types.INT8ARRAY) should be true", function () {
        expect(EasyType.isArrayOf([new Int8Array()], EasyType.types.INT8ARRAY)).to.equal(true);
    });

    it("EasyType.isArrayOf([new Uint8Array()], EasyType.types.UINT8ARRAY) should be true", function () {
        expect(EasyType.isArrayOf([new Uint8Array()], EasyType.types.UINT8ARRAY)).to.equal(true);
    });

    it("EasyType.isArrayOf([new Uint8ClampedArray()], EasyType.types.UINT8CLAMPEDARRAY) should be true", function () {
        expect(EasyType.isArrayOf([new Uint8ClampedArray()], EasyType.types.UINT8CLAMPEDARRAY)).to.equal(true);
    });

    it("EasyType.isArrayOf([new Int16Array()], EasyType.types.INT16ARRAY) should be true", function () {
        expect(EasyType.isArrayOf([new Int16Array()], EasyType.types.INT16ARRAY)).to.equal(true);
    });

    it("EasyType.isArrayOf([new Uint16Array()], EasyType.types.UINT16ARRAY) should be true", function () {
        expect(EasyType.isArrayOf([new Uint16Array()], EasyType.types.UINT16ARRAY)).to.equal(true);
    });

    it("EasyType.isArrayOf([new Int32Array()], EasyType.types.INT32ARRAY) should be true", function () {
        expect(EasyType.isArrayOf([new Int32Array()], EasyType.types.INT32ARRAY)).to.equal(true);
    });

    it("EasyType.isArrayOf([new Uint32Array()], EasyType.types.UINT32ARRAY) should be true", function () {
        expect(EasyType.isArrayOf([new Uint32Array()], EasyType.types.UINT32ARRAY)).to.equal(true);
    });

    it("EasyType.isArrayOf([new Float32Array()], EasyType.types.FLOAT32ARRAY) should be true", function () {
        expect(EasyType.isArrayOf([new Float32Array()], EasyType.types.FLOAT32ARRAY)).to.equal(true);
    });

    it("EasyType.isArrayOf([new Float64Array()], EasyType.types.FLOAT64ARRAY) should be true", function () {
        expect(EasyType.isArrayOf([new Float64Array()], EasyType.types.FLOAT64ARRAY)).to.equal(true);
    });

    it("EasyType.isArrayOf([new BigInt64Array()], EasyType.types.BIGINT64ARRAY) should be true", function () {
        expect(EasyType.isArrayOf([new BigInt64Array()], EasyType.types.BIGINT64ARRAY)).to.equal(true);
    });

    it("EasyType.isArrayOf([new BigUint64Array()], EasyType.types.BIGUINT64ARRAY) should be true", function () {
        expect(EasyType.isArrayOf([new BigUint64Array()], EasyType.types.BIGUINT64ARRAY)).to.equal(true);
    });

    it("EasyType.isArrayOf([new ArrayBuffer()], EasyType.types.ARRAYBUFFER) should be true", function () {
        expect(EasyType.isArrayOf([new ArrayBuffer()], EasyType.types.ARRAYBUFFER)).to.equal(true);
    });

    it("EasyType.isArrayOf([new DataView(new ArrayBuffer())], EasyType.types.DATAVIEW) should be true", function () {
        expect(EasyType.isArrayOf([new DataView(new ArrayBuffer())], EasyType.types.DATAVIEW)).to.equal(true);
    });

    it("EasyType.isArrayOf([new Date()], EasyType.types.DATE) should be true", function () {
        expect(EasyType.isArrayOf([new Date()], EasyType.types.DATE)).to.equal(true);
    });

    it("EasyType.isArrayOf([global], EasyType.types.GLOBAL) should be true", function () {
        expect(EasyType.isArrayOf([global], EasyType.types.GLOBAL)).to.equal(true);
    });

});
