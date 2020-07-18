const chai = require("chai");
const EasyType = require("../../dist/easytype");

const { expect } = chai;

describe("isArray：", function () {
    it("EasyType.isArray(null) should be false", function () {
        expect(EasyType.isArray(null)).to.equal(false);
    });

    it("EasyType.isArray(undefined) should be false", function () {
        expect(EasyType.isArray(undefined)).to.equal(false);
    });

    it("EasyType.isArray(false) should be false", function () {
        expect(EasyType.isArray(false)).to.equal(false);
    });

    it("EasyType.isArray(true) should be false", function () {
        expect(EasyType.isArray(true)).to.equal(false);
    });

    it("EasyType.isArray(0) should be false", function () {
        expect(EasyType.isArray(0)).to.equal(false);
    });

    it("EasyType.isArray('hello world') should be false", function () {
        expect(EasyType.isArray("hello world")).to.equal(false);
    });

    it("EasyType.isArray([]) should be true", function () {
        expect(EasyType.isArray([])).to.equal(true);
    });

    it("EasyType.isArray([1,2,3,4,5]) should be true", function () {
        expect(EasyType.isArray([1,2,3,4,5])).to.equal(true);
    });

});
