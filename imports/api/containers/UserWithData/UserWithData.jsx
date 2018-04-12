import React from 'react'
import PropTypes from 'prop-types'

import { Switch, Route } from 'react-router-dom'

import { Query } from 'react-apollo'
import { Grid, Row, Col } from 'react-bootstrap'

import { ME_QUERY } from '../../graphql/core/users/users.queries'
import PersonalItem from '../../../ui/dumb/PersonalItem/PersonalItem'
import Avatar from '../../../ui/components/Avatar/Avatar'

import Jobs from '../Jobs/Jobs'
import Edu from '../Edu/Edu'
import Extra from '../Extra/Extra'

const UserInfo = ({
	me: {
		_id,
		firstName,
		secondName,
		address,
		cell,
		skype,
		DOB,
		martialStatus,
		children,
		drivingLicense,
		characteristics,
	},
}) => {
	const maritalValue = martialStatus ? 'Married' : 'Single'
	return (
		<Grid>
			<Row>
				<Col xs={12} md={12}>
					<h3>Personal data</h3>
				</Col>
				<Col xs={8} md={8}>
					<PersonalItem title="First name, second name" value={`${firstName} ${secondName}`} />
					<PersonalItem title="Post address" value={address} />
					<PersonalItem title="Mobile phone" value={cell} />
					<PersonalItem title="Skype" value={skype} />
					<PersonalItem title="Date of Birth" value={DOB} />
					<PersonalItem title="Marital Status" value={maritalValue} />
					<PersonalItem title="Children" value={children} />
					<PersonalItem title="Driving license" value={drivingLicense} />
				</Col>
				<Col xs={4} md={4}>
					<Avatar id={_id} />
				</Col>
			</Row>
			<Row>
				<Col xs={12} md={12}>
					<h4 className="text-center">Personal characteristics</h4>
					<ul className="dests">
						{characteristics.map(function(ch, index) {
							return <li key={`ch-${index}`}>{ch}</li>
						})}
					</ul>
				</Col>
			</Row>
			<Row>
				<Col xs={12} md={12}>
					<Switch>
						<Route path="/" exact strict component={Jobs} />
						<Route path="/jobs/" exact strict component={Jobs} />
						<Route path="/education/" exact strict component={Edu} />
						<Route path="/extra/" exact strict component={Extra} />
					</Switch>
				</Col>
			</Row>
		</Grid>
	)
}

UserInfo.propTypes = {
	me: PropTypes.object.isRequired,
}

const UserWithData = () => (
	<Query query={ME_QUERY}>
		{({ loading, data }) => {
			console.log(data)
			if (loading) return <span>loading....</span>
			return <UserInfo me={data.me} />
		}}
	</Query>
)

export default UserWithData
