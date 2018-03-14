import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header, Button, Spinner } from './src/components/common';
import LoginForm from './src/components/LoginForm';


class App extends Component {
	state = { loggedIn: null };

	componentWillMount() {
		firebase.initializeApp({
			apiKey: 'AIzaSyB69rmKDxO8mkrQSi0QZ5m1r6KZMMJ_tvU',
			authDomain: 'auth-c6eb6.firebaseapp.com',
			databaseURL: 'https://auth-c6eb6.firebaseio.com',
			projectId: 'auth-c6eb6',
			storageBucket: 'auth-c6eb6.appspot.com',
			messagingSenderId: '509356218529'
		  });

		  firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				this.setState({loggedIn:true });
			} else {
				this.setState({loggedIn: false});
			}
		  });
	}

	renderContent() {
		switch (this.state.loggedIn) {
			case true:
				return (
				<Button onPress={() => firebase.auth().signOut()}>
					Log Out
				</Button>
				);
			case false:
				return <LoginForm />;
			default: 
				return <Spinner size="large" />
		}
	}

	render() {
		return (
			<View>
				<Header headerText="Authentication" />
				{this.renderContent()}
			</View>
		);
	}
}

export default App;

