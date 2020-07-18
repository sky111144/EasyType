const chai = require("chai");
const EasyType = require("../../dist/easytype");

const { expect } = chai;

describe("isRegExp：", function () {
    it("EasyType.isRegExp(null) should be false", function () {
        expect(EasyType.isRegExp(null)).to.equal(false);
    });

    it("EasyType.isRegExp(undefined) should be false", function () {
        expect(EasyType.isRegExp(undefined)).to.equal(false);
    });

    it("EasyType.isRegExp(false) should be false", function () {
        expect(EasyType.isRegExp(false)).to.equal(false);
    });

    it("EasyType.isRegExp(true) should be false", function () {
        expect(EasyType.isRegExp(true)).to.equal(false);
    });

    it("EasyType.isRegExp(0) should be false", function () {
        expect(EasyType.isRegExp(0)).to.equal(false);
    });

    it("EasyType.isRegExp('hello world') should be false", function () {
        expect(EasyType.isRegExp("hello world")).to.equal(false);
    });

    it("EasyType.isRegExp([]) should be false", function () {
        expect(EasyType.isRegExp([])).to.equal(false);
    });

    it("EasyType.isRegExp(/hello world/g) should be true", function () {
        expect(EasyType.isRegExp(/hello world/g)).to.equal(true);
    });

});
