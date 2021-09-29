"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.Student = void 0;
var db_1 = __importDefault(require("./db"));
var Query = {
    greeting: function () { return 'Hello There'; },
    students: function () { return db_1["default"].students.list(); },
    studentById: function (root, args, context, info) {
        console.log(root);
        return db_1["default"].students.get(args.id);
    },
    // Add values to args using a variable
    sayHello: function (root, args, context, info) {
        console.log(args.name);
        return "Hi " + args.name + " GraphQL server says Hello to you!!";
    },
    setFavouriteColor: function (root, args, context, info) {
        return "Your Favourite Colour is " + args.color;
    }
};
// For each single student object retured, reolver is invoked
// note root is the query object itself
// That means in this case the query object is the Student and then the fields under it
exports.Student = {
    fullName: function (root, args, context, info) {
        return root.firstName + ":" + root.lastName;
    },
    college: function (root) {
        return db_1["default"].colleges.get(root.collegeId);
    }
};
var Mutation = {
    createStudent: function (root, args, context, info) {
        return db_1["default"].students.create({
            collegeId: args.collegeId,
            firstName: args.firstName,
            lastName: args.lastName
        });
    },
    addStudent_returns_obj: function (root, args, context, info) {
        var id = db_1["default"].students.create({
            collegeId: args.collegeId,
            firstName: args.firstName,
            lastName: args.lastName
        });
        return db_1["default"].students.get(id);
    },
    // The custom validator
    signUp: function (root, args, context, info) {
        var _a = args.input, email = _a.email, password = _a.password, firstName = _a.firstName;
        // Regular expression
        var emailExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var isValidEmail = emailExpression.test(String(email).toLowerCase());
        if (!isValidEmail) {
            throw new Error("Email not in proper format");
        }
        if (firstName.length > 15) {
            throw new Error("firstName should be less than 15 characters");
        }
        if (password.length < 8) {
            throw new Error("password should be minimum of 8 characters");
        }
        return "success";
    }
};
exports["default"] = { Query: Query, Student: exports.Student, Mutation: Mutation }; // We export the merged resolvers
// export default {Query} // We export the merged resolvers
