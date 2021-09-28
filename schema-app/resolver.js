"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var db_1 = __importDefault(require("../db"));
var Query = {
    greeting: function () { return 'Hello There'; },
    students: function () { return db_1["default"].students.list(); }
};
exports["default"] = { Query: Query };
