import { makeExecutableSchema } from 'graphql-tools'

import User from '../core/users/user.type'
import Jobs from '../core/jobs/job.type'
import Edu from '../core/edu/edu.type'
import Extra from '../core/extra/extra.type'

import resolvers from '../resolvers/rootResolver'

const Query = `
	type Query {
    me:		User
    jobs: [Job]
    edu: [Edu]
    extra: Extra
	}
`

const SchemaDefinition = `
	schema {
		query:    Query
	}
`

export const schema = makeExecutableSchema({
	typeDefs: [SchemaDefinition, Query, ...User, ...Jobs, ...Edu, ...Extra],
	resolvers,
})
