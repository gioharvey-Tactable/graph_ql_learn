"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var db_1 = __importDefault(require("./db"));
var uuid_1 = require("uuid");
//Query
var Query = {
    students: function () { return (db_1["default"].students.list()); },
    // We are just passign an argument
    studentById: function (root, args, context, info) { return (db_1["default"].students.get(args.id)); }
};
//Mutation
var Mutation = {
    signUp: function (root, args, context, info) {
        var _a = args.new_stud, id = _a.id, firstName = _a.firstName, lastName = _a.lastName, email = _a.email, password = _a.password, collegeId = _a.collegeId; //because signUp argument 
        // Regular Expression
        var emailExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var isValidEmail = emailExpression.test(String(email).toLowerCase());
        if (!isValidEmail) {
            throw new Error("Email not in proper format");
        }
        if (password.length < 8) {
            throw new Error("Password is too short");
        }
        var set_id = db_1["default"].students.create({
            id: (0, uuid_1.v4)(),
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            collegeId: collegeId
        });
        return set_id;
    },
    deleteStudentById: function (root, args, context, info) {
        var student = db_1["default"].students.get(args.id);
        var firstName = student.firstName, lastName = student.lastName;
        db_1["default"].students["delete"](args.id);
        return "The student with " + firstName + "-" + lastName;
    }
};
// Objects
var Student = {
    // We use root since it is the student itself
    fullName: function (root) { return root.firstName + " " + root.lastName; },
    college: function (root) { return (db_1["default"].colleges.get(root.collegeId)); }
};
exports["default"] = { Query: Query, Mutation: Mutation, Student: Student };
