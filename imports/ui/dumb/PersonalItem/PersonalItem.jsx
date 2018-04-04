import React from 'react'
import PropTypes from 'prop-types'

import { Row, Col } from 'react-bootstrap'

const PersonalItem = ({ title = 'Default title', value = 'default value' }) => {
	return (
		<Row>
			<Col xs={4} md={4}>
				<strong>{title}:</strong>
			</Col>
			<Col xs={8} md={8}>
				{value}
			</Col>
		</Row>
	)
}

PersonalItem.propTypes = {
	title: PropTypes.string,
	value: PropTypes.string,
}

export default PersonalItem
