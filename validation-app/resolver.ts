import db from './db'

const Query = {
    greeting: () => 'Hello There',
    students: () => db.students.list(),
    studentById: (root:any, args:any, context:any, info:any) => {
        console.log(root)
        return db.students.get(args.id)
    },
    // Add values to args using a variable
   sayHello: (root:any, args:any, context:any, info:any) => {
       console.log(args.name)
       return `Hi ${args.name} GraphQL server says Hello to you!!`
   },
   setFavouriteColor: (root:any,args:any,context:any,info:any) => {
       return `Your Favourite Colour is ${args.color}`
   }
}

// For each single student object retured, reolver is invoked
// note root is the query object itself
// That means in this case the query object is the Student and then the fields under it

export const Student:Object = { // This takes place for the student object
    fullName:(root:any, args:any, context:any, info:any) => {
        return `${root.firstName}:${root.lastName}`
    },
    college: (root:any) => {
        return db.colleges.get(root.collegeId)
    }
}

const Mutation = {
    createStudent: (root:any, args:any, context:any, info:any) => {
        return db.students.create({
            collegeId:args.collegeId,
            firstName:args.firstName,
            lastName:args.lastName,
        })
    },
    addStudent_returns_obj:(root:any, args:any, context:any, info:any)=>{
        const id:string = db.students.create({
            collegeId:args.collegeId,
            firstName:args.firstName,
            lastName:args.lastName,
        })
        return db.students.get(id)
    },

    // The custom validator
    signUp: (root:any, args:any, context:any, info:any):String|Error => {
        const {email, password, firstName} = args.input
        // Regular expression
        const emailExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        const isValidEmail = emailExpression.test(String(email).toLowerCase())

        if (!isValidEmail){
            throw new Error("Email not in proper format")
        }
        

        if (firstName.length > 15){
            throw new Error("firstName should be less than 15 characters")
        }
        

        if (password.length < 8){
            throw new Error ("password should be minimum of 8 characters")
        }
        
        return "success"
    }
}

export default {Query, Student, Mutation} // We export the merged resolvers
// export default {Query} // We export the merged resolvers