const chai = require("chai");
const EasyType = require("../../dist/easytype");

const { expect } = chai;

describe("isMap：", function () {
    it("EasyType.isMap(null) should be false", function () {
        expect(EasyType.isMap(null)).to.equal(false);
    });

    it("EasyType.isMap(undefined) should be false", function () {
        expect(EasyType.isMap(undefined)).to.equal(false);
    });

    it("EasyType.isMap(false) should be false", function () {
        expect(EasyType.isMap(false)).to.equal(false);
    });

    it("EasyType.isMap(true) should be false", function () {
        expect(EasyType.isMap(true)).to.equal(false);
    });

    it("EasyType.isMap(0) should be false", function () {
        expect(EasyType.isMap(0)).to.equal(false);
    });

    it("EasyType.isMap('hello world') should be false", function () {
        expect(EasyType.isMap("hello world")).to.equal(false);
    });

    it("EasyType.isMap([]) should be false", function () {
        expect(EasyType.isMap([])).to.equal(false);
    });

    it("EasyType.isMap(/hello world/g) should be false", function () {
        expect(EasyType.isMap(/hello world/g)).to.equal(false);
    });

    it("EasyType.isMap(new Set()) should be false", function () {
        expect(EasyType.isMap(new Set())).to.equal(false);
    });

    it("EasyType.isMap(new Set()) should be false", function () {
        expect(EasyType.isMap(new WeakSet())).to.equal(false);
    });

    it("EasyType.isMap(new Map()) should be true", function () {
        expect(EasyType.isMap(new Map())).to.equal(true);
    });
});
