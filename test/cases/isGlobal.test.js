const chai = require("chai");
const EasyType = require("../../dist/easytype");

const { expect } = chai;

describe("isGlobal：", function () {
    it("EasyType.isGlobal(null) should be false", function () {
        expect(EasyType.isGlobal(null)).to.equal(false);
    });

    it("EasyType.isGlobal(undefined) should be false", function () {
        expect(EasyType.isGlobal(undefined)).to.equal(false);
    });

    it("EasyType.isGlobal(false) should be false", function () {
        expect(EasyType.isGlobal(false)).to.equal(false);
    });

    it("EasyType.isGlobal(true) should be false", function () {
        expect(EasyType.isGlobal(true)).to.equal(false);
    });

    it("EasyType.isGlobal(0) should be false", function () {
        expect(EasyType.isGlobal(0)).to.equal(false);
    });

    it("EasyType.isGlobal('hello world') should be false", function () {
        expect(EasyType.isGlobal("hello world")).to.equal(false);
    });

    it("EasyType.isGlobal([]) should be false", function () {
        expect(EasyType.isGlobal([])).to.equal(false);
    });

    it("EasyType.isGlobal(global) should be true", function () {
        expect(EasyType.isGlobal(global)).to.equal(true);
    });

});
