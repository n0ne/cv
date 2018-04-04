import express from 'express'

import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import bodyParser from 'body-parser'
import cors from 'cors'

import { schema } from '../schema/buildSchema'

const PORT = 3022

const server = express()

server.use(
	'/graphql',
	cors(),
	bodyParser.json(),
	graphqlExpress(async request => {
		return {
			schema: schema,
			rootValue: {},
		}
	})
)

server.use(
	'/graphiql',
	graphiqlExpress({
		endpointURL: '/graphql',
	})
)

server.listen(PORT, () => {
	console.log(`GraphQL Server is now runninig on http://localhost:${PORT}/graphql`)
	console.log(`View GraphiQL at http://localhost:${PORT}/graphiql`)
})
