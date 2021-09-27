// Server Based Implementation of GraphQL

// import express from 'express' // For the backend
// import { ApolloServer, gql } from 'apollo-server-express'


// // const typeEfs = gql 

// const typeDefs:any = gql `type Query{
//     hello: String
// }`;

// const resolvers = {
//     Query: {
//         hello: () => 'Hello world',
//     },
// };

// const server = new ApolloServer({typeDefs, resolvers})

// const app:any = express()
// server.applyMiddleware({app})

// //To query write {hello} since there is no query name
// app.listen({port:4000}, () =>   console.log('Now browse to http://localhost:4000' + server.graphqlPath)
// )