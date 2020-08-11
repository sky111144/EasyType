const chai = require("chai");
const EasyType = require("../../dist/easytype");

const { expect } = chai;

describe("isArrayOfBoolean：", function () {
    it("EasyType.isArrayOfBoolean(null) should be false", function () {
        expect(EasyType.isArrayOfBoolean(null)).to.equal(false);
    });

    it("EasyType.isArrayOfBoolean(undefined) should be false", function () {
        expect(EasyType.isArrayOfBoolean(undefined)).to.equal(false);
    });

    it("EasyType.isArrayOfBoolean(false) should be false", function () {
        expect(EasyType.isArrayOfBoolean(false)).to.equal(false);
    });

    it("EasyType.isArrayOfBoolean(true) should be false", function () {
        expect(EasyType.isArrayOfBoolean(true)).to.equal(false);
    });

    it("EasyType.isArrayOfBoolean(0) should be false", function () {
        expect(EasyType.isArrayOfBoolean(0)).to.equal(false);
    });

    it("EasyType.isArrayOfBoolean('hello world') should be false", function () {
        expect(EasyType.isArrayOfBoolean("hello world")).to.equal(false);
    });

    it("EasyType.isArrayOfBoolean([]) should be false", function () {
        expect(EasyType.isArrayOfBoolean([])).to.equal(false);
    });

    it("EasyType.isArrayOfBoolean(['0', 1, false]) should be false", function () {
        expect(EasyType.isArrayOfBoolean(['0', 1, false])).to.equal(false);
    });

    it("EasyType.isArrayOfBoolean(['0', '1', '2']) should be false", function () {
        expect(EasyType.isArrayOfBoolean(['0', '1', '2'])).to.equal(false);
    });

    it("EasyType.isArrayOfBoolean([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) should be false", function () {
        expect(EasyType.isArrayOfBoolean([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])).to.equal(false);
    });

    it("EasyType.isArrayOfBoolean([false, true, false]) should be true", function () {
        expect(EasyType.isArrayOfBoolean([false, true, false])).to.equal(true);
    });
});
