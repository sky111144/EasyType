const chai = require("chai");
const EasyType = require("../../dist/easytype");

const { expect } = chai;

describe("isWeakType：", function () {
    it("EasyType.isWeakType(null) should be false", function () {
        expect(EasyType.isWeakType(null)).to.equal(false);
    });

    it("EasyType.isWeakType(undefined) should be false", function () {
        expect(EasyType.isWeakType(undefined)).to.equal(false);
    });

    it("EasyType.isWeakType(false) should be false", function () {
        expect(EasyType.isWeakType(false)).to.equal(false);
    });

    it("EasyType.isWeakType(true) should be false", function () {
        expect(EasyType.isWeakType(true)).to.equal(false);
    });

    it("EasyType.isWeakType(0) should be false", function () {
        expect(EasyType.isWeakType(0)).to.equal(false);
    });

    it("EasyType.isWeakType('hello world') should be false", function () {
        expect(EasyType.isWeakType("hello world")).to.equal(false);
    });

    it("EasyType.isWeakType([]) should be false", function () {
        expect(EasyType.isWeakType([])).to.equal(false);
    });

    it("EasyType.isWeakType(/hello world/g) should be false", function () {
        expect(EasyType.isWeakType(/hello world/g)).to.equal(false);
    });

    it("EasyType.isWeakType(new Set()) should be false", function () {
        expect(EasyType.isWeakType(new Set())).to.equal(false);
    });

    it("EasyType.isWeakType(new Map()) should be false", function () {
        expect(EasyType.isWeakType(new Map())).to.equal(false);
    });

    it("EasyType.isWeakType(new WeakSet()) should be true", function () {
        expect(EasyType.isWeakType(new WeakSet())).to.equal(true);
    });

    it("EasyType.isWeakType(new WeakMap()) should be true", function () {
        expect(EasyType.isWeakType(new WeakMap())).to.equal(true);
    });

});
