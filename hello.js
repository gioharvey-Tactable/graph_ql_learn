"use strict";
exports.__esModule = true;
var graphql_1 = require("graphql");
// Created the scheme with type of query
var schema = (0, graphql_1.buildSchema)("type Query {\n        hello: String\n    }");
// The data to pass to query
var root = {
    hello: function () {
        'Hello World';
    }
};
(0, graphql_1.graphql)(schema, '{ hello }', root).then(function (response) { return console.log(response); });
