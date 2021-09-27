"use strict";
exports.__esModule = true;
var notarealdb_1 = require("notarealdb"); // The Fake Node Database
var store = new notarealdb_1.DataStore('./data');
exports["default"] = { students: store.collection('students'),
    colleges: store.collection('students') };
