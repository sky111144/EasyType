const chai = require("chai");
const EasyType = require("../../dist/easytype");

const { expect } = chai;

describe("isPromise：", function () {
    it("EasyType.isPromise(null) should be false", function () {
        expect(EasyType.isPromise(null)).to.equal(false);
    });

    it("EasyType.isPromise(undefined) should be false", function () {
        expect(EasyType.isPromise(undefined)).to.equal(false);
    });

    it("EasyType.isPromise(false) should be false", function () {
        expect(EasyType.isPromise(false)).to.equal(false);
    });

    it("EasyType.isPromise(true) should be false", function () {
        expect(EasyType.isPromise(true)).to.equal(false);
    });

    it("EasyType.isPromise(0) should be false", function () {
        expect(EasyType.isPromise(0)).to.equal(false);
    });

    it("EasyType.isPromise('hello world') should be false", function () {
        expect(EasyType.isPromise("hello world")).to.equal(false);
    });

    it("EasyType.isPromise({}) should be false", function () {
        expect(EasyType.isPromise({})).to.equal(false);
    });

    it("EasyType.isPromise(Promise) should be false", function () {
        expect(EasyType.isPromise(Promise)).to.equal(false);
    });

    it("EasyType.isPromise(new Promise(function () {})) should be true", function () {
        expect(EasyType.isPromise( new Promise(function () {}) )).to.equal(true);
    });

});
