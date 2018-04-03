import express from 'express'

import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
// import { ApolloEngine } from 'apollo-engine'
import bodyParser from 'body-parser'
import cors from 'cors'

import { schema } from '../schema/buildSchema'
// import { context } from '../middleware/context'

const PORT = 3022

const server = express()

server.use(
	'/graphql',
	cors(),
	bodyParser.json(),
	graphqlExpress(async request => {
		// console.log(request.connection.remoteAddress)

		// console.log(request.connection)

		// const user = await context(request.headers)
		// const user = null

		return {
			schema: schema,
			// context: {
			// 	...user,
			// },
			// tracing: true,
			// cacheControl: true,
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

// const engine = new ApolloEngine({
// 	apiKey: 'service:n0ne-8042:_mOtH7Si33OSiloVCgOJ2w',
// })

// engine.listen(
// 	{
// 		port: PORT,
// 		expressApp: server,
// 	},
// 	() => {
// 		console.log(`GraphQL Server is now runninig on http://localhost:${PORT}/graphql`)
// 		console.log(`View GraphiQL at http://localhost:${PORT}/graphiql`)
// 	}
// )

server.listen(PORT, () => {
	console.log(`GraphQL Server is now runninig on http://localhost:${PORT}/graphql`)
	console.log(`View GraphiQL at http://localhost:${PORT}/graphiql`)
})
