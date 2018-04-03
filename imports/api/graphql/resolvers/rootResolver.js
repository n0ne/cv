import { meResolver } from '../core/users/users.resolvers'
import { jobsResolver } from '../core/jobs/jobs.resolvers'
import { eduResolver } from '../core/edu/edu.resolvers'
import { extraResolver } from '../core/extra/extra.resolvers'

const resolvers = {
	Query: {
		me: meResolver,
		jobs: jobsResolver,
		edu: eduResolver,
		extra: extraResolver,
	},
}

export default resolvers
