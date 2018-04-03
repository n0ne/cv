import React from 'react'
import PropTypes from 'prop-types'

import { Query } from 'react-apollo'
import { Row, Col } from 'react-bootstrap'

import { EDU_QUERY } from '../../graphql/core/edu/edu.queries'

const EduItem = ({ item: { _id, from, to, info } }) => {
	return (
		<Row>
			<Col xs={12} md={12}>
				<Row>
					<Col xs={3} md={3}>
						<strong>
							{from} - {to}
						</strong>
					</Col>
					<Col xs={9} md={9}>
						{info}
					</Col>
				</Row>
			</Col>
		</Row>
	)
}
EduItem.propTypes = {
	item: PropTypes.object.isRequired,
}

const Edu = ({ edu }) => {
	return (
		<>
			<h3>Education</h3>
			{edu.map((item, index) => {
				return <EduItem key={`edu-${item._id}`} item={item} />
			})}
		</>
	)
}

Edu.propTypes = {
	edu: PropTypes.array.isRequired,
}

const EduWithData = () => (
	<Query query={EDU_QUERY}>
		{({ loading, data: { edu } }) => {
			if (loading) return <span>loading....</span>
			return <Edu edu={edu} />
		}}
	</Query>
)

export default EduWithData
