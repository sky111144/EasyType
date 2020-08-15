const chai = require("chai");
const EasyType = require("../../dist/easytype");

const { expect } = chai;

describe("type：", function () {
    it("EasyType.type(null) should be 'Null'", function () {
        expect(EasyType.type(null)).to.equal('Null');
    });

    it("EasyType.type(undefined) should be 'Undefined'", function () {
        expect(EasyType.type(undefined)).to.equal('Undefined');
    });

    it("EasyType.type(false) should be 'Boolean'", function () {
        expect(EasyType.type(false)).to.equal('Boolean');
    });

    it("EasyType.type(0) should be 'Number'", function () {
        expect(EasyType.type(0)).to.equal('Number');
    });

    it("EasyType.type(BigInt(123)) should be 'BigInt'", function () {
        expect(EasyType.type(BigInt(123))).to.equal('BigInt');
    });

    it("EasyType.type('hello world') should be 'String'", function () {
        expect(EasyType.type("hello world")).to.equal('String');
    });

    it("EasyType.type([]) should be 'Array'", function () {
        expect(EasyType.type([])).to.equal('Array');
    });

    it("EasyType.type({}) should be 'Object'", function () {
        expect(EasyType.type({})).to.equal('Object');
    });

    it("EasyType.type(new Function()) should be 'Function'", function () {
        expect(EasyType.type(new Function())).to.equal('Function');
    });

    it("EasyType.type(new Set()) should be 'Set'", function () {
        expect(EasyType.type(new Set())).to.equal('Set');
    });

    it("EasyType.type(new WeakSet()) should be 'WeakSet'", function () {
        expect(EasyType.type(new WeakSet())).to.equal('WeakSet');
    });

    it("EasyType.type(new Map()) should be 'Map'", function () {
        expect(EasyType.type(new Map())).to.equal('Map');
    });

    it("EasyType.type(new WeakMap()) should be 'WeakMap'", function () {
        expect(EasyType.type(new WeakMap())).to.equal('WeakMap');
    });

    it("EasyType.type(Symbol(null)) should be 'Symbol'", function () {
        expect(EasyType.type(Symbol(null))).to.equal('Symbol');
    });

    it("EasyType.type(new RegExp()) should be 'RegExp'", function () {
        expect(EasyType.type(new RegExp())).to.equal('RegExp');
    });

    it("EasyType.type(new Promise(() => {})) should be 'Promise'", function () {
        expect(EasyType.type(new Promise(() => {}))).to.equal('Promise');
    });

    it("EasyType.type(Math) should be 'Math'", function () {
        expect(EasyType.type(Math)).to.equal('Math');
    });

    it("EasyType.type(JSON) should be 'JSON'", function () {
        expect(EasyType.type(JSON)).to.equal('JSON');
    });

    it("EasyType.type(new Error()) should be 'Error'", function () {
        expect(EasyType.type(new Error())).to.equal('Error');
    });

    it("EasyType.type(new Int8Array()) should be 'Int8Array'", function () {
        expect(EasyType.type(new Int8Array())).to.equal('Int8Array');
    });

    it("EasyType.type(new Uint8Array()) should be 'Uint8Array'", function () {
        expect(EasyType.type(new Uint8Array())).to.equal('Uint8Array');
    });

    it("EasyType.type(new Uint8ClampedArray()) should be 'Uint8ClampedArray'", function () {
        expect(EasyType.type(new Uint8ClampedArray())).to.equal('Uint8ClampedArray');
    });

    it("EasyType.type(new Int16Array()) should be 'Int16Array'", function () {
        expect(EasyType.type(new Int16Array())).to.equal('Int16Array');
    });

    it("EasyType.type(new Uint16Array()) should be 'Uint16Array'", function () {
        expect(EasyType.type(new Uint16Array())).to.equal('Uint16Array');
    });

    it("EasyType.type(new Int32Array()) should be 'Int32Array'", function () {
        expect(EasyType.type(new Int32Array())).to.equal('Int32Array');
    });

    it("EasyType.type(new Uint32Array()) should be 'Uint32Array'", function () {
        expect(EasyType.type(new Uint32Array())).to.equal('Uint32Array');
    });

    it("EasyType.type(new Float32Array()) should be 'Float32Array'", function () {
        expect(EasyType.type(new Float32Array())).to.equal('Float32Array');
    });

    it("EasyType.type(new Float64Array()) should be 'Float64Array'", function () {
        expect(EasyType.type(new Float64Array())).to.equal('Float64Array');
    });

    it("EasyType.type(new BigInt64Array()) should be 'BigInt64Array'", function () {
        expect(EasyType.type(new BigInt64Array())).to.equal('BigInt64Array');
    });

    it("EasyType.type(new BigUint64Array()) should be 'BigUint64Array'", function () {
        expect(EasyType.type(new BigUint64Array())).to.equal('BigUint64Array');
    });

    it("EasyType.type(new ArrayBuffer()) should be 'ArrayBuffer'", function () {
        expect(EasyType.type(new ArrayBuffer())).to.equal('ArrayBuffer');
    });

    it("EasyType.type(new DataView(new ArrayBuffer())) should be 'DataView'", function () {
        expect(EasyType.type(new DataView(new ArrayBuffer()))).to.equal('DataView');
    });

    it("EasyType.type(new Date()) should be 'Date'", function () {
        expect(EasyType.type(new Date())).to.equal('Date');
    });

    it("EasyType.type(global) should be 'global'", function () {
        expect(EasyType.type(global)).to.equal('global');
    });

});
