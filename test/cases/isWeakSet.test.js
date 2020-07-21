const chai = require("chai");
const EasyType = require("../../dist/easytype");

const { expect } = chai;

describe("isWeakSet：", function () {
    it("EasyType.isWeakSet(null) should be false", function () {
        expect(EasyType.isWeakSet(null)).to.equal(false);
    });

    it("EasyType.isWeakSet(undefined) should be false", function () {
        expect(EasyType.isWeakSet(undefined)).to.equal(false);
    });

    it("EasyType.isWeakSet(false) should be false", function () {
        expect(EasyType.isWeakSet(false)).to.equal(false);
    });

    it("EasyType.isWeakSet(true) should be false", function () {
        expect(EasyType.isWeakSet(true)).to.equal(false);
    });

    it("EasyType.isWeakSet(0) should be false", function () {
        expect(EasyType.isWeakSet(0)).to.equal(false);
    });

    it("EasyType.isWeakSet('hello world') should be false", function () {
        expect(EasyType.isWeakSet("hello world")).to.equal(false);
    });

    it("EasyType.isWeakSet([]) should be false", function () {
        expect(EasyType.isWeakSet([])).to.equal(false);
    });

    it("EasyType.isWeakSet(/hello world/g) should be false", function () {
        expect(EasyType.isWeakSet(/hello world/g)).to.equal(false);
    });

    it("EasyType.isWeakSet(new Set()) should be false", function () {
        expect(EasyType.isWeakSet(new Set())).to.equal(false);
    });

    it("EasyType.isWeakSet(new WeakSet()) should be true", function () {
        expect(EasyType.isWeakSet(new WeakSet())).to.equal(true);
    });

});
