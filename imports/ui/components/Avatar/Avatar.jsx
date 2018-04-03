import React, { Component } from 'react'
import PropTypes from 'prop-types'

import axios from 'axios'

import { Image } from 'react-bootstrap'

class Avatar extends Component {
	componentDidMount() {
		//In this way I can send any type of request to any REST or other end-points
		axios
			.get(`https://graph.facebook.com/${this.props.id}?fields=picture.type(large)&width=160&height=160`)
			.then(response => {
				this.setState({ image: response.data.picture.data.url })
			})
			.catch(error => {
				console.log(error)
			})
	}

	state = { image: '' }

	render() {
		return <Image src={this.state.image} rounded />
	}
}

export default Avatar
//
Avatar.propTypes = {
	id: PropTypes.string.isRequired,
}
