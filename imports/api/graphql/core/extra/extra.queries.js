import gql from 'graphql-tag'

export const EXTRA_QUERY = gql`
	query extra {
		extra {
			_id
			lang
			strong
			weak
			interests
		}
	}
`
