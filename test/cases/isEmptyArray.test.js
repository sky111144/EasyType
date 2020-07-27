const chai = require("chai");
const EasyType = require("../../dist/easytype");

const { expect } = chai;

describe("isEmptyArray：", function () {
    it("EasyType.isEmptyArray(null) should be false", function () {
        expect(EasyType.isEmptyArray(null)).to.equal(false);
    });

    it("EasyType.isEmptyArray(undefined) should be false", function () {
        expect(EasyType.isEmptyArray(undefined)).to.equal(false);
    });

    it("EasyType.isEmptyArray(false) should be false", function () {
        expect(EasyType.isEmptyArray(false)).to.equal(false);
    });

    it("EasyType.isEmptyArray(true) should be false", function () {
        expect(EasyType.isEmptyArray(true)).to.equal(false);
    });

    it("EasyType.isEmptyArray(0) should be false", function () {
        expect(EasyType.isEmptyArray(0)).to.equal(false);
    });

    it("EasyType.isEmptyArray('hello world') should be false", function () {
        expect(EasyType.isEmptyArray("hello world")).to.equal(false);
    });

    it("EasyType.isEmptyArray([]) should be true", function () {
        expect(EasyType.isEmptyArray([])).to.equal(true);
    });

    it("EasyType.isEmptyArray([1,2,3,4,5]) should be false", function () {
        expect(EasyType.isEmptyArray([1,2,3,4,5])).to.equal(false);
    });

});
