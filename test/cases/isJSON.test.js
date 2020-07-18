const chai = require("chai");
const EasyType = require("../../dist/easytype");

const { expect } = chai;

describe("isJSON：", function () {
    it("EasyType.isJSON(null) should be false", function () {
        expect(EasyType.isJSON(null)).to.equal(false);
    });

    it("EasyType.isJSON(undefined) should be false", function () {
        expect(EasyType.isJSON(undefined)).to.equal(false);
    });

    it("EasyType.isJSON(false) should be false", function () {
        expect(EasyType.isJSON(false)).to.equal(false);
    });

    it("EasyType.isJSON(true) should be false", function () {
        expect(EasyType.isJSON(true)).to.equal(false);
    });

    it("EasyType.isJSON(0) should be false", function () {
        expect(EasyType.isJSON(0)).to.equal(false);
    });

    it("EasyType.isJSON('hello world') should be false", function () {
        expect(EasyType.isJSON("hello world")).to.equal(false);
    });

    it("EasyType.isJSON({}) should be false", function () {
        expect(EasyType.isJSON({})).to.equal(false);
    });

    it("EasyType.isJSON('{}') should be false", function () {
        expect(EasyType.isJSON("{}")).to.equal(false);
    });

    it("EasyType.isJSON(JSON) should be true", function () {
        expect(EasyType.isJSON(JSON)).to.equal(true);
    });

});
