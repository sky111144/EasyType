const chai = require("chai");
const EasyType = require("../../dist/easytype");

const { expect } = chai;

describe("isMath：", function () {
    it("EasyType.isMath(null) should be false", function () {
        expect(EasyType.isMath(null)).to.equal(false);
    });

    it("EasyType.isMath(undefined) should be false", function () {
        expect(EasyType.isMath(undefined)).to.equal(false);
    });

    it("EasyType.isMath(false) should be false", function () {
        expect(EasyType.isMath(false)).to.equal(false);
    });

    it("EasyType.isMath(true) should be false", function () {
        expect(EasyType.isMath(true)).to.equal(false);
    });

    it("EasyType.isMath(0) should be false", function () {
        expect(EasyType.isMath(0)).to.equal(false);
    });

    it("EasyType.isMath('hello world') should be false", function () {
        expect(EasyType.isMath("hello world")).to.equal(false);
    });

    it("EasyType.isMath([]) should be false", function () {
        expect(EasyType.isMath([])).to.equal(false);
    });

    it("EasyType.isMath(Math) should be true", function () {
        expect(EasyType.isMath(Math)).to.equal(true);
    });
});
