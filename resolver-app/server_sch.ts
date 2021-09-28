import express, { Express } from 'express'
import fs from 'fs'
import { ApolloServer, gql } from 'apollo-server-express'
import resolvers from './resolver'
// import { makeExecutableSchema } from 'graphql-tools';

const port = process.env.PORT || 9000

const startApolloServer = async ():Promise<void> => {
    const app:Express = express()
    const typeDefs = fs.readFileSync('./schema.graphql', {encoding:'utf-8'})
    const server = new ApolloServer({typeDefs, resolvers})
    
    await server.start();
    server.applyMiddleware({app})
    app.listen({port:port}, () => console.log(`Now browse to http://localhost:${port}${server.graphqlPath}`))

}
startApolloServer()