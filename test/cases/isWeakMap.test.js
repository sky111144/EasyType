const chai = require("chai");
const EasyType = require("../../dist/easytype");

const { expect } = chai;

describe("isWeakMap：", function () {
    it("EasyType.isWeakMap(null) should be false", function () {
        expect(EasyType.isWeakMap(null)).to.equal(false);
    });

    it("EasyType.isWeakMap(undefined) should be false", function () {
        expect(EasyType.isWeakMap(undefined)).to.equal(false);
    });

    it("EasyType.isWeakMap(false) should be false", function () {
        expect(EasyType.isWeakMap(false)).to.equal(false);
    });

    it("EasyType.isWeakMap(true) should be false", function () {
        expect(EasyType.isWeakMap(true)).to.equal(false);
    });

    it("EasyType.isWeakMap(0) should be false", function () {
        expect(EasyType.isWeakMap(0)).to.equal(false);
    });

    it("EasyType.isWeakMap('hello world') should be false", function () {
        expect(EasyType.isWeakMap("hello world")).to.equal(false);
    });

    it("EasyType.isWeakMap([]) should be false", function () {
        expect(EasyType.isWeakMap([])).to.equal(false);
    });

    it("EasyType.isWeakMap(/hello world/g) should be false", function () {
        expect(EasyType.isWeakMap(/hello world/g)).to.equal(false);
    });

    it("EasyType.isWeakMap(new Set()) should be false", function () {
        expect(EasyType.isWeakMap(new Set())).to.equal(false);
    });

    it("EasyType.isWeakMap(new WeakMap()) should be true", function () {
        expect(EasyType.isWeakMap(new WeakMap())).to.equal(true);
    });

});
