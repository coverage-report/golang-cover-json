"use strict";

var assert = require("assert");
var parse = require("../src");
var path = require("path");

describe("Check if it can parse a golang cover file", function () {
    it("should parse a file", function (done) {
        parse.parseFile(path.join(__dirname, "assets", "cover.out")).then(function (result) {
            assert.equal(result.length, 5);
            assert.equal(result[ 0 ].lines.found, 210);
            assert.equal(result[ 0 ].lines.hit, 111);
            assert.equal(result[ 0 ].lines.details[ 0 ].line, 44);
            assert.equal(result[ 0 ].lines.details[ 0 ].hit, 0);
            done();
        }).catch(function (err) {
            assert.equal(err, null);
            done();
        });
    });
});
