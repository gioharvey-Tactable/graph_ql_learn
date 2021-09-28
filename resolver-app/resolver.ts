import db from '../db'

const Query = {
    greeting: () => 'Hello There',
    students: () => db.students.list(),
    studentById: (root:any, args:any, context:any, info:any) => {
        console.log(root)
        return db.students.get(args.id)
    }
}
export default {Query}