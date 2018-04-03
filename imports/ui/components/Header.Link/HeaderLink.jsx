import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { pure, compose } from 'recompose'
import { Link, withRouter } from 'react-router-dom'
import { capitalize } from 'lodash'

class HeaderLink extends Component {
	render() {
		const { section, location } = this.props

		const loc = location.pathname.split('/')
		let background = '#f8f8f8'
		if (loc[1] === '' && section === 'jobs') {
			background = '#d7d7d7'
		}
		if (loc[1] === section) {
			background = '#d7d7d7'
		}
		return (
			<li role="presentation" style={{ color: '#888', background }}>
				<Link to={`/${section}/`} role="button">
					{capitalize(section)}
				</Link>
			</li>
		)
	}
}
//
HeaderLink.propTypes = {
	section: PropTypes.string.isRequired,
	location: PropTypes.object.isRequired,
}

export default compose(withRouter, pure)(HeaderLink)
