const chai = require("chai");
const EasyType = require("../../dist/easytype");

const { expect } = chai;

describe("isArrayOfBigInt：", function () {
    it("EasyType.isArrayOfBigInt(null) should be false", function () {
        expect(EasyType.isArrayOfBigInt(null)).to.equal(false);
    });

    it("EasyType.isArrayOfBigInt(undefined) should be false", function () {
        expect(EasyType.isArrayOfBigInt(undefined)).to.equal(false);
    });

    it("EasyType.isArrayOfBigInt(false) should be false", function () {
        expect(EasyType.isArrayOfBigInt(false)).to.equal(false);
    });

    it("EasyType.isArrayOfBigInt(true) should be false", function () {
        expect(EasyType.isArrayOfBigInt(true)).to.equal(false);
    });

    it("EasyType.isArrayOfBigInt(0) should be false", function () {
        expect(EasyType.isArrayOfBigInt(0)).to.equal(false);
    });

    it("EasyType.isArrayOfBigInt('hello world') should be false", function () {
        expect(EasyType.isArrayOfBigInt("hello world")).to.equal(false);
    });

    it("EasyType.isArrayOfBigInt([]) should be false", function () {
        expect(EasyType.isArrayOfBigInt([])).to.equal(false);
    });

    it("EasyType.isArrayOfBigInt(['0', 1, false]) should be false", function () {
        expect(EasyType.isArrayOfBigInt(['0', 1, false])).to.equal(false);
    });

    it("EasyType.isArrayOfBigInt([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) should be false", function () {
        expect(EasyType.isArrayOfBigInt([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])).to.equal(false);
    });

    it("EasyType.isArrayOfBigInt(['0', '1', '2']) should be false", function () {
        expect(EasyType.isArrayOfBigInt(['0', '1', '2'])).to.equal(false);
    });

    it("EasyType.isArrayOfBigInt([BigInt(-10000), BigInt(0), BigInt(1000)]) should be true", function () {
        expect(EasyType.isArrayOfBigInt([BigInt(-10000), BigInt(0), BigInt(1000)])).to.equal(true);
    });
});
