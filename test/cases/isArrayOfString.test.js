const chai = require("chai");
const EasyType = require("../../dist/easytype");

const { expect } = chai;

describe("isArrayOfString：", function () {
    it("EasyType.isArrayOfString(null) should be false", function () {
        expect(EasyType.isArrayOfString(null)).to.equal(false);
    });

    it("EasyType.isArrayOfString(undefined) should be false", function () {
        expect(EasyType.isArrayOfString(undefined)).to.equal(false);
    });

    it("EasyType.isArrayOfString(false) should be false", function () {
        expect(EasyType.isArrayOfString(false)).to.equal(false);
    });

    it("EasyType.isArrayOfString(true) should be false", function () {
        expect(EasyType.isArrayOfString(true)).to.equal(false);
    });

    it("EasyType.isArrayOfString(0) should be false", function () {
        expect(EasyType.isArrayOfString(0)).to.equal(false);
    });

    it("EasyType.isArrayOfString('hello world') should be false", function () {
        expect(EasyType.isArrayOfString("hello world")).to.equal(false);
    });

    it("EasyType.isArrayOfString([]) should be false", function () {
        expect(EasyType.isArrayOfString([])).to.equal(false);
    });

    it("EasyType.isArrayOfString(['0', 1, false]) should be false", function () {
        expect(EasyType.isArrayOfString(['0', 1, false])).to.equal(false);
    });

    it("EasyType.isArrayOfString([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) should be false", function () {
        expect(EasyType.isArrayOfString([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])).to.equal(false);
    });

    it("EasyType.isArrayOfString(['0', '1', '2']) should be true", function () {
        expect(EasyType.isArrayOfString(['0', '1', '2'])).to.equal(true);
    });
});
