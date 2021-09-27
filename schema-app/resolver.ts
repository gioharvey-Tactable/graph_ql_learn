import db from '../db'

const Query = {
    greeting: () => 'Hello There',
    students: () => db.students.list()
}
export default {Query}