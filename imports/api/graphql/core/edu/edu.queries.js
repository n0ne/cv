import gql from 'graphql-tag'

export const EDU_QUERY = gql`
	query edu {
		edu {
			_id
			from
			to
			info
		}
	}
`
