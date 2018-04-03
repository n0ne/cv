import React from 'react'
import ReactDOM from 'react-dom'

import { Meteor } from 'meteor/meteor'

import App from '../../api/main/App'

Meteor.startup(() => {
	ReactDOM.render(<App />, document.getElementById('app'))
})

Meteor.startup(() => {
	navigator.serviceWorker
		.register('/sw.js')
		.then()
		.catch(error => console.log('ServiceWorker registration failed: ', error))
})
