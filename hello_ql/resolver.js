"use strict";
exports.__esModule = true;
var notarealdb_1 = require("notarealdb"); // The Fake Node Database
var store = new notarealdb_1.DataStore('../data');
var resolverObj = {
    Query: {
        greeting: function () { return 'Hello GraphQL tutorials point'; },
        elements: function () { return ['1', '2']; },
        studs: store.collection('students').list()
    }
};
exports["default"] = resolverObj;
