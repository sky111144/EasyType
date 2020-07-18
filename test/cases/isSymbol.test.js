const chai = require("chai");
const EasyType = require("../../dist/easytype");

const { expect } = chai;

describe("isSymbol：", function () {
    it("EasyType.isSymbol(null) should be false", function () {
        expect(EasyType.isSymbol(null)).to.equal(false);
    });

    it("EasyType.isSymbol(undefined) should be false", function () {
        expect(EasyType.isSymbol(undefined)).to.equal(false);
    });

    it("EasyType.isSymbol(false) should be false", function () {
        expect(EasyType.isSymbol(false)).to.equal(false);
    });

    it("EasyType.isSymbol(true) should be false", function () {
        expect(EasyType.isSymbol(true)).to.equal(false);
    });

    it("EasyType.isSymbol(0) should be false", function () {
        expect(EasyType.isSymbol(0)).to.equal(false);
    });

    it("EasyType.isSymbol('hello world') should be false", function () {
        expect(EasyType.isSymbol("hello world")).to.equal(false);
    });

    it("EasyType.isSymbol([]) should be false", function () {
        expect(EasyType.isSymbol([])).to.equal(false);
    });

    it("EasyType.isSymbol(/hello world/g) should be false", function () {
        expect(EasyType.isSymbol(/hello world/g)).to.equal(false);
    });

    it("EasyType.isSymbol(new Set()) should be false", function () {
        expect(EasyType.isSymbol(new Set())).to.equal(false);
    });

    it("EasyType.isSymbol(Symbol()) should be true", function () {
        expect(EasyType.isSymbol(Symbol())).to.equal(true);
    });

    it("EasyType.isSymbol(Symbol('hello world')) should be true", function () {
        expect(EasyType.isSymbol(Symbol("hello world"))).to.equal(true);
    });

});
