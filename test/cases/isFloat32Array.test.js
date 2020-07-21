const chai = require("chai");
const EasyType = require("../../dist/easytype");

const { expect } = chai;

describe("isFloat32Array：", function () {
    it("EasyType.isFloat32Array(null) should be false", function () {
        expect(EasyType.isFloat32Array(null)).to.equal(false);
    });

    it("EasyType.isFloat32Array(undefined) should be false", function () {
        expect(EasyType.isFloat32Array(undefined)).to.equal(false);
    });

    it("EasyType.isFloat32Array(false) should be false", function () {
        expect(EasyType.isFloat32Array(false)).to.equal(false);
    });

    it("EasyType.isFloat32Array(true) should be false", function () {
        expect(EasyType.isFloat32Array(true)).to.equal(false);
    });

    it("EasyType.isFloat32Array(0) should be false", function () {
        expect(EasyType.isFloat32Array(0)).to.equal(false);
    });

    it("EasyType.isFloat32Array('hello world') should be false", function () {
        expect(EasyType.isFloat32Array("hello world")).to.equal(false);
    });

    it("EasyType.isFloat32Array(function () {}) should be false", function () {
        expect(EasyType.isFloat32Array(function () {})).to.equal(false);
    });

    it("EasyType.isFloat32Array(new Int8Array()) should be false", function () {
        expect(EasyType.isFloat32Array(new Int8Array())).to.equal(false);
    });

    it("EasyType.isFloat32Array(new Uint8Array()) should be false", function () {
        expect(EasyType.isFloat32Array(new Uint8Array())).to.equal(false);
    });

    it("EasyType.isFloat32Array(new Uint16Array()) should be false", function () {
        expect(EasyType.isFloat32Array(new Uint16Array())).to.equal(false);
    });

    it("EasyType.isFloat32Array(new Uint32Array()) should be false", function () {
        expect(EasyType.isFloat32Array(new Uint32Array())).to.equal(false);
    });

    it("EasyType.isFloat32Array(new Float32Array()) should be true", function () {
        expect(EasyType.isFloat32Array(new Float32Array())).to.equal(true);
    });

});
