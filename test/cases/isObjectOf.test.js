const chai = require("chai");
const EasyType = require("../../dist/easytype");

const { expect } = chai;

describe("isObjectOf：", function () {
    it("EasyType.isObjectOf({ key: null }, {}) should be false", function () {
        expect(EasyType.isObjectOf({ key: null }, {})).to.equal(false);
    });

    it("EasyType.isObjectOf({}, { key: EasyType.types.NULL }) should be false", function () {
        expect(EasyType.isObjectOf({}, { key: EasyType.types.NULL })).to.equal(false);
    });

    it("EasyType.isObjectOf({}, {}) should be true", function () {
        expect(EasyType.isObjectOf({}, {})).to.equal(true);
    });

    it("EasyType.isObjectOf({ key: null }, { key: EasyType.types.NULL }) should be true", function () {
        expect(EasyType.isObjectOf({ key: null }, { key: EasyType.types.NULL })).to.equal(true);
    });

    it("EasyType.isObjectOf({ key: undefined }, { key: EasyType.types.UNDEFINED }) should be true", function () {
        expect(EasyType.isObjectOf({ key: undefined }, { key: EasyType.types.UNDEFINED })).to.equal(true);
    });

    it("EasyType.isObjectOf({ key: false }, { key: EasyType.types.BOOLEAN }) should be true", function () {
        expect(EasyType.isObjectOf({ key: false }, { key: EasyType.types.BOOLEAN })).to.equal(true);
    });

    it("EasyType.isObjectOf({ key: 0 }, { key: EasyType.types.NUMBER }) should be true", function () {
        expect(EasyType.isObjectOf({ key: 0 }, { key: EasyType.types.NUMBER })).to.equal(true);
    });

    it("EasyType.isObjectOf({ key: 'hello world' }, { key: EasyType.types.STRING }) should be true", function () {
        expect(EasyType.isObjectOf({ key: "hello world" }, { key: EasyType.types.STRING })).to.equal(true);
    });

    it("EasyType.isObjectOf({ key: [] }, { key: EasyType.types.ARRAY }) should be true", function () {
        expect(EasyType.isObjectOf({ key: [] }, { key: EasyType.types.ARRAY })).to.equal(true);
    });

    it("EasyType.isObjectOf({ key: {} }, { key: EasyType.types.OBJECT }) should be true", function () {
        expect(EasyType.isObjectOf({ key: {} }, { key: EasyType.types.OBJECT })).to.equal(true);
    });

    it("EasyType.isObjectOf({ key: () => {} }, { key: EasyType.types.FUNCTION }) should be true", function () {
        expect(EasyType.isObjectOf({ key: () => {} }, { key: EasyType.types.FUNCTION })).to.equal(true);
    });

    it("EasyType.isObjectOf({ key: new Set() }, { key: EasyType.types.SET }) should be true", function () {
        expect(EasyType.isObjectOf({ key: new Set() }, { key: EasyType.types.SET })).to.equal(true);
    });

    it("EasyType.isObjectOf({ key: new WeakSet() }, { key: EasyType.types.WEAKSET }) should be true", function () {
        expect(EasyType.isObjectOf({ key: new WeakSet() }, { key: EasyType.types.WEAKSET })).to.equal(true);
    });

    it("EasyType.isObjectOf({ key: new Map() }, { key: EasyType.types.MAP }) should be true", function () {
        expect(EasyType.isObjectOf({ key: new Map() }, { key: EasyType.types.MAP })).to.equal(true);
    });

    it("EasyType.isObjectOf({ key: Symbol(0) }, { key: EasyType.types.SYMBOL }) should be true", function () {
        expect(EasyType.isObjectOf({ key: Symbol(0) }, { key: EasyType.types.SYMBOL })).to.equal(true);
    });

    it("EasyType.isObjectOf({ key: /hello/gi }, { key: EasyType.types.REGEXP }) should be true", function () {
        expect(EasyType.isObjectOf({ key: /hello/gi }, { key: EasyType.types.REGEXP })).to.equal(true);
    });

    it("EasyType.isObjectOf({ key: new Promise(() => {}) }, { key: EasyType.types.PROMISE }) should be true", function () {
        expect(EasyType.isObjectOf({ key: new Promise(() => {}) }, { key: EasyType.types.PROMISE })).to.equal(true);
    });

    it("EasyType.isObjectOf({ key: Math }, { key: EasyType.types.MATH }) should be true", function () {
        expect(EasyType.isObjectOf({ key: Math }, { key: EasyType.types.MATH })).to.equal(true);
    });

    it("EasyType.isObjectOf({ key: JSON }, { key: EasyType.types.JSON }) should be true", function () {
        expect(EasyType.isObjectOf({ key: JSON }, { key: EasyType.types.JSON })).to.equal(true);
    });

    it("EasyType.isObjectOf({ key: new Error() }, { key: EasyType.types.ERROR }) should be true", function () {
        expect(EasyType.isObjectOf({ key: new Error() }, { key: EasyType.types.ERROR })).to.equal(true);
    });

    it("EasyType.isObjectOf({ key: new Int8Array() }, { key: EasyType.types.INT8ARRAY }) should be true", function () {
        expect(EasyType.isObjectOf({ key: new Int8Array() }, { key: EasyType.types.INT8ARRAY })).to.equal(true);
    });

    it("EasyType.isObjectOf({ key: new Uint8Array() }, { key: EasyType.types.UINT8ARRAY }) should be true", function () {
        expect(EasyType.isObjectOf({ key: new Uint8Array() }, { key: EasyType.types.UINT8ARRAY })).to.equal(true);
    });

    it("EasyType.isObjectOf({ key: new Uint8ClampedArray() }, { key: EasyType.types.UINT8CLAMPEDARRAY }) should be true", function () {
        expect(EasyType.isObjectOf({ key: new Uint8ClampedArray() }, { key: EasyType.types.UINT8CLAMPEDARRAY })).to.equal(true);
    });

    it("EasyType.isObjectOf({ key: new Int16Array() }, { key: EasyType.types.INT16ARRAY }) should be true", function () {
        expect(EasyType.isObjectOf({ key: new Int16Array() }, { key: EasyType.types.INT16ARRAY })).to.equal(true);
    });

    it("EasyType.isObjectOf({ key: new Uint16Array() }, { key: EasyType.types.UINT16ARRAY }) should be true", function () {
        expect(EasyType.isObjectOf({ key: new Uint16Array() }, { key: EasyType.types.UINT16ARRAY })).to.equal(true);
    });

    it("EasyType.isObjectOf({ key: new Int32Array() }, { key: EasyType.types.INT32ARRAY }) should be true", function () {
        expect(EasyType.isObjectOf({ key: new Int32Array() }, { key: EasyType.types.INT32ARRAY })).to.equal(true);
    });

    it("EasyType.isObjectOf({ key: new Uint32Array() }, { key: EasyType.types.UINT32ARRAY }) should be true", function () {
        expect(EasyType.isObjectOf({ key: new Uint32Array() }, { key: EasyType.types.UINT32ARRAY })).to.equal(true);
    });

    it("EasyType.isObjectOf({ key: new Float32Array() }, { key: EasyType.types.FLOAT32ARRAY }) should be true", function () {
        expect(EasyType.isObjectOf({ key: new Float32Array() }, { key: EasyType.types.FLOAT32ARRAY })).to.equal(true);
    });

    it("EasyType.isObjectOf({ key: new Float64Array() }, { key: EasyType.types.FLOAT64ARRAY }) should be true", function () {
        expect(EasyType.isObjectOf({ key: new Float64Array() }, { key: EasyType.types.FLOAT64ARRAY })).to.equal(true);
    });

    it("EasyType.isObjectOf({ key: new BigInt64Array() }, { key: EasyType.types.BIGINT64ARRAY }) should be true", function () {
        expect(EasyType.isObjectOf({ key: new BigInt64Array() }, { key: EasyType.types.BIGINT64ARRAY })).to.equal(true);
    });

    it("EasyType.isObjectOf({ key: new BigUint64Array() }, { key: EasyType.types.BIGUINT64ARRAY }) should be true", function () {
        expect(EasyType.isObjectOf({ key: new BigUint64Array() }, { key: EasyType.types.BIGUINT64ARRAY })).to.equal(true);
    });

    it("EasyType.isObjectOf({ key: new ArrayBuffer() }, { key: EasyType.types.ARRAYBUFFER }) should be true", function () {
        expect(EasyType.isObjectOf({ key: new ArrayBuffer() }, { key: EasyType.types.ARRAYBUFFER })).to.equal(true);
    });

    it("EasyType.isObjectOf({ key: new DataView(new ArrayBuffer()) }, { key: EasyType.types.DATAVIEW }) should be true", function () {
        expect(EasyType.isObjectOf({ key: new DataView(new ArrayBuffer()) }, { key: EasyType.types.DATAVIEW })).to.equal(true);
    });

    it("EasyType.isObjectOf({ key: new Date() }, { key: EasyType.types.DATE }) should be true", function () {
        expect(EasyType.isObjectOf({ key: new Date() }, { key: EasyType.types.DATE })).to.equal(true);
    });

    it("EasyType.isObjectOf({ key: global }, { key: EasyType.types.GLOBAL }) should be true", function () {
        expect(EasyType.isObjectOf({ key: global }, { key: EasyType.types.GLOBAL })).to.equal(true);
    });

});
