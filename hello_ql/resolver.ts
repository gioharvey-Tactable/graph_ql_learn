import { DataStore } from "notarealdb" // The Fake Node Database

const store:DataStore = new DataStore('../data')


const resolverObj:any = {
    Query: {
        greeting: () => 'Hello GraphQL tutorials point',
        elements: () => ['1', '2'],
        studs: store.collection('students').list(),
    }
}

export default resolverObj