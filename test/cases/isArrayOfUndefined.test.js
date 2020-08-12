const chai = require("chai");
const EasyType = require("../../dist/easytype");

const { expect } = chai;

describe("isArrayOfUndefined：", function () {
    it("EasyType.isArrayOfUndefined(null) should be false", function () {
        expect(EasyType.isArrayOfUndefined(null)).to.equal(false);
    });

    it("EasyType.isArrayOfUndefined(undefined) should be false", function () {
        expect(EasyType.isArrayOfUndefined(undefined)).to.equal(false);
    });

    it("EasyType.isArrayOfUndefined(false) should be false", function () {
        expect(EasyType.isArrayOfUndefined(false)).to.equal(false);
    });

    it("EasyType.isArrayOfUndefined(true) should be false", function () {
        expect(EasyType.isArrayOfUndefined(true)).to.equal(false);
    });

    it("EasyType.isArrayOfUndefined(0) should be false", function () {
        expect(EasyType.isArrayOfUndefined(0)).to.equal(false);
    });

    it("EasyType.isArrayOfUndefined('hello world') should be false", function () {
        expect(EasyType.isArrayOfUndefined("hello world")).to.equal(false);
    });

    it("EasyType.isArrayOfUndefined([]) should be false", function () {
        expect(EasyType.isArrayOfUndefined([])).to.equal(false);
    });

    it("EasyType.isArrayOfUndefined(['0', 1, false]) should be false", function () {
        expect(EasyType.isArrayOfUndefined(['0', 1, false])).to.equal(false);
    });

    it("EasyType.isArrayOfUndefined([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) should be false", function () {
        expect(EasyType.isArrayOfUndefined([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])).to.equal(false);
    });

    it("EasyType.isArrayOfUndefined(['0', '1', '2']) should be false", function () {
        expect(EasyType.isArrayOfUndefined(['0', '1', '2'])).to.equal(false);
    });

    it("EasyType.isArrayOfUndefined([undefined, undefined, undefined]) should be true", function () {
        expect(EasyType.isArrayOfUndefined([undefined, undefined, undefined])).to.equal(true);
    });

});
