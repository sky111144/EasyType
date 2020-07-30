const chai = require("chai");
const EasyType = require("../../dist/easytype");

const { expect } = chai;

describe("isEmptyObject：", function () {
    it("EasyType.isEmptyObject(null) should be false", function () {
        expect(EasyType.isEmptyObject(null)).to.equal(false);
    });

    it("EasyType.isEmptyObject(undefined) should be false", function () {
        expect(EasyType.isEmptyObject(undefined)).to.equal(false);
    });

    it("EasyType.isEmptyObject(false) should be false", function () {
        expect(EasyType.isEmptyObject(false)).to.equal(false);
    });

    it("EasyType.isEmptyObject(true) should be false", function () {
        expect(EasyType.isEmptyObject(true)).to.equal(false);
    });

    it("EasyType.isEmptyObject(0) should be false", function () {
        expect(EasyType.isEmptyObject(0)).to.equal(false);
    });

    it("EasyType.isEmptyObject('hello world') should be false", function () {
        expect(EasyType.isEmptyObject("hello world")).to.equal(false);
    });

    it("EasyType.isEmptyObject([]) should be false", function () {
        expect(EasyType.isEmptyObject([])).to.equal(false);
    });

    it("EasyType.isEmptyObject([1,2,3,4,5]) should be false", function () {
        expect(EasyType.isEmptyObject([1,2,3,4,5])).to.equal(false);
    });

    it("EasyType.isEmptyObject({ key: 1 }) should be false", function () {
        expect(EasyType.isEmptyObject({ key: 1 })).to.equal(false);
    });

    it("EasyType.isEmptyObject({}) should be true", function () {
        expect(EasyType.isEmptyObject({})).to.equal(true);
    });

});
