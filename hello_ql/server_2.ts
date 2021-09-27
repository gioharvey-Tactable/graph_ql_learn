import express from 'express'
import fs from 'fs'
import { ApolloServer, gql } from 'apollo-server-express'
import http from 'http'
import resolvers from './resolver'
import { makeExecutableSchema } from 'graphql-tools'
import resolverObj from './resolver'

const port = process.env.PORT || 9000 // Node JS process



const startApolloServer = async():Promise<void> => {
    const app = express()
    // const httpServer = http.createServer()
    const typeDefs:string = fs.readFileSync('./schema_hello.graphql', {encoding:'utf-8'}) //encoding is needed 
    
    // console.log(typeof(typeDefs))
    const jsSchema = makeExecutableSchema(
        {
          typeDefs:typeDefs,
          resolvers: resolvers,
        }
    )
    // console.log(jsSchema)


    const server = new ApolloServer({typeDefs, resolvers})
    // const server = new ApolloServer({jsSchema})
    await server.start();

    server.applyMiddleware({app})
    app.listen({port:port}, () => console.log(`Now browse to http://localhost:${port}${server.graphqlPath}`))
}

startApolloServer()