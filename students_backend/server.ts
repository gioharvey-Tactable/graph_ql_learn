import express, { Express } from 'express'
import fs from 'fs'
import { ApolloServer, gql } from 'apollo-server-express'
import resolvers from './resolver'

const port:string|number = process.env.PORT||9000

const startApolloServer = async():Promise<void> => {
    const app = express()
    const typeDefs = fs.readFileSync("./schema.graphql", {encoding:"utf-8"})

    const server = new ApolloServer({typeDefs, resolvers})

    await server.start() //server is a promise object
    server.applyMiddleware({app})

    //Start app
    app.listen({port:port}, () => console.log(`Now browse to http://localhost:${port}${server.graphqlPath}`))
} 

startApolloServer()