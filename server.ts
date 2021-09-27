import bodyParser from "body-parser"
import cors from "cors"
import express from "express"
import db from "./db"
import fs from 'fs'
import {resolvers} from "./resolver"
// import { makeExecutableSchema  } from "graphql-tools"
// import { graphiqlExpress, graphqlExpress } from "apollo-server-express"
import { ApolloServer, gql } from 'apollo-server-express'
import http from 'http'

// https://www.apollographql.com/docs/apollo-server/integrations/middleware/
// const port = 9000

const port = process.env.PORT || 9000

const startApolloServer = async () => {
    // const port = process.env.PORT || 9000
    const app = express()
    const port = process.env.PORT || 9000;

    const httpServer = http.createServer()

    const typeDefs = fs.readFileSync('./schema.graphql', {encoding:'utf-8'})

    const server = new ApolloServer({typeDefs, resolvers})

    // More required logic for integrating with Express
    await server.start();

    server.applyMiddleware({app}) //appolo-server-express
    app.listen({port:port}, () =>   console.log(`Now browse to http://localhost:${port}${server.graphqlPath}`))

    // To query write {hello} since there is no query name
}   

startApolloServer()