import { DataStore } from "notarealdb" // The Fake Node Database

const store:DataStore = new DataStore('./data')

export default {students:store.collection('students'), 
colleges:store.collection('students')}


