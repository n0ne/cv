import React from 'react'
import PropTypes from 'prop-types'

import { Query } from 'react-apollo'
import { Row, Col } from 'react-bootstrap'

import { EXTRA_QUERY } from '../../graphql/core/extra/extra.queries'

const Extra = ({ extra: { lang, strong, weak, interests } }) => {
	return (
		<>
			<h3>Extra information</h3>
			<Row>
				<Col xs={3} md={3}>
					<strong>Languages:</strong>
				</Col>
				<Col xs={8} md={8}>
					{lang.join(', ')}
				</Col>
			</Row>
			<Row>
				<Col xs={3} md={3}>
					<strong>Strong Aspects:</strong>
				</Col>
				<Col xs={8} md={8}>
					{strong.join(', ')}
				</Col>
			</Row>
			<Row>
				<Col xs={3} md={3}>
					<strong>Weak Aspects:</strong>
				</Col>
				<Col xs={8} md={8}>
					{weak.join(', ')}
				</Col>
			</Row>
			<Row>
				<Col xs={3} md={3}>
					<strong>Interests:</strong>
				</Col>
				<Col xs={8} md={8}>
					{interests.join(', ')}
				</Col>
			</Row>
		</>
	)
}

Extra.propTypes = {
	extra: PropTypes.object.isRequired,
}

const ExtraWithData = () => (
	<Query query={EXTRA_QUERY}>
		{({ loading, data: { extra } }) => {
			if (loading) return <span>loading....</span>
			return <Extra extra={extra} />
		}}
	</Query>
)

export default ExtraWithData
