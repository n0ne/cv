import React, { Component, Fragment } from 'react'

import NavigationBar from '../../../ui/dumb/NavigationBar/NavigationBar.jsx'
import UserWithData from '../UserWithData/UserWithData'
// import MapContainer from '../MapContainer/MapContainer'

class MainContainer extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {}

	componentWillUnmount() {}

	render() {
		return (
			<Fragment>
				<NavigationBar />
				<UserWithData />
			</Fragment>
		)
	}
}
//
MainContainer.propTypes = {}

export default MainContainer
