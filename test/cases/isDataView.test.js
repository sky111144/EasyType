const chai = require("chai");
const EasyType = require("../../dist/easytype");

const { expect } = chai;

describe("isDataView：", function () {
    it("EasyType.isDataView(null) should be false", function () {
        expect(EasyType.isDataView(null)).to.equal(false);
    });

    it("EasyType.isDataView(undefined) should be false", function () {
        expect(EasyType.isDataView(undefined)).to.equal(false);
    });

    it("EasyType.isDataView(false) should be false", function () {
        expect(EasyType.isDataView(false)).to.equal(false);
    });

    it("EasyType.isDataView(true) should be false", function () {
        expect(EasyType.isDataView(true)).to.equal(false);
    });

    it("EasyType.isDataView(0) should be false", function () {
        expect(EasyType.isDataView(0)).to.equal(false);
    });

    it("EasyType.isDataView('hello world') should be false", function () {
        expect(EasyType.isDataView("hello world")).to.equal(false);
    });

    it("EasyType.isDataView([]) should be false", function () {
        expect(EasyType.isDataView([])).to.equal(false);
    });

    it("EasyType.isDataView([1,2,3,4,5]) should be false", function () {
        expect(EasyType.isDataView([1,2,3,4,5])).to.equal(false);
    });

    it("EasyType.isDataView(new ArrayBuffer()) should be false", function () {
        expect(EasyType.isDataView(new ArrayBuffer())).to.equal(false);
    });

    it("EasyType.isDataView(new DataView(new ArrayBuffer())) should be true", function () {
        expect(EasyType.isDataView(new DataView(new ArrayBuffer()))).to.equal(true);
    });

});
