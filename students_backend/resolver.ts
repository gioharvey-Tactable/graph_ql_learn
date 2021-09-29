// Create the Backend for the Student Services
import { Sign } from "crypto"
import db from "./db"
import { v4 as uuidv4} from "uuid";
import { Entity } from "notarealdb";


//Query

const Query:Object = {
    students: ()=> (db.students.list()), // The students
    // We are just passign an argument
    studentById: (root:any, args:any, context:any, info:any) => (db.students.get(args.id))
}

//Mutation

const Mutation:object = {
    signUp: (root:any, args:any, context:any, info:any) => {
        const {id, firstName, lastName,email,password,collegeId} = args.new_stud //because signUp argument 
        
        // Regular Expression
        const emailExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        const isValidEmail = emailExpression.test(String(email).toLowerCase())

        if (!isValidEmail){
            throw new Error("Email not in proper format")
        }

        if (password.length < 8){
            throw new Error ("Password is too short")
        }

        const set_id:string = db.students.create({
            id: uuidv4(),
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            collegeId: collegeId
        })

        return set_id
    },
    deleteStudentById: (root:any, args:any, context:any, info:any) => {
        const student = db.students.get(args.id)
        const {firstName, lastName}:any = student
        db.students.delete(args.id)
        return `The student with ${firstName}-${lastName}`
    },
    // updateStudent: (root:any, args:any, context:any, info:any) => {
    //     const student = db.students.get(args.id)
    //     const {firstName, lastName}:any = student
    //     db.students.delete(args.id)
    //     return `The student with ${firstName}-${lastName}`
    // }
}

// Objects

const Student:Object = {
    // We use root since it is the student itself
    fullName: (root:any) => `${root.firstName} ${root.lastName}`,
    college: (root:any) => (db.colleges.get(root.collegeId))
}

export default {Query, Mutation, Student}