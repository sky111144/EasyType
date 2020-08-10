const chai = require("chai");
const EasyType = require("../../dist/easytype");

const { expect } = chai;

describe("isArrayOfNumber：", function () {
    it("EasyType.isArrayOfNumber(null) should be false", function () {
        expect(EasyType.isArrayOfNumber(null)).to.equal(false);
    });

    it("EasyType.isArrayOfNumber(undefined) should be false", function () {
        expect(EasyType.isArrayOfNumber(undefined)).to.equal(false);
    });

    it("EasyType.isArrayOfNumber(false) should be false", function () {
        expect(EasyType.isArrayOfNumber(false)).to.equal(false);
    });

    it("EasyType.isArrayOfNumber(true) should be false", function () {
        expect(EasyType.isArrayOfNumber(true)).to.equal(false);
    });

    it("EasyType.isArrayOfNumber(0) should be false", function () {
        expect(EasyType.isArrayOfNumber(0)).to.equal(false);
    });

    it("EasyType.isArrayOfNumber('hello world') should be false", function () {
        expect(EasyType.isArrayOfNumber("hello world")).to.equal(false);
    });

    it("EasyType.isArrayOfNumber([]) should be false", function () {
        expect(EasyType.isArrayOfNumber([])).to.equal(false);
    });

    it("EasyType.isArrayOfNumber(['0', 1, false]) should be false", function () {
        expect(EasyType.isArrayOfNumber(['0', 1, false])).to.equal(false);
    });

    it("EasyType.isArrayOfNumber(['0', '1', '2']) should be false", function () {
        expect(EasyType.isArrayOfNumber(['0', '1', '2'])).to.equal(false);
    });

    it("EasyType.isArrayOfNumber([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) should be true", function () {
        expect(EasyType.isArrayOfNumber([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])).to.equal(true);
    });
});
