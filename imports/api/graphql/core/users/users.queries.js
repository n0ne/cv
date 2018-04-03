import gql from 'graphql-tag'

export const ME_QUERY = gql`
	query User {
		me {
			_id
			firstName
			secondName
			address
			cell
			skype
			DOB
			martialStatus
			children
			drivingLicense
			characteristics
		}
	}
`
