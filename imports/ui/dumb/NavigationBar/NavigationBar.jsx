import React from 'react'
import PropTypes from 'prop-types'

import { Navbar, Nav } from 'react-bootstrap'

// import UserManagement from '../../components/UserManagement/UserManagement'
// import ChangeLocale from '../../components/Change.Locale/ChangeLocale'
// import Search from '../../components/Search/Search'

import HeaderLink from '../../components/Header.Link/HeaderLink'

import './NavigationBar.css'

const NavigationBar = ({ user, login, logout }) => {
	return (
		<Navbar collapseOnSelect>
			<Navbar.Header>
				<Navbar.Brand>
					<a>Curriculum Vitae</a>
				</Navbar.Brand>
				<Navbar.Toggle />
			</Navbar.Header>
			<Navbar.Collapse>
				<Nav>
					<HeaderLink section="jobs" />
					<HeaderLink section="education" />
					<HeaderLink section="extra" />
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
}

NavigationBar.propTypes = {
	// client:         PropTypes.object,
	// history:	      PropTypes.object,
	user: PropTypes.object,
}

export default NavigationBar
