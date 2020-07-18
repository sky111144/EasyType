const chai = require("chai");
const EasyType = require("../../dist/easytype");

const { expect } = chai;

describe("isSet：", function () {
    it("EasyType.isSet(null) should be false", function () {
        expect(EasyType.isSet(null)).to.equal(false);
    });

    it("EasyType.isSet(undefined) should be false", function () {
        expect(EasyType.isSet(undefined)).to.equal(false);
    });

    it("EasyType.isSet(false) should be false", function () {
        expect(EasyType.isSet(false)).to.equal(false);
    });

    it("EasyType.isSet(true) should be false", function () {
        expect(EasyType.isSet(true)).to.equal(false);
    });

    it("EasyType.isSet(0) should be false", function () {
        expect(EasyType.isSet(0)).to.equal(false);
    });

    it("EasyType.isSet('hello world') should be false", function () {
        expect(EasyType.isSet("hello world")).to.equal(false);
    });

    it("EasyType.isSet([]) should be false", function () {
        expect(EasyType.isSet([])).to.equal(false);
    });

    it("EasyType.isSet(/hello world/g) should be false", function () {
        expect(EasyType.isSet(/hello world/g)).to.equal(false);
    });

    it("EasyType.isSet(new Set()) should be true", function () {
        expect(EasyType.isSet(new Set())).to.equal(true);
    });

});
