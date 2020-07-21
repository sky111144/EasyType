const chai = require("chai");
const EasyType = require("../../dist/easytype");

const { expect } = chai;

describe("isInt32Array：", function () {
    it("EasyType.isInt32Array(null) should be false", function () {
        expect(EasyType.isInt32Array(null)).to.equal(false);
    });

    it("EasyType.isInt32Array(undefined) should be false", function () {
        expect(EasyType.isInt32Array(undefined)).to.equal(false);
    });

    it("EasyType.isInt32Array(false) should be false", function () {
        expect(EasyType.isInt32Array(false)).to.equal(false);
    });

    it("EasyType.isInt32Array(true) should be false", function () {
        expect(EasyType.isInt32Array(true)).to.equal(false);
    });

    it("EasyType.isInt32Array(0) should be false", function () {
        expect(EasyType.isInt32Array(0)).to.equal(false);
    });

    it("EasyType.isInt32Array('hello world') should be false", function () {
        expect(EasyType.isInt32Array("hello world")).to.equal(false);
    });

    it("EasyType.isInt32Array(function () {}) should be false", function () {
        expect(EasyType.isInt32Array(function () {})).to.equal(false);
    });

    it("EasyType.isInt32Array(new Int8Array()) should be false", function () {
        expect(EasyType.isInt32Array(new Int8Array())).to.equal(false);
    });

    it("EasyType.isInt32Array(new Int16Array()) should be false", function () {
        expect(EasyType.isInt32Array(new Int16Array())).to.equal(false);
    });

    it("EasyType.isInt32Array(new Int32Array()) should be true", function () {
        expect(EasyType.isInt32Array(new Int32Array())).to.equal(true);
    });

});
