const chai = require("chai");
const EasyType = require("../../dist/easytype");

const { expect } = chai;

describe("isArrayOfNull：", function () {
    it("EasyType.isArrayOfNull(null) should be false", function () {
        expect(EasyType.isArrayOfNull(null)).to.equal(false);
    });

    it("EasyType.isArrayOfNull(undefined) should be false", function () {
        expect(EasyType.isArrayOfNull(undefined)).to.equal(false);
    });

    it("EasyType.isArrayOfNull(false) should be false", function () {
        expect(EasyType.isArrayOfNull(false)).to.equal(false);
    });

    it("EasyType.isArrayOfNull(true) should be false", function () {
        expect(EasyType.isArrayOfNull(true)).to.equal(false);
    });

    it("EasyType.isArrayOfNull(0) should be false", function () {
        expect(EasyType.isArrayOfNull(0)).to.equal(false);
    });

    it("EasyType.isArrayOfNull('hello world') should be false", function () {
        expect(EasyType.isArrayOfNull("hello world")).to.equal(false);
    });

    it("EasyType.isArrayOfNull([]) should be false", function () {
        expect(EasyType.isArrayOfNull([])).to.equal(false);
    });

    it("EasyType.isArrayOfNull(['0', 1, false]) should be false", function () {
        expect(EasyType.isArrayOfNull(['0', 1, false])).to.equal(false);
    });

    it("EasyType.isArrayOfNull(['0', '1', '2']) should be false", function () {
        expect(EasyType.isArrayOfNull(['0', '1', '2'])).to.equal(false);
    });

    it("EasyType.isArrayOfNull([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) should be false", function () {
        expect(EasyType.isArrayOfNull([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])).to.equal(false);
    });

    it("EasyType.isArrayOfNull([false, true, false]) should be false", function () {
        expect(EasyType.isArrayOfNull([false, true, false])).to.equal(false);
    });

    it("EasyType.isArrayOfNull([null, null, null]) should be true", function () {
        expect(EasyType.isArrayOfNull([null, null, null])).to.equal(true);
    });
});
