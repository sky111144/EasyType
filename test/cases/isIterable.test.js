const chai = require("chai");
const EasyType = require("../../dist/easytype");

const { expect } = chai;

describe("isIterable：", function () {
    it("EasyType.isIterable(null) should be false", function () {
        expect(EasyType.isIterable(null)).to.equal(false);
    });

    it("EasyType.isIterable(undefined) should be false", function () {
        expect(EasyType.isIterable(undefined)).to.equal(false);
    });

    it("EasyType.isIterable(false) should be false", function () {
        expect(EasyType.isIterable(false)).to.equal(false);
    });

    it("EasyType.isIterable(true) should be false", function () {
        expect(EasyType.isIterable(true)).to.equal(false);
    });

    it("EasyType.isIterable(0) should be false", function () {
        expect(EasyType.isIterable(0)).to.equal(false);
    });

    it("EasyType.isIterable('hello world') should be false", function () {
        expect(EasyType.isIterable("hello world")).to.equal(false);
    });

    it("EasyType.isIterable([]) should be true", function () {
        expect(EasyType.isIterable([])).to.equal(true);
    });

    it("EasyType.isIterable(new Set()) should be true", function () {
        expect(EasyType.isIterable(new Set())).to.equal(true);
    });

    it("EasyType.isIterable(new Map()) should be true", function () {
        expect(EasyType.isIterable(new Map())).to.equal(true);
    });

});
