const chai = require("chai");
const EasyType = require("../../dist/easytype");

const { expect } = chai;

describe("isInt16Array：", function () {
    it("EasyType.isInt16Array(null) should be false", function () {
        expect(EasyType.isInt16Array(null)).to.equal(false);
    });

    it("EasyType.isInt16Array(undefined) should be false", function () {
        expect(EasyType.isInt16Array(undefined)).to.equal(false);
    });

    it("EasyType.isInt16Array(false) should be false", function () {
        expect(EasyType.isInt16Array(false)).to.equal(false);
    });

    it("EasyType.isInt16Array(true) should be false", function () {
        expect(EasyType.isInt16Array(true)).to.equal(false);
    });

    it("EasyType.isInt16Array(0) should be false", function () {
        expect(EasyType.isInt16Array(0)).to.equal(false);
    });

    it("EasyType.isInt16Array('hello world') should be false", function () {
        expect(EasyType.isInt16Array("hello world")).to.equal(false);
    });

    it("EasyType.isInt16Array(function () {}) should be false", function () {
        expect(EasyType.isInt16Array(function () {})).to.equal(false);
    });

    it("EasyType.isInt16Array(new Int8Array()) should be false", function () {
        expect(EasyType.isInt16Array(new Int8Array())).to.equal(false);
    });

    it("EasyType.isInt16Array(new Int16Array()) should be true", function () {
        expect(EasyType.isInt16Array(new Int16Array())).to.equal(true);
    });

});
