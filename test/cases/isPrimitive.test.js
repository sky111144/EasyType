const chai = require("chai");
const EasyType = require("../../dist/easytype");

const { expect } = chai;

describe("isPrimitive：", function () {
    it("EasyType.isPrimitive(null) should be true", function () {
        expect(EasyType.isPrimitive(null)).to.equal(true);
    });

    it("EasyType.isPrimitive(undefined) should be true", function () {
        expect(EasyType.isPrimitive(undefined)).to.equal(true);
    });

    it("EasyType.isPrimitive(false) should be true", function () {
        expect(EasyType.isPrimitive(false)).to.equal(true);
    });

    it("EasyType.isPrimitive(0) should be true", function () {
        expect(EasyType.isPrimitive(0)).to.equal(true);
    });

    it("EasyType.isPrimitive('hello world') should be true", function () {
        expect(EasyType.isPrimitive(NaN)).to.equal(true);
    });

    it("EasyType.isPrimitive(Symbol(456123)) should be true", function () {
        expect(EasyType.isPrimitive(Symbol(456123))).to.equal(true);
    });

    it("EasyType.isPrimitive(BigInt(123)) should be true", function () {
        expect(EasyType.isPrimitive(BigInt(123))).to.equal(true);
    });

});
