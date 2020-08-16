const chai = require("chai");
const EasyType = require("../../dist/easytype");

const { expect } = chai;

describe("isArrayOfFalsity：", function () {
    it("EasyType.isArrayOfFalsity(null) should be false", function () {
        expect(EasyType.isArrayOfFalsity(null)).to.equal(false);
    });

    it("EasyType.isArrayOfFalsity(undefined) should be false", function () {
        expect(EasyType.isArrayOfFalsity(undefined)).to.equal(false);
    });

    it("EasyType.isArrayOfFalsity(false) should be false", function () {
        expect(EasyType.isArrayOfFalsity(false)).to.equal(false);
    });

    it("EasyType.isArrayOfFalsity(true) should be false", function () {
        expect(EasyType.isArrayOfFalsity(true)).to.equal(false);
    });

    it("EasyType.isArrayOfFalsity(0) should be false", function () {
        expect(EasyType.isArrayOfFalsity(0)).to.equal(false);
    });

    it("EasyType.isArrayOfFalsity('hello world') should be false", function () {
        expect(EasyType.isArrayOfFalsity("hello world")).to.equal(false);
    });

    it("EasyType.isArrayOfFalsity([]) should be false", function () {
        expect(EasyType.isArrayOfFalsity([])).to.equal(false);
    });

    it("EasyType.isArrayOfFalsity(['0', 1, false]) should be false", function () {
        expect(EasyType.isArrayOfFalsity(['0', 1, false])).to.equal(false);
    });

    it("EasyType.isArrayOfFalsity(['0', '1', '2']) should be false", function () {
        expect(EasyType.isArrayOfFalsity(['0', '1', '2'])).to.equal(false);
    });

    it("EasyType.isArrayOfFalsity([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) should be false", function () {
        expect(EasyType.isArrayOfFalsity([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])).to.equal(false);
    });

    it("EasyType.isArrayOfFalsity([false, true, false]) should be false", function () {
        expect(EasyType.isArrayOfFalsity([false, true, false])).to.equal(false);
    });

    it("EasyType.isArrayOfFalsity([false, false, false]) should be true", function () {
        expect(EasyType.isArrayOfFalsity([false, false, false])).to.equal(true);
    });

    it("EasyType.isArrayOfFalsity([null, null, null]) should be true", function () {
        expect(EasyType.isArrayOfFalsity([null, null, null])).to.equal(true);
    });

    it("EasyType.isArrayOfFalsity([0, 0, 0]) should be true", function () {
        expect(EasyType.isArrayOfFalsity([0, 0, 0])).to.equal(true);
    });

    it("EasyType.isArrayOfFalsity([NaN, NaN, NaN]) should be true", function () {
        expect(EasyType.isArrayOfFalsity([NaN, NaN, NaN])).to.equal(true);
    });

    it("EasyType.isArrayOfFalsity(['', '', '']) should be true", function () {
        expect(EasyType.isArrayOfFalsity(['', '', ''])).to.equal(true);
    });

    it("EasyType.isArrayOfFalsity([undefined, undefined, undefined]) should be true", function () {
        expect(EasyType.isArrayOfFalsity([undefined, undefined, undefined])).to.equal(true);
    });

    it("EasyType.isArrayOfFalsity([null, false, false]) should be true", function () {
        expect(EasyType.isArrayOfFalsity([null, false, NaN])).to.equal(true);
    });

    it("EasyType.isArrayOfFalsity([undefined, false, false]) should be true", function () {
        expect(EasyType.isArrayOfFalsity([undefined, false, 0])).to.equal(true);
    });

    it("EasyType.isArrayOfFalsity([null, false, undefined, NaN, 0, '']) should be true", function () {
        expect(EasyType.isArrayOfFalsity([null, false, undefined, NaN, 0, ''])).to.equal(true);
    });


});
