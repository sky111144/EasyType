const chai = require("chai");
const EasyType = require("../../dist/easytype");

const { expect } = chai;

describe("isError：", function () {
    it("EasyType.isError(new Error()) should be true", function () {
        expect(EasyType.isError(new Error())).to.equal(true);
    });

    it("EasyType.isError(new EvalError()) should be true", function () {
        expect(EasyType.isError(new EvalError())).to.equal(true);
    });

    it("EasyType.isError(new RangeError()) should be true", function () {
        expect(EasyType.isError(new RangeError())).to.equal(true);
    });

    it("EasyType.isError(new ReferenceError()) should be true", function () {
        expect(EasyType.isError(new ReferenceError())).to.equal(true);
    });

    it("EasyType.isError(new SyntaxError()) should be true", function () {
        expect(EasyType.isError(new SyntaxError())).to.equal(true);
    });

    it("EasyType.isError(new TypeError()) should be true", function () {
        expect(EasyType.isError(new TypeError())).to.equal(true);
    });

    it("EasyType.isError(new URIError()) should be true", function () {
        expect(EasyType.isError(new URIError())).to.equal(true);
    });

});
