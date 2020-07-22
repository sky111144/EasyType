const chai = require("chai");
const EasyType = require("../../dist/easytype");

const { expect } = chai;

describe("isArrayBuffer：", function () {
    it("EasyType.isArrayBuffer(null) should be false", function () {
        expect(EasyType.isArrayBuffer(null)).to.equal(false);
    });

    it("EasyType.isArrayBuffer(undefined) should be false", function () {
        expect(EasyType.isArrayBuffer(undefined)).to.equal(false);
    });

    it("EasyType.isArrayBuffer(false) should be false", function () {
        expect(EasyType.isArrayBuffer(false)).to.equal(false);
    });

    it("EasyType.isArrayBuffer(true) should be false", function () {
        expect(EasyType.isArrayBuffer(true)).to.equal(false);
    });

    it("EasyType.isArrayBuffer(0) should be false", function () {
        expect(EasyType.isArrayBuffer(0)).to.equal(false);
    });

    it("EasyType.isArrayBuffer('hello world') should be false", function () {
        expect(EasyType.isArrayBuffer("hello world")).to.equal(false);
    });

    it("EasyType.isArrayBuffer([]) should be false", function () {
        expect(EasyType.isArrayBuffer([])).to.equal(false);
    });

    it("EasyType.isArrayBuffer([1,2,3,4,5]) should be false", function () {
        expect(EasyType.isArrayBuffer([1,2,3,4,5])).to.equal(false);
    });

    it("EasyType.isArrayBuffer(new ArrayBuffer()) should be true", function () {
        expect(EasyType.isArrayBuffer(new ArrayBuffer())).to.equal(true);
    });

});
