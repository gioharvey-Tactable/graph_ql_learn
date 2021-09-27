import express from 'express'
import fs from 'fs'
import { ApolloServer, gql } from 'apollo-server-express'
import http from 'http'
import resolvers from './resolver'

const port = process.env.PORT || 9000 // Node JS process



const startApolloServer = async():Promise<void> => {
    const app = express()
    // const httpServer = http.createServer()
    const typeDefs = fs.readFileSync('./schema_hello.graphql', {encoding:'utf-8'}) //encoding is needed 
    const server = new ApolloServer({typeDefs, resolvers})
    await server.start();

    server.applyMiddleware({app})
    app.listen({port:port}, () => console.log(`Now browse to http://localhost:${port}${server.graphqlPath}`))
}

startApolloServer()