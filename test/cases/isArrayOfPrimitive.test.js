const chai = require("chai");
const EasyType = require("../../dist/easytype");

const { expect } = chai;

describe("isArrayOfPrimitive：", function () {
    it("EasyType.isArrayOfPrimitive(null) should be false", function () {
        expect(EasyType.isArrayOfPrimitive(null)).to.equal(false);
    });

    it("EasyType.isArrayOfPrimitive(undefined) should be false", function () {
        expect(EasyType.isArrayOfPrimitive(undefined)).to.equal(false);
    });

    it("EasyType.isArrayOfPrimitive(false) should be false", function () {
        expect(EasyType.isArrayOfPrimitive(false)).to.equal(false);
    });

    it("EasyType.isArrayOfPrimitive(true) should be false", function () {
        expect(EasyType.isArrayOfPrimitive(true)).to.equal(false);
    });

    it("EasyType.isArrayOfPrimitive(0) should be false", function () {
        expect(EasyType.isArrayOfPrimitive(0)).to.equal(false);
    });

    it("EasyType.isArrayOfPrimitive('hello world') should be false", function () {
        expect(EasyType.isArrayOfPrimitive("hello world")).to.equal(false);
    });

    it("EasyType.isArrayOfPrimitive([]) should be false", function () {
        expect(EasyType.isArrayOfPrimitive([])).to.equal(false);
    });

    it("EasyType.isArrayOfPrimitive(['0', 1, false]) should be true", function () {
        expect(EasyType.isArrayOfPrimitive(['0', 1, false])).to.equal(true);
    });

    it("EasyType.isArrayOfPrimitive(['0', '1', '2']) should be true", function () {
        expect(EasyType.isArrayOfPrimitive(['0', '1', '2'])).to.equal(true);
    });

    it("EasyType.isArrayOfPrimitive([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) should be true", function () {
        expect(EasyType.isArrayOfPrimitive([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])).to.equal(true);
    });

    it("EasyType.isArrayOfPrimitive([false, true, false]) should be true", function () {
        expect(EasyType.isArrayOfPrimitive([false, true, false])).to.equal(true);
    });

    it("EasyType.isArrayOfPrimitive([false, false, false]) should be true", function () {
        expect(EasyType.isArrayOfPrimitive([false, false, false])).to.equal(true);
    });

    it("EasyType.isArrayOfPrimitive([null, null, null]) should be true", function () {
        expect(EasyType.isArrayOfPrimitive([null, null, null])).to.equal(true);
    });

    it("EasyType.isArrayOfPrimitive([0, 0, 0]) should be true", function () {
        expect(EasyType.isArrayOfPrimitive([0, 0, 0])).to.equal(true);
    });

    it("EasyType.isArrayOfPrimitive([NaN, NaN, NaN]) should be true", function () {
        expect(EasyType.isArrayOfPrimitive([NaN, NaN, NaN])).to.equal(true);
    });

    it("EasyType.isArrayOfPrimitive(['', '', '']) should be true", function () {
        expect(EasyType.isArrayOfPrimitive(['', '', ''])).to.equal(true);
    });

    it("EasyType.isArrayOfPrimitive([undefined, undefined, undefined]) should be true", function () {
        expect(EasyType.isArrayOfPrimitive([undefined, undefined, undefined])).to.equal(true);
    });

    it("EasyType.isArrayOfPrimitive([null, false, false]) should be true", function () {
        expect(EasyType.isArrayOfPrimitive([null, false, NaN])).to.equal(true);
    });

    it("EasyType.isArrayOfPrimitive([undefined, false, false]) should be true", function () {
        expect(EasyType.isArrayOfPrimitive([undefined, false, 0])).to.equal(true);
    });

    it("EasyType.isArrayOfPrimitive([null, false, undefined, NaN, 0, '']) should be true", function () {
        expect(EasyType.isArrayOfPrimitive([null, false, undefined, NaN, 0, ''])).to.equal(true);
    });

    it("EasyType.isArrayOfPrimitive([/hello world/gi, false, undefined, NaN, 0, '']) should be false", function () {
        expect(EasyType.isArrayOfPrimitive([/hello world/gi, false, undefined, NaN, 0, ''])).to.equal(false);
    });

    it("EasyType.isArrayOfPrimitive([/hello world/gi, false, [], NaN, 0, '']) should be false", function () {
        expect(EasyType.isArrayOfPrimitive([/hello world/gi, false, [], NaN, 0, ''])).to.equal(false);
    });

    it("EasyType.isArrayOfPrimitive([/hello world/gi, false, [], () => {}, 0, '']) should be false", function () {
        expect(EasyType.isArrayOfPrimitive([/hello world/gi, false, [], () => {}, 0, ''])).to.equal(false);
    });

    it("EasyType.isArrayOfPrimitive([BigInt(0), false, undefined, NaN, 0, '']) should be true", function () {
        expect(EasyType.isArrayOfPrimitive([BigInt(0), false, undefined, NaN, 0, ''])).to.equal(true);
    });

    it("EasyType.isArrayOfPrimitive([BigInt(0), false, Symbol(0), NaN, 0, '']) should be true", function () {
        expect(EasyType.isArrayOfPrimitive([BigInt(0), false, Symbol(0), NaN, 0, ''])).to.equal(true);
    });

});
