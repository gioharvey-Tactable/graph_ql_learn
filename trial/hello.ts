import { graphql, buildSchema } from "graphql";

// Created the scheme with type of query
const schema = buildSchema(
    `type Query {
        hello: String
    }`
)

// The data to pass to query
const root:{} = {
    hello: () => {
        'Hello World'
    }
}


graphql(schema, '{ hello }', root).then(
    (response) => console.log(response)
)