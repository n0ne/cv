import gql from 'graphql-tag'

export const JOBS_QUERY = gql`
	query Jobs {
		jobs {
			_id
			from
			to
			company
			position
			stack {
				_id
				value
			}
		}
	}
`
