const chai = require("chai");
const EasyType = require("../../dist/easytype");

const { expect } = chai;

describe("isArrayOfSymbol：", function () {
    it("EasyType.isArrayOfSymbol(null) should be false", function () {
        expect(EasyType.isArrayOfSymbol(null)).to.equal(false);
    });

    it("EasyType.isArrayOfSymbol(undefined) should be false", function () {
        expect(EasyType.isArrayOfSymbol(undefined)).to.equal(false);
    });

    it("EasyType.isArrayOfSymbol(false) should be false", function () {
        expect(EasyType.isArrayOfSymbol(false)).to.equal(false);
    });

    it("EasyType.isArrayOfSymbol(true) should be false", function () {
        expect(EasyType.isArrayOfSymbol(true)).to.equal(false);
    });

    it("EasyType.isArrayOfSymbol(0) should be false", function () {
        expect(EasyType.isArrayOfSymbol(0)).to.equal(false);
    });

    it("EasyType.isArrayOfSymbol('hello world') should be false", function () {
        expect(EasyType.isArrayOfSymbol("hello world")).to.equal(false);
    });

    it("EasyType.isArrayOfSymbol([]) should be false", function () {
        expect(EasyType.isArrayOfSymbol([])).to.equal(false);
    });

    it("EasyType.isArrayOfSymbol(['0', 1, false]) should be false", function () {
        expect(EasyType.isArrayOfSymbol(['0', 1, false])).to.equal(false);
    });

    it("EasyType.isArrayOfSymbol([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) should be false", function () {
        expect(EasyType.isArrayOfSymbol([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])).to.equal(false);
    });

    it("EasyType.isArrayOfSymbol(['0', '1', '2']) should be false", function () {
        expect(EasyType.isArrayOfSymbol(['0', '1', '2'])).to.equal(false);
    });

    it("EasyType.isArrayOfSymbol([Symbol(null), Symbol(undefined), Symbol(false), Symbol(0), Symbol('hello world')]) should be true", function () {
        expect(EasyType.isArrayOfSymbol([Symbol(null), Symbol(undefined), Symbol(false), Symbol(0), Symbol('hello world')])).to.equal(true);
    });
});
