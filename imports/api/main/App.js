import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import { Router } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'

import MainContainer from '../containers/MainContainer/MainContainer'

const history = createHistory()

// Pass your GraphQL endpoint to uri
const client = new ApolloClient({
	uri: 'http://192.168.55.200:3022/graphql',
})

const App = () => (
	<ApolloProvider client={client}>
		<Router history={history}>
			<MainContainer />
		</Router>
	</ApolloProvider>
)

export default App
