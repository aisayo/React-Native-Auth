import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';

import { Header } from './src/components/common';


class App extends Component {

	componentWillMount() {
		firebase.initializeApp({
			apiKey: 'AIzaSyB69rmKDxO8mkrQSi0QZ5m1r6KZMMJ_tvU',
			authDomain: 'auth-c6eb6.firebaseapp.com',
			databaseURL: 'https://auth-c6eb6.firebaseio.com',
			projectId: 'auth-c6eb6',
			storageBucket: 'auth-c6eb6.appspot.com',
			messagingSenderId: '509356218529'
		  });
	}

	render() {
		return (
			<View>
				<Header headerText="Authentication" />
				<Text>An App</Text>
			</View>
		);
	}
}

export default App;