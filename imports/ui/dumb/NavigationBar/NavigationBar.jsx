import React from 'react'

import { Navbar, Nav } from 'react-bootstrap'

import HeaderLink from '../../components/Header.Link/HeaderLink'

import './NavigationBar.css'

const NavigationBar = () => {
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

export default NavigationBar
